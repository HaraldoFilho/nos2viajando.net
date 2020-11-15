function loadMapData(map, markers_scale) {

  for (var i = 0; i < airports.length; i++) {

    new mapboxgl.Marker({color:'#a0a0a0',scale:markers_scale,draggable:false})
    .setLngLat(airports[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(airports[i][2]))
    .addTo(map);

  }

  for (var i = 0; i < accommodations.length; i++) {

    new mapboxgl.Marker({color:'#dec900',scale:markers_scale,draggable:false})
    .setLngLat(accommodations[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(accommodations[i][2]))
    .addTo(map);

  }

  for (var i = 0; i < attractions.length; i++) {

    new mapboxgl.Marker({color:'#ff8080',scale:markers_scale,draggable:false})
    .setLngLat(attractions[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(attractions[i][2]))
    .addTo(map);

  }

  for (var i = 0; i < parks.length; i++) {

    new mapboxgl.Marker({color:'#55a455',scale:markers_scale,draggable:false})
    .setLngLat(parks[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(parks[i][2]))
    .addTo(map);

  }

  for (var i = 0; i < cities.length; i++) {

    new mapboxgl.Marker({color:'#3fb1ce',scale:markers_scale,draggable:false})
    .setLngLat(cities[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setText(cities[i][2]))
    .addTo(map);

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

function addListenerToFLags(country_code) {
  document.getElementById(country_code).addEventListener('click', function() { fitRegion(map, country_code) });
}


// Full Window

function enterMapFullwindow(current_bbox, current_coords) {
  document.getElementById('map-overlay').style.height = "100%";
  document.getElementById('fullwindow-exit-icon').style.width = "40px";
  document.getElementById('fullwindow-exit-icon').style.height = "40px";
  var map_fullwindow = new mapboxgl.Map({
    container: 'map-overlay',
    style: 'mapbox://styles/mapbox/outdoors-v11'
  });
  console.log(current_coords);
  loadMapData(map_fullwindow, 0.7);
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
