// Solo additional data

function loadAdditionalData() {

  if (userLang != 'pt-BR') {
    strings_dict_solo = strings_dict_solo_en;
    airports_solo = airports_solo_en;
    attractions_solo = attractions_solo_en;
    cities_solo = cities_solo_en;
    trips_solo = trips_solo_en;
  }

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

function hideAllMarkersSolo () {
  hideMarkers(map_fullwindow, cities_markers);
  hideMarkers(map_fullwindow, parks_markers);
  hideMarkers(map_fullwindow, attractions_markers);
  hideMarkers(map_fullwindow, airports_markers);
  hideMarkers(map_fullwindow, photos_markers);
  hideMarkers(map_fullwindow, photos_markers_solo);
}

function toggleAllMarkersSolo () {
  toggleMarkers(map_fullwindow, airports_markers, 'checkbox-airports');
  toggleMarkers(map_fullwindow, attractions_markers, 'checkbox-attractions');
  toggleMarkers(map_fullwindow, parks_markers, 'checkbox-parks');
  toggleMarkers(map_fullwindow, cities_markers, 'checkbox-cities');
  toggleMarkers(map_fullwindow, photos_markers, 'checkbox-photos');
  toggleMarkers(map_fullwindow, photos_markers_solo, 'checkbox-photos');
}

// Footer

function addFooter() {
  var footer = document.createElement("DIV");
  footer.setAttribute("id", "footer");
  footer.setAttribute("class", "footer");
  footer.innerHTML = "Map by <a href=\"https://www.travellerspoint.com/\" target=\"_blank\"><b>Travellers</b>point</a>";
  document.body.append(footer);
}
