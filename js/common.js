// Markers

function addMarkersToMap(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].addTo(map);
  }
}

function toggleMarkers(map, markers, checkbox) {
  if (document.getElementById(checkbox).checked
      && (!document.getElementById("checkbox-farthest-points").checked || checkbox == "checkbox-farthest-points")) {
    showMarkers(map, markers);
  } else {
    hideMarkers(map, markers);
  }
}

function showMarkers(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].addTo(map);
  }
}

function hideMarkers(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].remove();
  }
}


// Listeners

function addListenerToFLags(id, padding) {
  document.getElementById(id).addEventListener('click', function() {
    fitRegion(map, id, padding);
    if (map_fullwindow != null) {
      fitBoundingBox(map_fullwindow, current_bbox, 0, 0, map_padding_fw, true);
    }
  });
}

function addListenerToFLagsFullWindow(id) {
  document.getElementById(id.concat("__")).addEventListener('click', function() {
    fitRegion(map_fullwindow, id, map_padding_fw);
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

function fitRegion(map, region, padding) {
  var bbox = countries_bbox[region][1];
  fitBoundingBox(map, bbox, 0, 0, padding, false);
}

function flyToCoordinates(map, coords, x_offset, y_offset, zoom, speed, scroll) {
  if (scroll) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  current_bbox = [];
  current_coords = coords;
  map.flyTo({center: [coords[0] + x_offset, coords[1] + y_offset], zoom: zoom, speed:speed});
}


// Getters

function getItemId(item_name) {
  return item_name.replace(/\s/g, "_").toUpperCase();
}

function getInitialBoundingBox(markers, long_offset) {

  var west = getOffsetLongitude(180, long_offset);
  var south = 90;
  var east = getOffsetLongitude(-180, long_offset);
  var north = -90;

  for (var i = 0; i < markers.length; i++) {

    if (getOffsetLongitude(markers[i][0][0], long_offset) < west) {
      west = getOffsetLongitude(markers[i][0][0], long_offset);
    }
    if (getOffsetLongitude(markers[i][0][0], long_offset) > east) {
      east = getOffsetLongitude(markers[i][0][0], long_offset);
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

    loadMarkersOnMap(map_fullwindow, 0.7);

    var fullmap_countries_panel = document.getElementById('fullmap-countries-panel');
    setSelectorPosition();

    for (var country_code in countries) {
      addIcon(country_code, fullmap_countries_panel);
      addListenerToFLagsFullWindow(country_code);
    }

    map_fullwindow.on('render', function() {
      try {
        if (current_map_style == "mapbox://styles/mapbox/outdoors-v11") {
          showLatitudeLines(map_fullwindow);
        } else {
          hideLatitudeLines(map_fullwindow);
        }
        loadFarthestPoints(map_fullwindow, farthest_points);
        loadFlights(map_fullwindow, flights, airports);
        loadCarRoutes(map_fullwindow, driving, accommodations, hide_car_routes);
      } catch (e) {
        console.log(e);
      }
    });

    if (current_coords.length == 0) {
      fitBoundingBox(map_fullwindow, current_bbox, init_x_offset, 0, map_padding_fw, true);
    } else {
      flyToCoordinates(map_fullwindow, current_coords, 0, 0, 14, 1.5, false);
    }

  }

  fitBoundingBox(map, initial_bbox, init_x_offset, init_y_offset, 30, true);

}

function getFarthestDistances() {

  var my_home = new mapboxgl.LngLat(home[0][0], home[0][1]);

  var far_points = [];
  var far_points_km = [];

  for (var i = 0; i < farthest_points.length; i++) {
    far_points[i] = new mapboxgl.LngLat(farthest_points[i][0][0], farthest_points[i][0][1]);
  }

  for (var i = 0; i < far_points.length; i++) {
    far_points_km[i] = my_home.distanceTo(far_points[i])/1000000;
  }

  var farthest = 0;

  for (var i = 1; i < far_points_km.length; i++) {
    if (far_points_km[i] > far_points_km[i-1]) {
      farthest = i;
    }
  }

  for (var i = 0; i < far_points.length; i++) {
    if (far_points_km[i] < 1) {
      far_points_km[i] *= 1000;
      far_points_km[i] = far_points_km[i].toFixed(0);
    } else {
      far_points_km[i] = far_points_km[i].toFixed(3);
    }
  }

  return [[far_points_km[0], far_points_km[1], far_points_km[2], far_points_km[3]], farthest];

}

function exitMapFullwindow() {
  document.getElementById('map-overlay').style.height = "0%";
  document.getElementById('fullwindow-exit-icon').style.display = "none";
  document.getElementById('fullwindow-zoom-out-icon').style.display = "none";
  document.getElementById('menu').style.display = "none";
  document.getElementById('selector').style.display = "none";
  document.getElementById('fullmap-countries-panel').style.display = "none";
  fitBoundingBox(map_fullwindow, initial_bbox, 0, 0, map_padding_fw, true);
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

function switchLayer(layer) {
  var layerId = layer.target.id;
  current_map_style = 'mapbox://styles/mapbox/' + layerId;
  map_fullwindow.setStyle(current_map_style);
}

function setSelectorPosition() {
  var pixels = window.innerWidth/2;
  var selector_position = pixels.toString() + "px";
  document.getElementById("fullmap-countries-panel").style.left = selector_position;
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

function createSpecialMarker(map, coord, text, icon, size) {
  var marker = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', icon);
  img.setAttribute('width', size);
  img.setAttribute('height', size);
  marker.appendChild(img);
  return new mapboxgl.Marker({element:marker,scale:1,draggable:false})
  .setLngLat(coord).setPopup(new mapboxgl.Popup({closeButton:false}).setHTML(text));
}

function createLatitudeLines(map) {
  createLine(map, "Artic_Circle", [-180,66.563444], [180,66.563444]);
  createLine(map, "Topic_of_Cancer", [-180,23.43656], [180,23.43656]);
  createLine(map, "Equator", [-180,0], [180,0]);
  createLine(map, "Tropic_of_Capricorn", [-180,-23.43656], [180,-23.43656]);
  createLine(map, "Antartic_Circle", [-180,-66.563444], [180,-66.563444]);
}

function showLatitudeLines(map) {
  createLatitudeLines(map);
  addLine(map, "Artic_Circle", '#FFF', 1, [5,5]);
  addLine(map, "Topic_of_Cancer", '#DDD', 1, [5,5]);
  addLine(map, "Equator", '#AAA', 1, [5,5]);
  addLine(map, "Tropic_of_Capricorn", '#DDD', 1, [5,5]);
  addLine(map, "Antartic_Circle", '#FFF', 1, [5,5]);
}

function hideLatitudeLines(map) {
  removeLine(map, "Artic_Circle");
  removeLine(map, "Topic_of_Cancer");
  removeLine(map, "Equator");
  removeLine(map, "Tropic_of_Capricorn");
  removeLine(map, "Antartic_Circle");
}

function loadFarthestPoints(map, farthest_points) {

  var add = document.getElementById("checkbox-farthest-points").checked;

  if (add) {
    showFarthestPointsLines(map, farthest_points);
  } else {
    hideFarthestPointsLines(map);
  }

}

function createFarthestPointsLines(map, farthest_points) {
  createLine(map, "FarthestNorth", home[0], farthest_points[0][0]);
  createLine(map, "FarthestEast", home[0], farthest_points[1][0]);
  createLine(map, "FarthestSouth", home[0], farthest_points[2][0]);
  createLine(map, "FarthestWest", home[0], farthest_points[3][0]);
}

function showFarthestPointsLines(map, farthest_points) {
  createFarthestPointsLines(map, farthest_points);
  addLine(map, "FarthestNorth", '#F70', 3, [1,5]);
  addLine(map, "FarthestEast", '#F70', 3, [1,5]);
  addLine(map, "FarthestSouth", '#F70', 3, [1,5]);
  addLine(map, "FarthestWest", '#F70', 3, [1,5]);
}

function hideFarthestPointsLines(map) {
  removeLine(map, "FarthestNorth");
  removeLine(map, "FarthestEast");
  removeLine(map, "FarthestSouth");
  removeLine(map, "FarthestWest");
}

function createLine(map, id, coord_a, coord_b) {

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

function addLine(map, id, color, width, dasharray) {

  if (map.getSource(id) && !map.getLayer(id)) {
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

function removeLine(map, id) {
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
    var route = 'fly_route_' + (f+1);
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

        if (country_a == 'BR' && country_b == 'BR') {
          color = color_domestic;
          width = 2;
          add = document.getElementById("checkbox-flights-domestic").checked;

        } else {
          color = color_international;
          width = 2;
          add = document.getElementById("checkbox-flights-international").checked;
        }

        createFlightLine(map, id, coord_a, coord_b);

        if (add && !document.getElementById("checkbox-road-trips").checked
        && !document.getElementById("checkbox-farthest-points").checked) {
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

  if (map.getSource(id) && !map.getLayer(id)) {
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

  if (map.getSource(id.concat("__")) && !map.getLayer(id.concat("__"))) {
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

function getOffsetLongitude(value, offset) {
  var new_value = value - offset;
  if (Math.abs(new_value) > 180) {
    new_value = 360 - Math.abs(new_value);
    if (offset < 0) {
      new_value = -1*new_value;
    }
  }
  return new_value;
}

function getOriginalLongitude(value, offset) {
  var new_value = value + offset;
  if (Math.abs(new_value) > 180) {
    new_value = 360 - Math.abs(new_value);
    if (offset > 0) {
      new_value = -1*new_value;
    }
  }
  return new_value;
}

function loadCarRoutes(map, driving, accommodations, hide_car_routes) {

  for (var d = 0; d < driving.length; d++) {
    var route_id = 'car_route_' + (d+1);
    for (var a = 0; a < accommodations.length; a++) {
      if (driving[d][1] == accommodations[a][2]) {
        createCarRoute(map, route_id, accommodations[a][0]);
        road_trips_accommodations.push(accommodations[a]);
        break;
      }
    }

    if (document.getElementById("checkbox-road-trips").checked && !hide_car_routes) {
      addCarRoute(map, route_id);
    } else {
      removeCarRoute(map, route_id);
    }

  }

}

function createCarRoute(map, id, end) {

  var start = home[0];
  var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + home[0][0] + ',' + home[0][1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

  // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.onload = function() {
    var json = JSON.parse(req.response);
    var data = json.routes[0];
    var route = data.geometry.coordinates;
    var geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    }
    if (!map.getSource(id)) {
      map.addSource(id, {
        'type': 'geojson',
        'data': geojson
      });
    }
  }
  req.send();

}

function addCarRoute(map, id) {
  if (map.getSource(id) && !map.getLayer(id)) {
    map.addLayer({
      'id': id,
      'type': 'line',
      'source': id,
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#0B0',
        'line-width': 4
      }
    });
  }
}

function removeCarRoute(map, id) {
  if (map.getLayer(id)) {
    map.removeLayer(id);
  }
}

function getRoadTripsBoundingBox(markers, long_offset) {

  var road_west = getOffsetLongitude(180, long_offset);
  var road_south = 90;
  var road_east = getOffsetLongitude(-180, long_offset);
  var road_north = -90;

  var road_trips_bbox;

  for (var i = 0; i < markers.length; i++) {

    if (getOffsetLongitude(markers[i][0][0], long_offset) < road_west) {
      road_west = getOffsetLongitude(markers[i][0][0], long_offset);
    }
    if (getOffsetLongitude(markers[i][0][0], long_offset) > road_east) {
      road_east = getOffsetLongitude(markers[i][0][0], long_offset);
    }
    if (markers[i][0][1] < road_south) {
      road_south = markers[i][0][1];
    }
    if (markers[i][0][1] > road_north) {
      road_north = markers[i][0][1];
    }

    road_trips_bbox = [road_west, road_south, road_east, road_north];

  }

  return road_trips_bbox;

}
