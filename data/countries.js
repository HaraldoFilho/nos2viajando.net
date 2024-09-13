// Countries properties:
// w = flyed to west
// e = flyed to east
// f = flight
// c = connection
// b = bus ride (inter cities abroad)
// t = train (inter cities abroad)
// s = boat (ship)
// d = drived a car

var countries = {
  'BR': ['Brasil', 'fbd'],
  'AR': ['Argentina', 'ds'],
  'PY': ['Paraguai', ''],
  'US': ['Estados Unidos', 'fwd'],
  'IT': ['Itália', 'febt'],
  'VA': ['Vaticano', ''],
  'HR': ['Croácia', 'febs'],
  'CL': ['Chile', 'fwbd'],
  'UY': ['Uruguai', 'fwbsd']
}

var countries_en = {
  'AR': ['Argentina', 'ds'],
  'PY': ['Paraguay', ''],
  'US': ['United States', 'fwd'],
  'IT': ['Italy', 'febt'],
  'VA': ['Vatican City', ''],
  'HR': ['Croatia', 'fesb'],
  'CL': ['Chile', 'fwbd'],
  'UY': ['Uruguay', 'fwsd']
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
