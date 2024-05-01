var driving = [
  ['2009', ['Campinas', 'Peixada do Lago', 'Hibiti Hotel Rural'], 'Monte Alegre do Sul'],
  ['2016', ['Campinas', 'Chalé Macaúva'], 'Analândia'],
  ['2018', ['Campinas', 'Kuriuwa Hotel'], 'Monte Verde']
]

var driving_abroad = [
  ['2012', ['Aeroporto de Porto Alegre', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Parque do Caracol', 'Vale da Ferradura', 'Parque dos Paredões', 'Parque Pinheiro Grosso', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Gramado', 'Belvedere Vale do Quilombo', 'Ecoparque Sperry', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Gramado Café Colonial', 'Lago Negro', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Parque das Sequoias', 'Parque da Cachoeira', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Castelinho Caracol', 'Aeroporto de Porto Alegre'], 'Canela'],
  ['2016', ['Aeroporto de Foz do Iguaçu', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Parque Nacional Iguaçu', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Parque Nacional Iguazú', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Voo de Helicóptero sobre as Cataratas', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Marco das Três Fronteiras', 'Parque Nacional Iguazú', 'Parque das Aves', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Usina Hidrelétrica de Itaipú', 'Parque Nacional Iguaçu', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Aeroporto de Foz do Iguaçu'], 'Foz do Iguaçu'],
  ['2017', ['Aeroporto de São Francisco', 'Villa Montes Hotel'], 'Califórnia'],
  ['2017', ['Villa Montes Hotel', 'Pacific Coast Highway', 'Hurricane Point', 'Rock Point Restaurant', 'Yosemite Southgate Hotel & Suites'], 'Califórnia'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Tunnel View', 'Parque Nacional de Yosemite'], 'Califórnia'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Tunnel View', 'Glacier Point'], 'Califórnia'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Parque Nacional da Sequoia'], 'Califórnia'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Creekside Inn'], 'Califórnia'],
  ['2017', ['Creekside Inn', 'Museu da História do Computador', 'Googleplex'], 'Califórnia'],
  ['2017', ['Creekside Inn', 'Aeroporto de São Francisco'], 'Califórnia'],
  ['2018', ['Pousada Marina', 'Mirante dos Golfinhos', 'Praia da Cacimba do Padre', 'Porto Santo Antônio', 'Pousada Marina'], 'Fernando de Noronha'],
  ['2023', ['Puerto Natales', 'Ponte Weber', 'Hosteria Pehoe'], 'Patagônia'],
  ['2023', ['Hosteria Pehoe', 'Morrena Lodge'], 'Patagônia'],
  ['2023', ['Morrena Lodge', 'Rio Pingo Restaurant & Minimarket'], 'Patagônia'],
  ['2023', ['Morrena Lodge', 'Puerto Natales'], 'Patagônia'],
  ['2024', ['20 Hotel', 'Mirante de Punta Ballena', 'Las Grutas', 'Museu Casapueblo', '20 Hotel' ]]

]

var driving_abroad_en = [
  ['2012', ['Porto Alegre Airport', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Parque do Caracol', 'Vale da Ferradura', 'Parque dos Paredões', 'Parque Pinheiro Grosso', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Gramado', 'Belvedere Vale do Quilombo', 'Ecoparque Sperry', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Gramado Café Colonial', 'Dark Lake', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Parque das Sequoias', 'Parque da Cachoeira', 'Pousada Encantos da Terra'], 'Canela'],
  ['2012', ['Pousada Encantos da Terra', 'Castelinho Caracol', 'Porto Alegre Airport'], 'Canela'],
  ['2016', ['Foz do Iguaçu Airport', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Iguaçu National Park', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Iguazu National Park', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Helicopter Flight Over Iguazu Waterfalls', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Marco das Três Fronteiras', 'Iguazu National Park', 'Parque das Aves', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Itaipu Dam', 'Iguaçu National Park', 'Foz Presidente Comfort Hotel'], 'Foz do Iguaçu'],
  ['2016', ['Foz Presidente Comfort Hotel', 'Foz do Iguaçu Airport'], 'Foz do Iguaçu'],
  ['2017', ['San Francisco Airport', 'Villa Montes Hotel'], 'California'],
  ['2017', ['Villa Montes Hotel', 'Pacific Coast Highway', 'Hurricane Point', 'Rock Point Restaurant', 'Yosemite Southgate Hotel & Suites'], 'California'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Tunnel View', 'Yosemite National Park'], 'California'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Tunnel View', 'Glacier Point'], 'California'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Sequoia National Park'], 'California'],
  ['2017', ['Yosemite Southgate Hotel & Suites', 'Creekside Inn'], 'California'],
  ['2017', ['Creekside Inn', 'Computer History Museum', 'Googleplex'], 'California'],
  ['2017', ['Creekside Inn', 'San Francisco Airport'], 'California'],
  ['2018', ['Pousada Marina', 'Dolphins\' Lookout', 'Cacimba do Padre\'s Beach', 'Santo Antônio Port', 'Pousada Marina'], 'Fernando de Noronha'],
  ['2023', ['Puerto Natales', 'Weber Bridge', 'Hosteria Pehoe'], 'Patagonia'],
  ['2023', ['Hosteria Pehoe', 'Morrena Lodge'], 'Patagonia'],
  ['2023', ['Morrena Lodge', 'Rio Pingo Restaurant & Minimarket'], 'Patagonia'],
  ['2023', ['Morrena Lodge', 'Puerto Natales'], 'Patagonia']
  ['2024', ['20 Hotel', 'Punta Ballena Lookout Point', 'Las Grutas', 'Museo Casapueblo', '20 Hotel' ]]
]
