// Map style

function toggleMapStyle(icons_path) {
  if (current_map_style == 'light-v10') {
    current_map_style = 'satellite-v9'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', icons_path.concat('map-light.svg'));
  } else {
    current_map_style = 'light-v10'
    map.setStyle('mapbox://styles/mapbox/' + current_map_style);
    document.getElementById('map-style-icon').setAttribute('src', icons_path.concat('map-satellite.svg'));
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

function loadMarkersOnMap(map, markers_scale) {
  restaurants_markers = createMarkers(map, restaurants, '#ff9955', markers_scale);
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale);
  accommodations_markers = createMarkers(map, accommodations, '#dec900', markers_scale);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale);
  addMarkersToMap(map, restaurants_markers);
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, accommodations_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}

function addListenerToFlagsMobile(id, padding) {
  document.getElementById(id).addEventListener('click', function() {
    fitRegionMobile(map, id, padding);
    if (map_fullwindow != null) {
      fitBoundingBox(map_fullwindow, current_bbox, 0, 0, map_padding_fw, true);
    }
  });
}

function fitRegionMobile(map, region, padding) {

  var bbox = countries_bbox[region][1];

  fitBoundingBox(map, bbox, 0, 0, padding, false);

}
