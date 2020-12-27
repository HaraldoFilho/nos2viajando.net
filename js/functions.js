function createMarkers(map, places, color, scale) {
  var markers = [];
  for (var i = 0; i < places.length; i++) {
    markers[i] = new mapboxgl.Marker({color:color,scale:scale,draggable:false})
    .setLngLat(places[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(places[i][2]));
  }
  return markers;
}

function addMarkersToMap(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].addTo(map);
  }
}

function toggleMarkers(map, markers, checkbox) {
  for (var i = 0; i < markers.length; i++) {
    if (document.getElementById(checkbox).checked) {
      markers[i].addTo(map);
    } else {
      markers[i].remove();
    }
  }
}

function loadMapData(map, markers_scale) {
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale);
  accommodations_markers = createMarkers(map, accommodations, '#dec900', markers_scale);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale);
  photos_markers = createPhotosMarkers(map, locations_dict);
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, accommodations_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}

// Listeners

function addListenerToRegions(item) {
  document.getElementById(getItemId(item[2]))
  .addEventListener('click', function() {
    flyToCoordinates(map, item[0], 0, 0.01, 10, 1.5)
    if (map_fullwindow != null) {
      flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
    }
  });
}

function addListenerToPlaces(item) {
  document.getElementById(getItemId(item[2]))
  .addEventListener('click', function() {
    flyToCoordinates(map, item[0], 0, 0.0003, 15, 1.5)
    if (map_fullwindow != null) {
      flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
    }
  });
}


function addListenerToFLags(item) {
  document.getElementById(item[1]).addEventListener('click', function() {
    fitRegion(map, item[1]);
    if (map_fullwindow != null) {
      fitBoundingBox(map_fullwindow, current_bbox, 0, 0, 100, true);
    }
  });
}


// Full Window

function enterMapFullwindow(current_bbox, current_coords) {

  document.getElementById('map-overlay').style.height = "100%";
  document.getElementById('fullwindow-exit-icon').style.display = "block";
  document.getElementById('fullwindow-zoom-out-icon').style.display = "block";
  document.getElementById('menu').style.display = "block";
  document.getElementById('selector').style.display = "block";
  document.getElementById('fullmap-countries-panel').style.display = "grid";

  if (map_fullwindow == null) {
    map_fullwindow = new mapboxgl.Map({
      container: 'map-overlay',
      style: current_map_style
    });
    map_fullwindow.addControl(new mapboxgl.NavigationControl({showCompass:false}));
    map_fullwindow.dragRotate.disable();
    map_fullwindow.touchZoomRotate.disableRotation();

    layerList = document.getElementById('menu');
    inputs = layerList.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }

    loadMapData(map_fullwindow, 0.7);

    var fullmap_countries_panel = document.getElementById('fullmap-countries-panel');
    setSelectorPosition();

    for (var i = 0; i < countries.length; i++) {
      var country_code = countries[i][1];
      addIcon(country_code, fullmap_countries_panel);
    }

    countries.forEach(addListenerToFLagsFullWindow);

    map_fullwindow.on('render', function() {
      try {
        if (current_map_style != "mapbox://styles/mapbox/satellite-v9") {
          showLatitudeLines(map_fullwindow);
        } else {
          hideLatitudeLines(map_fullwindow);
        }
        loadFlights(map_fullwindow, flights, airports);
      } catch (e) {
        console.log(e);
      }
    });

    if (current_coords.length == 0) {
      fitBoundingBox(map_fullwindow, current_bbox, 0, 0, 100, true);
    } else {
      flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
    }

  }

  fitBoundingBox(map, initial_bbox, init_x_offset, init_y_offset, 30);

}

function addIcon(country_code, panel) {
  var country_name = countries_bbox[country_code][0];
  var elem = document.createElement("IMG");
  elem.setAttribute("id", country_code.concat("__"));
  elem.setAttribute("class", "icon");
  elem.setAttribute("src", getIconSrc(country_code));
  elem.setAttribute("title", country_name);
  elem.setAttribute("alt", country_name);
  var div_icon = document.createElement("DIV");
  div_icon.setAttribute("class", "flag-icon");
  div_icon.appendChild(elem);
  panel.appendChild(div_icon);
}

