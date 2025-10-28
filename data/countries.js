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
  'BR': ['Brasil', 'fd'],
  'AR': ['Argentina', 'dsbfw'],
  'PY': ['Paraguai', ''],
  'US': ['Estados Unidos', 'fwd'],
  'IT': ['Itália', 'febt'],
  'VA': ['Vaticano', ''],
  'HR': ['Croácia', 'febs'],
  'CL': ['Chile', 'fwbds'],
  'UY': ['Uruguai', 'fwbsd'],
  'PT': ['Portugal', 'fe'],
  'ES': ['Espanha', 'fet'],
  // 'FR': ['França', 't'],
  // 'PT': ['Portugal', 'fe']
}

var countries_en = {
  'BR': ['Brazil', 'fd'],
  'AR': ['Argentina', 'dsbfw'],
  'PY': ['Paraguay', ''],
  'US': ['United States', 'fwd'],
  'IT': ['Italy', 'febt'],
  'VA': ['Vatican City', ''],
  'HR': ['Croatia', 'febs'],
  'CL': ['Chile', 'fwbds'],
  'UY': ['Uruguay', 'fwbsd'],
  'ES': ['Spain', 'fet'],
  // 'FR': ['France', 't'],
  // 'PT': ['Portugal', 'fe']
}

var continents = [
  ['América do Sul', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['América Central', []],
  ['América do Norte', ['US']],
  ['Europa', ['IT', 'VA', 'HR', 'ES', 'FR', 'PT']],
  ['África', []],
  ['Ásia', []],
  ['Oceania', []]
]

var continents_en = [
  ['South America', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['Central America', []],
  ['North America', ['US']],
  ['Europe', ['IT', 'VA', 'HR', 'ES', 'FR', 'PT']],
  ['Africa', []],
  ['Asia', []],
  ['Oceania', []]
]
