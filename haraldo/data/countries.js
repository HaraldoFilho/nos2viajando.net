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
  'BR': ['Brasil', 'fbd', 28, 5],
  'US': ['Estados Unidos', 'fwd', 30, 2],
  'AR': ['Argentina', 'ds', 0.5, 1],
  'PY': ['Paraguai', '', 0.17, 1],
}

var countries_solo_en = {
  'BR': ['Brazil', 'fbd', 28, 5],
  'US': ['United States', 'fwd', 30, 2],
  'AR': ['Argentina', 'ds', 0.5, 1],
  'PY': ['Paraguay', '', 0.17, 1],
}

var continents_solo = [
  ['América do Sul', ['BR', 'AR', 'PY'], 5],
  ['América Central', [], 0],
  ['América do Norte', ['US'], 2],
  ['Europa', [], 0],
  ['África', [], 0],
  ['Ásia', [], 0],
  ['Oceania', [], 0]
]

var continents_en_solo = [
  ['South America', ['BR', 'AR', 'PY'], 5],
  ['Central America', [], 0],
  ['North America', ['US'], 2],
  ['Europe', [], 0],
  ['Africa', [], 0],
  ['Asia', [], 0],
  ['Oceania', [], 0]
]
