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
