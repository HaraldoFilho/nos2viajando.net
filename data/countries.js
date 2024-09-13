// Countries properties:
// w = flyed to west
// e = flyed to east
// f = flight
// c = connection
// b = bus ride (inter cities abroad)
// t = train (inter cities abroad)
// d = drived a car

var countries = {
  'BR': ['Brasil', 'fbd'],
  'AR': ['Argentina', 'd'],
  'PY': ['Paraguai', ''],
  'US': ['Estados Unidos', 'fwd'],
  'IT': ['Itália', 'febt'],
  'VA': ['Vaticano', ''],
  'HR': ['Croácia', 'feb'],
  'CL': ['Chile', 'fwbd'],
  'UY': ['Uruguai', 'fwbd']
}

var countries_en = {
  'AR': ['Argentina', 'd'],
  'PY': ['Paraguay', ''],
  'US': ['United States', 'fwd'],
  'IT': ['Italy', 'febt'],
  'VA': ['Vatican City', ''],
  'HR': ['Croatia', 'feb'],
  'CL': ['Chile', 'fwbd'],
  'UY': ['Uruguay', 'fwd']
}

var continents = [
  ['América do Sul', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['América Central', []],
  ['América do Norte', ['US']],
  ['Europa', ['IT', 'VA', 'HR']],
  ['África', []],
  ['Ásia', []],
  ['Antártida', []]
]

var continents_en = [
  ['South America', ['BR', 'AR', 'PY', 'CL', 'UY']],
  ['Central America', []],
  ['North America', ['US']],
  ['Europe', ['IT', 'VA', 'HR']],
  ['Africa', []],
  ['Asia', []],
  ['Oceania', []],
  ['Antarctica', []]
]
