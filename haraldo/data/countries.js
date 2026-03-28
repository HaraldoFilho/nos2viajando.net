// Countries properties:
// w = flyed to west
// e = flyed to east
// f = flight
// c = connection
// b = bus (inter cities abroad)
// t = train (inter cities abroad)
// s = boat (ship)
// d = drived a rented car

var countries_solo = {
  'BR': ['Brasil', 'fbd', 28],
  'US': ['Estados Unidos', 'fwd', 30],
  'AR': ['Argentina', 'ds', 0.5],
  'PY': ['Paraguai', '', 0.17],
}

var countries_solo_en = {
  'BR': ['Brazil', 'fbd', 28],
  'US': ['United States', 'fwd', 30],
  'AR': ['Argentina', 'ds', 0.5],
  'PY': ['Paraguay', '', 0.17],
}

var continents_solo = [
  ['América do Sul', ['BR', 'AR', 'PY']],
  ['América Central', []],
  ['América do Norte', ['US']],
  ['Europa', []],
  ['África', []],
  ['Ásia', []],
  ['Oceania', []],
  ['Antártida', []]
]

var continents_en_solo = [
  ['South America', ['BR', 'AR', 'PY']],
  ['Central America', []],
  ['North America', ['US']],
  ['Europe', []],
  ['Africa', []],
  ['Asia', []],
  ['Oceania', []],
  ['Antarctica', []]
]
