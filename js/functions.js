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
  .addEventListener('click', function() { flyToCoordinates(map, item[0], 0, 0.01, 10, 1.5) });
}

function addListenerToPlaces(item) {
  document.getElementById(getItemId(item[2]))
  .addEventListener('click', function() { flyToCoordinates(map, item[0], 0, 0.0003, 15, 1.5) });
}


function addListenerToFLags(item) {
  document.getElementById(item[1]).addEventListener('click', function() { fitRegion(map, item[1]) });
}

// Full Window

function enterMapFullwindow(current_bbox, current_coords) {

  document.getElementById('map-overlay').style.height = "100%";
  document.getElementById('fullwindow-exit-icon').style.display = "block";
  document.getElementById('fullwindow-zoom-out-icon').style.display = "block";
  document.getElementById('menu').style.display = "block";
  document.getElementById('selector').style.display = "block";

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

  }

  if (current_coords.length == 0) {
    fitBoundingBox(map_fullwindow, current_bbox, 0, 0, 100, true);
  } else {
    flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
  }

}

function exitMapFullwindow() {
  document.getElementById('map-overlay').style.height = "0%";
  document.getElementById('fullwindow-exit-icon').style.display = "none";
  document.getElementById('fullwindow-zoom-out-icon').style.display = "none";
  document.getElementById('menu').style.display = "none";
  document.getElementById('selector').style.display = "none";
}

function switchLayer(layer) {
  var layerId = layer.target.id;
  current_map_style = 'mapbox://styles/mapbox/' + layerId;
  map_fullwindow.setStyle(current_map_style);
  map_fullwindow.on('styledata', function() {
    if (layerId == "outdoors-v11") {
      showLatitudeLines(map_fullwindow);
    } else {
      hideLatitudeLines(map_fullwindow);
    }
    loadFlights(map_fullwindow, flights, airports);
  });
}


// Fit/Fly

function fitBoundingBox(map, bbox, x_offset, y_offset, padding, linear) {

  current_coords = [];
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
  current_bbox = [];
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

function showLatitudeLines(map) {
  line_number++;
  addLatitudeLine(map, "Artic_Circle_".concat(line_number.toString()), [-180,66.563444], [180,66.563444], '#FFF', 1, [5,5]);
  addLatitudeLine(map, "Topic_of_Cancer_".concat(line_number.toString()), [-180,23.43656], [180,23.43656], '#DDD', 1, [5,5]);
  addLatitudeLine(map, "Equator_".concat(line_number.toString()), [-180,0], [180,0], '#AAA', 1, [5,5]);
  addLatitudeLine(map, "Tropic_of_Capricorn_".concat(line_number.toString()), [-180,-23.43656], [180,-23.43656], '#DDD', 1, [5,5]);
  addLatitudeLine(map, "Antartic_Circle_".concat(line_number.toString()), [-180,-66.563444], [180,-66.563444], '#FFF', 1, [5,5]);
}

function hideLatitudeLines(map) {
  removeLatitudeLine(map, "Artic_Circle_".concat(line_number.toString()));
  removeLatitudeLine(map, "Topic_of_Cancer_".concat(line_number.toString()));
  removeLatitudeLine(map, "Equator_".concat(line_number.toString()));
  removeLatitudeLine(map, "Tropic_of_Capricorn_".concat(line_number.toString()));
  removeLatitudeLine(map, "Antartic_Circle_".concat(line_number.toString()));
}

function addLatitudeLine(map, id, coord_a, coord_b, color, width, dasharray) {

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
  if (map.getSource(id)) {
    map.removeSource(id);
  }
}

function loadFlights(map, flights, airports) {

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
          color = '#00F';
          width = 2;
          add = document.getElementById("checkbox-flights-domestic").checked;

        } else {
          color = '#F00';
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

  // Calculate the distance in kilometers between route start/end point.
  var lineDistance = turf.length(route.features[0]);

  var arc = [];

  // Number of steps to use in the arc and animation, more steps means
  // a smoother arc and animation, but too many steps will result in a
  // low frame rate
  var steps = 100;

  // Draw an arc between the `origin` & `destination` of the two points
  for (var i = 0; i < lineDistance; i += lineDistance / steps) {
    var segment = turf.along(route.features[0], i);
    arc.push(segment.geometry.coordinates);
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

}

function addFlightLine(map, id, color, width) {

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

}

function removeFlightLine(map, id) {
  if (map.getLayer(id)) {
    map.removeLayer(id);
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
