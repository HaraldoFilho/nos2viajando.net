// Map style

function toggleMapStyle() {
  if (current_map_style == 'light-v10') {
    current_map_style = 'satellite-v9'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', '../icons/map-light.svg');
  } else {
    current_map_style = 'light-v10'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', '../icons/map-satellite.svg');
  }
}


// Markers

function createMarkers(map, places, color, scale) {
  var markers = [];
  for (var i = 0; i < places.length; i++) {
    var text = "<p style=\"text-align:center;font-size:30px;font-weight:bold;line-height:1.25;margin: 0px 5px -5px 5px;\">" + places[i][2] + "</p>";
    markers[i] = new mapboxgl.Marker({color:color,scale:scale,draggable:false})
    .setLngLat(places[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setHTML(text));
  }
  return markers;
}

function addMarkersToMap(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].addTo(map);
  }
}

function loadMarkersOnMap(map, markers_scale) {
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale);
  accommodations_markers = createMarkers(map, accommodations, '#dec900', markers_scale);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale);
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, accommodations_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}


// Icons

function getIconSrc(country_code) {
  return "../icons/flags/".concat(countries_bbox[country_code][0])
  .replace(/\s/g, "-").toLowerCase().concat(".svg");
}


function addIcon(country_code, panel) {
  var country_name = countries[country_code];
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
