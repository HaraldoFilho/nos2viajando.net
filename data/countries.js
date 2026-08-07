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

var countries = {
  'BR': ['Brasil', 'fd', 28, 6, 5],
  'AR': ['Argentina', 'dsbfw', 10, 4, 6],
  'PY': ['Paraguai', '', 0.17, 1, 7],
  'US': ['Estados Unidos', 'fwd', 9, 1, 8],
  'IT': ['Itália', 'febt', 7, 1, 9],
  'VA': ['Vaticano', '', 0.25, 1, 10],
  'HR': ['Croácia', 'febs', 12, 1, 11],
  'CL': ['Chile', 'fwbds', 14, 2, 12],
  'UY': ['Uruguai', 'fwbsd', 7, 1, 13],
  'PT': ['Portugal', 'fe', 3, 1, 14],
  'ES': ['Espanha', 'fet', 7, 1, 15],
  'FR': ['França', 't', 4, 1, 16]
}

var countries_en = {
  'BR': ['Brazil', 'fd', 28, 6, 5],
  'AR': ['Argentina', 'dsbfw', 10, 4, 6],
  'PY': ['Paraguay', '', 0.17, 1, 7],
  'US': ['United States', 'fwd', 9, 1, 8],
  'IT': ['Italy', 'febt', 7, 1, 9],
  'VA': ['Vatican City', '', 0.25, 1, 10],
  'HR': ['Croatia', 'febs', 12, 1, 11],
  'CL': ['Chile', 'fwbds', 14, 2, 12],
  'UY': ['Uruguay', 'fwbsd', 7, 1, 13],
  'PT': ['Portugal', 'fe', 3, 1, 14],
  'ES': ['Spain', 'fet', 7, 1, 15],
  'FR': ['France', 't', 4, 1, 16]
}

var continents = {
  'SA': ['América do Sul', ['BR', 'AR', 'PY', 'CL', 'UY'], 9],
  'CA': ['América Central', [], 0],
  'NA': ['América do Norte', ['US'], 1],
  'EU': ['Europa', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR'], 2],
  'AF': ['África', [], 0],
  'AS': ['Ásia', [], 0],
  'OC': ['Oceania', [], 0]
}

var continents_en = {
  'SA': ['South America', ['BR', 'AR', 'PY', 'CL', 'UY'], 9],
  'CA': ['Central America', [], 0],
  'NA': ['North America', ['US'], 1],
  'EU': ['Europe', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR'], 2],
  'AF': ['Africa', [], 0],
  'AS': ['Asia', [], 0],
  'OC': ['Oceania', [], 0]
}