function setSelectorPosition() {
  var pixels = window.innerWidth/2;
  var selector_position = pixels.toString() + "px";
  document.getElementById("fullmap-countries-panel").style.left = selector_position;
}

function addListenerToFLagsFullWindow(item) {
  document.getElementById(item[1].concat("__")).addEventListener('click', function() { fitRegion(map_fullwindow, item[1]) });
}

function exitMapFullwindow() {
  document.getElementById('map-overlay').style.height = "0%";
  document.getElementById('fullwindow-exit-icon').style.display = "none";
  document.getElementById('fullwindow-zoom-out-icon').style.display = "none";
  document.getElementById('menu').style.display = "none";
  document.getElementById('selector').style.display = "none";
  document.getElementById('fullmap-countries-panel').style.display = "none";
  fitBoundingBox(map_fullwindow, initial_bbox, 0, 0, 100);
}

function switchLayer(layer) {
  var layerId = layer.target.id;
  current_map_style = 'mapbox://styles/mapbox/' + layerId;
  map_fullwindow.setStyle(current_map_style);
}


// Fit/Fly

function fitBoundingBox(map, bbox, x_offset, y_offset, padding, linear) {

  last_coords = current_coords;
  current_coords = [];
  last_bbox = current_bbox;
  current_bbox = bbox;

  var bounding_box = [];

  bounding_box[0] = bbox[0] + x_offset;
  bounding_box[1] = bbox[1] + y_offset;
  bounding_box[2] = bbox[2] + x_offset;
  bounding_box[3] = bbox[3] + y_offset;

  map.fitBounds(bounding_box, {padding: padding, linear:linear});

}

function fitRegion(map, region) {
  var bbox = countries_bbox[region][1];
  fitBoundingBox(map, bbox, 0, 0, 5, false);
}

function flyToCoordinates(map, coords, x_offset, y_offset, zoom, speed) {
  last_bbox = current_bbox;
  current_bbox = [];
  last_coords = current_coords;
  current_coords = coords;
  map.flyTo({center: [coords[0] + x_offset, coords[1] + y_offset], zoom: zoom, speed:speed});
}


// Getters

function getIconSrc(country_code) {
  return "icons/flags/".concat(countries_bbox[country_code][0])
  .replace(/\s/g, "-").toLowerCase().concat(".svg");
}

function getItemId(item_name) {
  return item_name.replace(/\s/g, "_").toUpperCase();
}


function getInitialBoundingBox(markers) {

  var west = 180;
  var south = 90;
  var east = -180;
  var north = -90;

  for (var i = 0; i < markers.length; i++) {

    if (markers[i][0][0] < west) {
      west = markers[i][0][0];
    }
    if (markers[i][0][0] > east) {
      east = markers[i][0][0];
    }
    if (markers[i][0][1] < south) {
      south = markers[i][0][1];
    }
    if (markers[i][0][1] > north) {
      north = markers[i][0][1];
    }

    initial_bbox = [west, south, east, north];

  }

  return initial_bbox;

}


function createPhotosMarkers(map, locations) {
  var photos_markers = [];
  var m = 0;
  for (var country in locations) {
    for (var i = 0; i < locations[country].length; i++) {
      photos_markers[m] = createPhotoMarker(map, locations[country][i]);
      m++;
    }
  }
  return photos_markers;
}

