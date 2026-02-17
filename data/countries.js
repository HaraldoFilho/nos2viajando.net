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
  'BR': ['Brasil', 'fd', 28],
  'AR': ['Argentina', 'dsbfw', 10],
  'PY': ['Paraguai', '', 0],
  'US': ['Estados Unidos', 'fwd', 9],
  'IT': ['Itália', 'febt', 7],
  'VA': ['Vaticano', '', 0],
  'HR': ['Croácia', 'febs', 12],
  'CL': ['Chile', 'fwbds', 14],
  'UY': ['Uruguai', 'fwbsd', 7],
  'PT': ['Portugal', 'fe', 3],
  'ES': ['Espanha', 'fet', 7],
  'FR': ['França', 't', 4]
}

var countries_en = {
  'BR': ['Brazil', 'fd', 28],
  'AR': ['Argentina', 'dsbfw', 10],
  'PY': ['Paraguay', '', 0],
  'US': ['United States', 'fwd', 9],
  'IT': ['Italy', 'febt', 7],
  'VA': ['Vatican City', '', 0],
  'HR': ['Croatia', 'febs', 12],
  'CL': ['Chile', 'fwbds', 14],
  'UY': ['Uruguay', 'fwbsd', 7],
  'PT': ['Portugal', 'fe', 3],
  'ES': ['Spain', 'fet', 7],
  'FR': ['France', 't', 4]
}

var continents = [
  ['América do Sul', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['América Central', []],
  ['América do Norte', ['US']],
  ['Europa', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR']],
  ['África', []],
  ['Ásia', []],
  ['Oceania', []]
]

var continents_en = [
  ['South America', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['Central America', []],
  ['North America', ['US']],
  ['Europe', ['IT', 'VA', 'HR', 'PT', 'ES', 'FR']],
  ['Africa', []],
  ['Asia', []],
  ['Oceania', []]
]
