function loadMapData(map, markers_scale) {

  var airports_checked = document.getElementById("checkbox-airports").checked;
  var accommodations_checked = document.getElementById("checkbox-accommodations").checked;
  var attractions_checked = document.getElementById("checkbox-attractions").checked;
  var parks_checked = document.getElementById("checkbox-parks").checked;
  var cities_checked = document.getElementById("checkbox-cities").checked;

  if (airports_checked) {
    for (var i = 0; i < airports.length; i++) {
      new mapboxgl.Marker({color:'#a0a0a0',scale:markers_scale,draggable:false})
      .setLngLat(airports[i][0])
      .setPopup(new mapboxgl.Popup({closeButton:false}).setText(airports[i][2]))
      .addTo(map);
    }
  }

  if (accommodations_checked) {
    for (var i = 0; i < accommodations.length; i++) {
      new mapboxgl.Marker({color:'#dec900',scale:markers_scale,draggable:false})
      .setLngLat(accommodations[i][0])
      .setPopup(new mapboxgl.Popup({closeButton:false}).setText(accommodations[i][2]))
      .addTo(map);
    }
  }

  if (attractions_checked) {
    for (var i = 0; i < attractions.length; i++) {
      new mapboxgl.Marker({color:'#ff8080',scale:markers_scale,draggable:false})
      .setLngLat(attractions[i][0])
      .setPopup(new mapboxgl.Popup({closeButton:false}).setText(attractions[i][2]))
      .addTo(map);
    }
  }

  if (parks_checked) {
    for (var i = 0; i < parks.length; i++) {
      new mapboxgl.Marker({color:'#55a455',scale:markers_scale,draggable:false})
      .setLngLat(parks[i][0])
      .setPopup(new mapboxgl.Popup({closeButton:false}).setText(parks[i][2]))
      .addTo(map);
    }
  }

  if (cities_checked) {
    for (var i = 0; i < cities.length; i++) {
      new mapboxgl.Marker({color:'#3fb1ce',scale:markers_scale,draggable:false})
      .setLngLat(cities[i][0])
      .setPopup(new mapboxgl.Popup({closeButton:false}).setText(cities[i][2]))
      .addTo(map);
    }
  }

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
  document.getElementById('fullwindow-exit-icon').style.width = "28px";
  document.getElementById('fullwindow-exit-icon').style.height = "28px";
  document.getElementById('fullwindow-zoom-out-icon').style.width = "28px";
  document.getElementById('fullwindow-zoom-out-icon').style.height = "28px";
  document.getElementById('menu').style.display = "block";
  document.getElementById('selector').style.display = "block";

  if (map_fullwindow == null) {
    map_fullwindow = new mapboxgl.Map({
      container: 'map-overlay',
      style: 'mapbox://styles/mapbox/outdoors-v11'
    });
    map_fullwindow.addControl(new mapboxgl.NavigationControl());

    layerList = document.getElementById('menu');
    inputs = layerList.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }

    loadPhotosOnMap(map_fullwindow, locations_dict);
    loadMapData(map_fullwindow, 0.7);
    loadFlights(map_fullwindow, flights, airports);
  }

  if (current_coords.length == 0) {
    fitBoundingBox(map_fullwindow, current_bbox, 0, 0, 100, true);
  } else {
    flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
  }

}

function exitMapFullwindow() {
  document.getElementById('map-overlay').style.height = "0%";
  document.getElementById('fullwindow-exit-icon').style.width = "0";
  document.getElementById('fullwindow-exit-icon').style.height = "0";
  document.getElementById('menu').style.display = "none";
  document.getElementById('selector').style.display = "none";
}


function switchLayer(layer) {
  var layerId = layer.target.id;
  current_map_style = 'mapbox://styles/mapbox/' + layerId;
  map_fullwindow.setStyle(current_map_style);
  refreshMap(map_fullwindow, current_map_style, locations_dict)
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
  var bbox = countries_bbox[region][1]
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

function loadPhotosOnMap(map, locations_dict) {

  var photos_checked = document.getElementById("checkbox-photos").checked;

  if (photos_checked) {
    for (var country in locations_dict) {
      for (var i = 0; i < locations_dict[country].length; i++) {
        addPhotoMarker(map, locations_dict[country][i]);
      }
    }
  }

}

function addPhotoMarker(map, value) {

  var marker = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', 'icons/marker_photo.svg');
  img.setAttribute('width', '28');
  img.setAttribute('height', '28');
  marker.appendChild(img);

  var htmlText = "<div style=\"max-height:410px;overflow:auto;\">";

  for (var i = 0; i < value[1].length; i++) {
    htmlText = htmlText.concat("<a href=\"").concat("https://www.flickr.com/photos/hpfilho/").concat(value[1][i][0])
    .concat("/\" target=\"_blank\"><img src=\"").concat(value[1][i][1]).concat("\"/></a> ");
  }
  htmlText = htmlText.concat("</div>");

  if (value[1].length <= 35) {
    new mapboxgl.Marker({element:marker,scale:1,draggable:false})
    .setLngLat(value[0])
    .setPopup(new mapboxgl.Popup({closeButton:false,maxWidth:'566px'}).setHTML(htmlText))
    .addTo(map);
  } else {
    new mapboxgl.Marker({element:marker,scale:1,draggable:false})
    .setLngLat(value[0])
    .setPopup(new mapboxgl.Popup({closeButton:false,maxWidth:'592px'}).setHTML(htmlText))
    .addTo(map);
  }

}

function refreshMap(map, current_map_style, locations_dict){

  document.getElementById('map-overlay').style.height = "100%";
  document.getElementById('fullwindow-exit-icon').style.width = "28px";
  document.getElementById('fullwindow-exit-icon').style.height = "28px";
  document.getElementById('fullwindow-zoom-out-icon').style.width = "28px";
  document.getElementById('fullwindow-zoom-out-icon').style.height = "28px";

  map_fullwindow.remove();
  map_fullwindow = new mapboxgl.Map({
    container: 'map-overlay',
    style: current_map_style
  });

  map_fullwindow.addControl(new mapboxgl.NavigationControl());
  loadMapData(map_fullwindow, 0.7);
  loadPhotosOnMap(map_fullwindow, locations_dict);
  loadFlights(map_fullwindow, flights, airports);

  if (current_coords.length == 0) {
    fitBoundingBox(map_fullwindow, current_bbox, 0, 0, 100, true);
  } else {
    flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5);
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

        if (add) {
          addFlightLine(map, id, coord_a, coord_b, color, width);
        }

      }
    }
  }
}

function addFlightLine(map, id, coord_a, coord_b, color, width) {

  map.on('load', function () {

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
        'line-width': width
      }
    });

  });

}