function createPhotoMarker(map, value) {

  var marker = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', 'icons/marker_photo.svg');
  img.setAttribute('width', '20');
  img.setAttribute('height', '20');
  marker.appendChild(img);

  var htmlText = "<div style=\"max-height:410px;overflow:auto;\">";

  for (var i = 0; i < value[1].length; i++) {
    htmlText = htmlText.concat("<a href=\"").concat("https://www.flickr.com/photos/hpfilho/").concat(value[1][i][0])
    .concat("/\" target=\"_blank\"><img src=\"").concat(value[1][i][1]).concat("\"/></a> ");
  }
  htmlText = htmlText.concat("</div>");

  var photo_marker;

  if (value[1].length <= 35) {
    photo_marker = new mapboxgl.Marker({element:marker,scale:1,draggable:false})
    .setLngLat(value[0])
    .setPopup(new mapboxgl.Popup({closeButton:false,maxWidth:'566px'}).setHTML(htmlText));
  } else {
    photo_marker = new mapboxgl.Marker({element:marker,scale:1,draggable:false})
    .setLngLat(value[0])
    .setPopup(new mapboxgl.Popup({closeButton:false,maxWidth:'592px'}).setHTML(htmlText));
  }

  return photo_marker;

}

function createLatitudeLines(map) {
  createLatitudeLine(map, "Artic_Circle", [-180,66.563444], [180,66.563444]);
  createLatitudeLine(map, "Topic_of_Cancer", [-180,23.43656], [180,23.43656]);
  createLatitudeLine(map, "Equator", [-180,0], [180,0]);
  createLatitudeLine(map, "Tropic_of_Capricorn", [-180,-23.43656], [180,-23.43656]);
  createLatitudeLine(map, "Antartic_Circle", [-180,-66.563444], [180,-66.563444]);
}

function showLatitudeLines(map) {
  createLatitudeLines(map);
  addLatitudeLine(map, "Artic_Circle", '#FFF', 1, [5,5]);
  addLatitudeLine(map, "Topic_of_Cancer", '#DDD', 1, [5,5]);
  addLatitudeLine(map, "Equator", '#AAA', 1, [5,5]);
  addLatitudeLine(map, "Tropic_of_Capricorn", '#DDD', 1, [5,5]);
  addLatitudeLine(map, "Antartic_Circle", '#FFF', 1, [5,5]);
}

function hideLatitudeLines(map) {
  removeLatitudeLine(map, "Artic_Circle");
  removeLatitudeLine(map, "Topic_of_Cancer");
  removeLatitudeLine(map, "Equator");
  removeLatitudeLine(map, "Tropic_of_Capricorn");
  removeLatitudeLine(map, "Antartic_Circle");
}

function createLatitudeLine(map, id, coord_a, coord_b) {

  if (!map.getSource(id)) {
    map.addSource(id, {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': [ coord_a, coord_b ]
        }
      }
    });
  }

}

function addLatitudeLine(map, id, color, width, dasharray) {

  if (!map.getLayer(id)) {
    map.addLayer({
      'id': id,
      'type': 'line',
      'source': id,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': color,
        'line-width': width,
        'line-dasharray': dasharray
      }
    });
  }
}

function removeLatitudeLine(map, id) {
  if (map.getLayer(id)) {
    map.removeLayer(id);
  }
}

function loadFlights(map, flights, airports) {

  map.loadImage('https://raw.githubusercontent.com/nos2viajando/nos2viajando.github.io/master/icons/flight_international.png', function(error, image) {
    if (!map.hasImage('flight_international')) map.addImage('flight_international', image);
    if (error) throw error;
  });

  map.loadImage('https://raw.githubusercontent.com/nos2viajando/nos2viajando.github.io/master/icons/flight_domestic.png', function(error, image) {
    if (!map.hasImage('flight_domestic')) map.addImage('flight_domestic', image);
    if (error) throw error;
  });

  for (var f = 0; f < flights.length; f++) {
    var route = 'route_' + (f+1);
    for (var t = 0; t < flights[f][1].length; t++) {
      for (var c = 1; c < flights[f][1][t].length; c++) {
        var id = route + '_' + (t+1) + '_' + (c);
        for (var a = 0; a < airports.length; a++) {

          var airport_1 = flights[f][1][t][c-1];
          var airport_2 = flights[f][1][t][c];

          if (airport_1 == airports[a][3]) {
            var coord_a = airports[a][0];
            var country_a = airports[a][1];
          }
          if (airport_2 == airports[a][3]) {
            var coord_b = airports[a][0];
            var country_b = airports[a][1];
          }

        }

        var color;
        var width;
        var add;

        if (country_a == country_b) {
          color = color_domestic;
          width = 2;
          add = document.getElementById("checkbox-flights-domestic").checked;

        } else {
          color = color_international;
          width = 2;
          add = document.getElementById("checkbox-flights-international").checked;
        }

        createFlightLine(map, id, coord_a, coord_b);

        if (add) {
          addFlightLine(map, id, color, width);
        } else {
          removeFlightLine(map, id);
        }

      }
    }
  }
}

