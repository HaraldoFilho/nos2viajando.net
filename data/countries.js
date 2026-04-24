// Countries properties:
// w = flyed to west
// e = flyed to east
// f = flight
// c = connection
// b = bus (inter cities abroad)
// t = train (inter cities abroad)
// s = boat (ship)
// d = drived a rented car

var countries = {
  'BR': ['Brasil', 'fd', 28, 6],
  'AR': ['Argentina', 'dsbfw', 10, 4],
  'PY': ['Paraguai', '', 0.17, 1],
  'US': ['Estados Unidos', 'fwd', 9, 1],
  'IT': ['Itália', 'febt', 7, 1],
  'VA': ['Vaticano', '', 0.25, 1],
  'HR': ['Croácia', 'febs', 12, 1],
  'CL': ['Chile', 'fwbds', 14, 2],
  'UY': ['Uruguai', 'fwbsd', 7, 1],
  'PT': ['Portugal', 'fe', 3, 1],
  'ES': ['Espanha', 'fet', 7, 1],
  'FR': ['França', 't', 4, 1]
}

var countries_en = {
  'BR': ['Brazil', 'fd', 28, 6],
  'AR': ['Argentina', 'dsbfw', 10, 4],
  'PY': ['Paraguay', '', 0.17, 1],
  'US': ['United States', 'fwd', 9, 1],
  'IT': ['Italy', 'febt', 7, 1],
  'VA': ['Vatican City', '', 0.25, 1],
  'HR': ['Croatia', 'febs', 12, 1],
  'CL': ['Chile', 'fwbds', 14, 2],
  'UY': ['Uruguay', 'fwbsd', 7, 1],
  'PT': ['Portugal', 'fe', 3, 1],
  'ES': ['Spain', 'fet', 7, 1],
  'FR': ['France', 't', 4, 1]
}

var continents = [
  ['América do Sul', ['BR', 'AR', 'PY', 'CL', 'UY'], 9],
  ['América Central', [], 0],
  ['América do Norte', ['US'], 1],
  ['Europa', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR'], 2],
  ['África', [], 0],
  ['Ásia', [], 0],
  ['Oceania', [], 0]
]

var continents_en = [
  ['South America', ['BR', 'AR', 'PY', 'CL', 'UY'], 9],
  ['Central America', [], 0],
  ['North America', ['US'], 1],
  ['Europe', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR'], 2],
  ['Africa', [], 0],
  ['Asia', [], 0],
  ['Oceania', [], 0]
]
