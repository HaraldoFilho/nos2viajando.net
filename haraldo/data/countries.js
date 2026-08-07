// Dictionary items:
// 'Country Code': ['Country name', 'Means of transportation', days, trips, order]

// Transportation:
// w = flyed to west
// e = flyed to east
// f = flight
// c = connection
// b = bus (inter cities abroad)
// t = train (inter cities abroad)
// s = boat (ship)
// d = drived a rented car


var countries_solo = {
  'BR': ['Brasil', 'fbd', 28, 5, 1],
  'US': ['Estados Unidos', 'fwd', 30, 2, 2],
  'AR': ['Argentina', 'ds', 0.5, 1, 3],
  'PY': ['Paraguai', '', 0.17, 1, 4]
}

var countries_solo_en = {
  'BR': ['Brazil', 'fbd', 28, 5, 1],
  'US': ['United States', 'fwd', 30, 2, 2],
  'AR': ['Argentina', 'ds', 0.5, 1, 3],
  'PY': ['Paraguay', '', 0.17, 1, 4]
}

var continents_solo = {
  'SA': ['América do Sul', ['BR', 'AR', 'PY'], 5],
  'CA': ['América Central', [], 0],
  'NA': ['América do Norte', ['US'], 2],
  'EU': ['Europa', [], 0],
  'AF': ['África', [], 0],
  'AS': ['Ásia', [], 0],
  'OC': ['Oceania', [], 0]
}

var continents_en_solo = {
  'SA': ['South America', ['BR', 'AR', 'PY'], 5],
  'CA': ['Central America', [], 0],
  'NA': ['North America', ['US'], 2],
  'EU': ['Europe', [], 0],
  'AF': ['Africa', [], 0],
  'AS': ['Asia', [], 0],
  'OC': ['Oceania', [], 0]
}