function createFlightLine(map, id, coord_a, coord_b) {

  var route = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [coord_a, coord_b]
        }
      }
    ]
  }

  // Number of steps to use in the arc
  var steps = 1000;

  // Calculate the distance in kilometers between route start/end point.
  var lineDistance = turf.length(route.features[0]);

  var arc = [];
  var prev_point_coords = [];
  var current_point_coords = [];
  var point_added = false;
  var prev_segment;
  var segment;

  // Draw an arc between the `origin` & `destination` of the two points
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
    prev_segment = segment;
    segment = turf.along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
    if (i > lineDistance/2+lineDistance/10 && !point_added) {
      prev_point_coords = prev_segment.geometry.coordinates
      current_point_coords = segment.geometry.coordinates;
      point_added = true;
    }
  }
  arc.push(coord_b);

  // Update the route with calculated arc coordinates
  route.features[0].geometry.coordinates = arc;

  if (!map.getSource(id)) {
    map.addSource(id, {
      'type': 'geojson',
      'data': route
    });
  }

  var point = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'Point',
          'coordinates': current_point_coords
        }
      }
    ]
  };

  // Calculate the bearing to ensure the icon is rotated to match the route arc
  // The bearing is calculated between the current point and the next point, except
  // at the end of the arc, which uses the previous point and the current point
  point.features[0].properties.bearing = turf.bearing(
    turf.point(prev_point_coords),
    turf.point(current_point_coords)
  );

  if (!map.getSource(id.concat("__"))) {
    map.addSource(id.concat("__"), {
      'type': 'geojson',
      'data': point
    });
  }

}

function addFlightLine(map, id, color, width) {

  var flight_icon;

  if (color == color_international) {
    flight_icon = 'flight_international';
  } else {
    flight_icon = 'flight_domestic';
  }

  if (!map.getLayer(id)) {
    map.addLayer({
      'id': id,
      'type': 'line',
      'source': id,
      'paint': {
        'line-color': color,
        'line-width': width
      }
    });
  }

  if (!map.getLayer(id.concat("__"))) {
    map.addLayer({
      'id': id.concat("__"),
      'source': id.concat("__"),
      'type': 'symbol',
      'layout': {
        'icon-image': flight_icon,
        'icon-rotate': ['get', 'bearing'],
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      }
    });
  }

}

function removeFlightLine(map, id) {

  if (map.getLayer(id)) {
    map.removeLayer(id);
  }

  if (map.getLayer(id.concat("__"))) {
    map.removeLayer(id.concat("__"));
  }

}

function hideSideBar() {
  document.getElementById('sidebar').style.display = 'none';
  document.getElementById('travelmap').style = "grid-column:1 / span 2";
  document.getElementById('open-sidebar').style.display = 'block';
  document.getElementById('close-sidebar').style.display = 'none';
}

function showSideBar() {
  document.getElementById('sidebar').style.display = 'grid';
  document.getElementById('travelmap').style = "grid-column:2";
  document.getElementById('open-sidebar').style.display = 'none';
  document.getElementById('close-sidebar').style.display = 'block';
}

function hideSideBarTab() {
  document.getElementById('close-sidebar').style = 'margin-left:289px';
}

function showSideBarTab() {
  document.getElementById('close-sidebar').style = 'margin-left:310px';
}
