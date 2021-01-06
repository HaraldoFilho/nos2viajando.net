// Solo additional data

function loadAdditionalData() {

  for (var i = 0; i < cities.length; i++) {
    cities_solo.push(cities[i]);
  }
  cities = cities_solo;

  for (var i = 0; i < attractions.length; i++) {
    attractions_solo.push(attractions[i]);
  }
  attractions = attractions_solo;

  for (var i = 0; i < airports.length; i++) {
    airports_solo.push(airports[i]);
  }
  airports = airports_solo;

  for (var i = 0; i < flights.length; i++) {
    flights_solo.push(flights[i]);
  }
  flights = flights_solo;

  for (var i = 0; i < trips.length; i++) {
    trips_solo.push(trips[i]);
  }
  trips = trips_solo;

}


// Markers

function createMarkers(map, places, color, scale, get_farthest_points) {

  var markers = [];

  for (var i = 0; i < places.length; i++) {

    var text = "<p style=\"text-align:center;margin: 0px 5px -5px 5px;\">" + places[i][2] + "</p>";
    markers[i] = new mapboxgl.Marker({color:color,scale:scale,draggable:false})
    .setLngLat(places[i][0])
    .setPopup(new mapboxgl.Popup({closeButton:false}).setHTML(text));

    if (get_farthest_points) {
      if (places[i][0][1] > far_north[0][1]) { far_north = places[i]};
      if (places[i][0][0] > far_east[0][0]) { far_east = places[i]};
      if (places[i][0][1] < far_south[0][1]) { far_south = places[i]};
      if (places[i][0][0] < far_west[0][0]) { far_west = places[i]};
      farthest_points = [far_north, far_east, far_south, far_west];
    }

  }

  return markers;

}

function loadMarkersOnMap(map, markers_scale) {
  if (markers_scale > 0.4) {
    var home_marker = [];
    var text = "<p style=\"text-align:center;margin: 0px 5px -5px 5px;\">" + home[2] + ", " + countries[home[1]] + "</p>";
    home_marker.push(createSpecialMarker(map, home[0], text, '../icons/home.svg', 24));
    addMarkersToMap(map, home_marker);
  }
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale, true);
  accommodations_markers = createMarkers(map, accommodations, '#dec900', markers_scale, false);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale, false);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale, false);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale, true);
  photos_markers = createPhotosMarkers(map, locations_dict);
  photos_markers_solo = createPhotosMarkers(map, locations_dict_solo);
  farthest_points_markers = createFarthestPointsMarkers(map, farthest_points, getFarthestDistances());
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, accommodations_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}

function createPhotoMarker(map, value) {

  var marker = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', '../icons/marker_photo.svg');
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

function createFarthestPointsMarkers(map, values, distances) {

  var markers = [];
  var directions = ['north', 'east', 'south', 'west'];

  for (var i = 0; i < values.length; i++) {
    var icon_name = "../icons/arrow_";
    if (i == distances[1]) {
      icon_name = icon_name + "far_";
    }
    icon_name = icon_name + directions[i] + ".svg";
    var text = "<p style=\"text-align:center;margin: 0px 5px -5px 5px;\">" + values[i][2] + ", " + countries[values[i][1]] + "<br><b>" + distances[0][i] + " km</b></p>";
    markers[i] = createSpecialMarker(map, values[i][0], text, icon_name, 28);

  }

  return markers;

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
