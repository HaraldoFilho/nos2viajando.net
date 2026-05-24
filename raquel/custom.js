// Solo additional data

function loadAdditionalData() {

  if (userLang != 'pt-BR') {
    strings_dict_solo = strings_dict_solo_en;
    airports_solo = airports_solo_en;
    attractions_solo = attractions_solo_en;
    cities_solo = cities_solo_en;
    countries_solo = countries_solo_en;
    trips_solo = trips_solo_en;
  }

  for (var i = 0; i < cities_solo.length; i++) {
    var first_visit = true
    for (var j = 0; j < cities.length; j++) {
      if (cities[j][2] == cities_solo[i][2]) {
        first_visit = false
      }
    }
    if (first_visit) {
      cities.push(cities_solo[i]);
    }
  }

  for (var i = 0; i < attractions_solo.length; i++) {
    var first_visit = true
    for (var j = 0; j < attractions.length; j++) {
      if (attractions[j][2] == attractions_solo[i][2]) {
        first_visit = false
      }
    }
    if (first_visit) {
      attractions.push(attractions_solo[i]);
    }
  }

  for (var i = 0; i < airports_solo.length; i++) {
    var first_visit = true
    for (var j = 0; j < airports.length; j++) {
      if (airports[j][2] == airports_solo[i][2]) {
        first_visit = false
      }
    }
    if (first_visit) {
      airports.push(airports_solo[i]);
    }
  }

  for (var i = 0; i < flights_solo.length; i++) {
    flights.push(flights_solo[i]);
  }

  for (var i = 0; i < trips_solo.length; i++) {
    trips.push(trips_solo[i]);
  }

}

function loadMarkersOnMapSolo(map, markers_scale, icons_path) {
  if (markers_scale > 0.4) {
    var home_marker = [];
    var text = "<p style=\"text-align:center;margin: 0px 5px -5px 5px;\">" + home[2] + ", " + countries[home[1]][0] + "</p>";
    home_marker.push(createSpecialMarker(map, home[0], text, icons_path.concat('home.svg'), 24));
    addMarkersToMap(map, home_marker);
  }
  airports_markers = createMarkers(map, airports, '#a0a0a0', markers_scale, true);
  attractions_markers = createMarkers(map, attractions, '#ff8080', markers_scale, false);
  parks_markers = createMarkers(map, parks, '#55a455', markers_scale, false);
  cities_markers = createMarkers(map, cities, '#3fb1ce', markers_scale, true);
  photos_markers = createPhotosMarkers(map, locations_dict_solo);
  farthest_points_markers = createFarthestPointsMarkers(map, farthest_points, getFarthestDistances(), icons_path);
  addMarkersToMap(map, airports_markers);
  addMarkersToMap(map, attractions_markers);
  addMarkersToMap(map, parks_markers);
  addMarkersToMap(map, cities_markers);
}

function hideAllMarkersSolo () {
  hideMarkers(map_fullwindow, cities_markers);
  hideMarkers(map_fullwindow, parks_markers);
  hideMarkers(map_fullwindow, attractions_markers);
  hideMarkers(map_fullwindow, airports_markers);
  hideMarkers(map_fullwindow, farthest_points_markers);
  hideMarkers(map_fullwindow, photos_markers);
}

function toggleAllMarkersSolo () {
  toggleMarkers(map_fullwindow, airports_markers, 'checkbox-airports');
  toggleMarkers(map_fullwindow, attractions_markers, 'checkbox-attractions');
  toggleMarkers(map_fullwindow, parks_markers, 'checkbox-parks');
  toggleMarkers(map_fullwindow, cities_markers, 'checkbox-cities');
  toggleMarkers(map_fullwindow, farthest_points_markers, 'checkbox-farthest-points');
  toggleMarkers(map_fullwindow, photos_markers, 'checkbox-photos');
}

// Footer

function addFooter() {
  var footer = document.createElement("DIV");
  footer.setAttribute("id", "footer");
  footer.setAttribute("class", "footer_solo");
  footer.innerHTML = "Map by <a href=\"https://www.travellerspoint.com/\" target=\"_blank\"><b>Travellers</b>point</a>";
  document.body.append(footer);
}

function setIconsColorsSolo() {

  for (var country_code in countries) {
    var flag_id = country_code.concat("__");
    document.getElementById(flag_id).setAttribute('class', 'icon_grey');
  }

  var all_unchecked = true;

  if (document.getElementById("checkbox-farthest-points").checked) {
    for (var i in farthest_points) {
      country_code = farthest_points[i][1];
      var flag_id = country_code.concat("__");
      document.getElementById(flag_id).setAttribute('class', 'icon');
    }
    all_unchecked = false;
  }

  for (var country_code in countries) {

    var flag_id = country_code.concat("__");

    if (document.getElementById("checkbox-photos").checked && (country_code in locations_dict_solo)) {
      document.getElementById(flag_id).setAttribute('class', 'icon');
      all_unchecked = false;
    }

    if (document.getElementById("checkbox-flights-international").checked && countries[country_code][1].includes('f')) {
      document.getElementById(flag_id).setAttribute('class', 'icon');
      all_unchecked = false;
    }

    if (document.getElementById("checkbox-flights-domestic").checked && country_code == 'BR') {
      document.getElementById(flag_id).setAttribute('class', 'icon');
      all_unchecked = false;
    }

  }

  if (all_unchecked) {
    for (var country_code in countries) {
      var flag_id = country_code.concat("__");
      document.getElementById(flag_id).setAttribute('class', 'icon');
      if (countries[country_code][1].includes('c')) {
        document.getElementById(flag_id).setAttribute("class", "icon_opaque");
      }
    }
  }

}
