var attractions = [
  [[-46.640165, -22.700645], 'BR', 'Cachoeira do Sol'],
  [[-46.644647, -22.674067], 'BR', 'Fazenda Salmo 23'],
  [[-50.809309, -29.363867], 'BR', 'Catedral de Pedra'],
  [[-50.851944, -29.312842], 'BR', 'Parque do Caracol'],
  [[-50.777217, -29.331164], 'BR', 'Vale da Ferradura'],
  [[-50.873687, -29.285703], 'BR', 'Parque dos Paredões'],
  [[-50.834335, -29.350026], 'BR', 'Parque Pinheiro Grosso'],
  [[-50.834855, -29.394421], 'BR', 'Ecoparque Sperry'],
  [[-50.078375, -29.159675], 'BR', 'Canyon Itaimbezinho'],
  [[-50.877577, -29.394294], 'BR', 'Lago Negro'],
  [[-50.794848, -29.372454], 'BR', 'Parque das Sequoias'],
  [[-50.737633, -29.274653], 'BR', 'Parque da Cachoeira'],
  [[-50.850079, -29.335549], 'BR', 'Castelinho Caracol'],
  [[-54.434538, -25.692903], 'BR', 'Cataratas do Iguaçu'],
  [[-54.590744, -25.594784], 'AR', 'Marco das Três Fronteiras'],
  [[-54.440813, -25.690880], 'AR', 'Cataratas do Iguaçu'],
  [[-54.437490, -25.695362], 'AR', 'Mirante da Garganta do Diabo'],
  [[-54.482174, -25.613405], 'BR', 'Voo de Helicóptero sobre as Cataratas'],
  [[-54.482363, -25.613652], 'BR', 'Parque das Aves'],
  [[-54.588548, -25.407994], 'BR', 'Usina Hidrelétrica de Itaipú'],
  [[-54.457834, -25.648383], 'BR', 'Macuco Safari'],
  [[-47.711117, -22.121222], 'BR', 'Gruta do Índio'],
  [[-122.422945, 37.826665], 'US', 'Presídio de Alcatraz'],
  [[-122.410418, 37.811144], 'US', 'Fisherman\'s Wharf'],
  [[-122.415363, 37.805335], 'US', 'Bonde de São Francisco'],
  [[-122.478253, 37.819938], 'US', 'Ponte Golden Gate'],
  [[-121.901712, 36.371537], 'US', 'Ponte Bixby Creek'],
  [[-121.902742, 36.357429], 'US', 'Hurricane Point'],
  [[-119.677483, 37.715824], 'US', 'Tunnel View'],
  [[-119.595757, 37.749948], 'US', 'Yosemite Falls'],
  [[-119.648578, 37.717472], 'US', 'Bridalveil Fall'],
  [[-119.549442, 37.747752], 'US', 'Mirror Lake'],
  [[-119.573643, 37.730464], 'US', 'Glacier Point'],
  [[-119.544228, 37.726578], 'US', 'Vernal Fall'],
  [[-118.751445, 36.581725], 'US', 'General Sherman Tree'],
  [[-122.070689, 37.417284], 'US', 'Museu da História do Computador'],
  [[-122.088013, 37.418436], 'US', 'Praça das Estátuas do Android'],
  [[-32.419546, -3.8523687], 'BR', 'Ilhatour'],
  [[-32.398248, -3.834981], 'BR', 'Mirante Buraco da Raquel'],
  [[-32.431141, -3.846836], 'BR', 'Mirante Forte do Boldró'],
  [[-32.442897, -3.855229], 'BR', 'Trilha Costa dos Mirantes'],
  [[-32.446763, -3.858239], 'BR', 'Mirante dos Golfinhos'],
  [[-32.432973, -3.847640], 'BR', 'Trilha Costa da Esmeralda'],
  [[-32.411044, -3.840651], 'BR', 'Trilha Histórica'],
  [[-32.410139, -3.837930], 'BR', 'Forte de Nossa Senhora dos Remédios'],
  [[-32.445217, -3.852690], 'BR', 'Passeio de Barco'],
  [[-32.401564, -3.831680], 'BR', 'Passeio de Barco ao Entardecer'],
  [[12.454642, 41.904746], 'VA', 'Museus do Vaticano'],
  [[12.454479, 41.902965], 'VA', 'Capela Sistina'],
  [[12.453930, 41.906293], 'VA', 'Escadaria Bramante'],
  [[12.457334, 41.902255], 'VA', 'Praça de São Pedro'],
  [[12.461570, 41.902114], 'IT', 'Museu Leonardo da Vinci Experience'],
  [[12.492231, 41.890210], 'IT', 'Coliseu'],
  [[12.492461, 41.879030], 'IT', 'Termas de Caracala'],
  [[12.488685, 41.884290], 'IT', 'Circo Massimo'],
  [[12.486326, 41.890891], 'IT', 'Palatino e Fórum Romano'],
  [[12.476862, 41.898611], 'IT', 'Panteão'],
  [[12.483305, 41.900878], 'IT', 'Fontana di Trevi'],
  [[15.978659, 45.806362], 'HR', 'Fontana kralja Tomislava'],
  [[15.977287, 45.813115], 'HR', 'Praça Jelačić'],
  [[15.973109, 45.814313], 'HR', 'Funicular de Zagreb'],
  [[15.973635, 45.816347], 'HR', 'Igreja de São Marcos'],
  [[15.979790, 45.814501], 'HR', 'Catedral de Zagreb'],
  [[15.607950, 44.902356], 'HR', 'Velik Slap'],
  [[15.228539, 44.112217], 'HR', 'Land Gate'],
  [[15.219877, 44.117212], 'HR', 'Orgão do Mar'],
  [[15.964000, 43.805218], 'HR', 'Skradinski Buk'],
  [[15.973333, 43.861171], 'HR', 'Ilha de Visovac'],
  [[15.889101, 43.735667], 'HR', 'Catedral de São Tiago'],
  [[15.854655, 43.721561], 'HR', 'Forte de São Nicolau'],
  [[16.440275, 43.508581], 'HR', 'Palácio de Diocleciano'],
  [[16.438122, 43.507783], 'HR', 'Riva'],
  [[18.107216, 42.641717], 'HR', 'Pile Gate'],
  [[18.111725, 42.643098], 'HR', 'Teleférico de Dubrovnik'],
  [[18.111458, 42.649525], 'HR', 'Monte Srđ'],
  [[18.109520, 42.641246], 'HR', 'Stradun'],
  [[18.104090, 42.640994], 'HR', 'Forte Lovrijenac'],
  [[18.110638, 42.640335], 'HR', 'Palácio do Reitor'],
  [[18.112295, 42.639902], 'HR', 'Muralhas de Dubrovnik'],
  [[18.112498, 42.640104], 'HR', 'Museu Marítimo de Dubrovnik'],
  [[18.107098, 42.641568], 'HR', 'Igreja e Monastério Fanciscano'],
  [[18.122144, 42.625386], 'HR', 'Ilha Lokrum'],
  [[14.495298, 40.749709], 'IT', 'Parque Arqueológico de Pompéia'],
  [[14.549958, 40.614219], 'IT', 'Costa Amalfitana'],
  [[-72.591245, -51.008827], 'CL', 'Mirante Lago Sarmiento'],
  [[-72.743243, -50.977351], 'CL', 'Mirante Laguna Amarga'],
  [[-72.791598, -50.942928], 'CL', 'Mirante Cascata do Rio Paine'],
  [[-72.909727, -51.041252], 'CL', 'Mirante Lago Nordenskjöld'],
  [[-73.006833, -51.067346], 'CL', 'Mirante Cachoeira Salto Grande'],
  [[-72.985795, -51.095779], 'CL', 'Lago Pehoé'],
  [[-72.962396, -51.161152], 'CL', 'Ponte Weber'],
  [[-72.968358, -51.232310], 'CL', 'Mirante Rio Serrano'],
  [[-73.119862, -51.414848], 'CL', 'Glaciar Serrano'],
  [[-73.181558, -51.437521], 'CL', 'Glaciar Balmaceda'],
  [[-72.605888, -51.570388], 'CL', 'Cueva del Milodón'],
  [[-73.171123, -51.042155], 'CL', 'Lago Grey'],
  [[-73.234661, -50.972859], 'CL', 'Glaciar Grey'],
  [[-72.905757, -51.234628], 'CL', 'Mirante Cuernos del Paine'],
  [[-72.887664, -51.249308], 'CL', 'Mirante Grey'],
  [[-72.866042, -51.263814], 'CL', 'Mirante Lago Toro'],
  [[-73.055645, -50.472517], 'AR', 'Glaciar Perito Moreno'],
  [[-72.411613, -50.231877], 'AR', 'Lago Argentino'],
  [[-73.337392, -50.243378], 'AR', 'Glaciar Spegazzini'],
  [[-73.248333, -50.056073], 'AR', 'Ponto de Observação do Glaciar Upsala'],
  [[-73.223803, -50.198380], 'AR', 'Puesto de Las Vacas'],
  [[-70.580139, -52.920165], 'CL', 'Isla Magdalena'],
  [[-70.577488, -52.919268], 'CL', 'Monumento Natural Los Pingüinos'],
  [[-55.038450, -34.895930], 'UY', 'Mirante de Punta Ballena'],
  [[-55.041580, -34.910640], 'UY', 'Las Grutas'],
  [[-55.044610, -34.908710], 'UY', 'Museu Casapueblo'],
  [[-54.971730, -34.953370], 'UY', 'Ilha Gorriti'],
  [[-54.937180, -34.957850], 'UY', 'La Mano'],
  [[-54.951060, -34.963760], 'UY', 'Porto de Punta del Este'],
  [[-57.853020, -34.471730], 'UY', 'Paseo de San Gabriel'],
  [[-57.852240, -34.472790], 'UY', 'El Faro'],
  [[-57.851120, -34.472650], 'UY', 'Calle de los Suspiros'],
  // [[-57.850800, -34.473410], 'UY', 'San Miguel Bastion'],
  [[-57.850820, -34.471100], 'UY', 'Basílica do Santíssimo Sacramento'],
  // [[-58.579650, -34.425080], 'AR', 'Passeio em Tigre'],
  // [[-58.576530, -34.418730], 'AR', 'Trem de La Costa'],
  // [[-58.362680, -34.639320], 'AR', 'Caminito'],
  // [[-58.364750, -34.635610], 'AR', 'La Bombonera'],
  // [[-58.370270, -34.608050], 'AR', 'Casa Rosada'],
  // [[-58.372280, -34.608360], 'AR', 'Praça de Maio'],
  // [[-58.394220, -34.595980], 'AR', 'El Ateneo Grand Splendid'],
  // [[-58.383530, -34.601110], 'AR', 'Teatro Colón'],
  // [[-58.373250, -34.607560], 'AR', 'Catedral Metropolitana de Buenos Aires'],
  // [[-58.362050, -34.617710], 'AR', 'Puerto Madero'],
  // [[-58.392950, -34.587360], 'AR', 'Cemitério da Recoleta'],
  // [[-56.206330, -34.908020], 'UY', 'Cidade Velha'],
  // [[-56.200810, -34.906520], 'UY', 'Puerta de la Ciudadela'],
  // [[-56.198540, -34.906580], 'UY', 'Palacio Salvo'],
]

var attractions_en = [
  [[-46.640165, -22.700645], 'BR', 'Sun\'s Waterfall'],
  [[-46.644647, -22.674067], 'BR', 'Fazenda Salmo 23'],
  [[-50.809309, -29.363867], 'BR', 'Catedral de Pedra'],
  [[-50.851944, -29.312842], 'BR', 'Parque do Caracol'],
  [[-50.777217, -29.331164], 'BR', 'Vale da Ferradura'],
  [[-50.873687, -29.285703], 'BR', 'Parque dos Paredões'],
  [[-50.834335, -29.350026], 'BR', 'Parque Pinheiro Grosso'],
  [[-50.834855, -29.394421], 'BR', 'Ecoparque Sperry'],
  [[-50.078375, -29.159675], 'BR', 'Canyon Itaimbezinho'],
  [[-50.877577, -29.394294], 'BR', 'Dark Lake'],
  [[-50.794848, -29.372454], 'BR', 'Parque das Sequoias'],
  [[-50.737633, -29.274653], 'BR', 'Parque da Cachoeira'],
  [[-50.850079, -29.335549], 'BR', 'Castelinho Caracol'],
  [[-54.434538, -25.692903], 'BR', 'Iguaçu Waterfalls'],
  [[-54.590744, -25.594784], 'AR', 'Marco das Três Fronteiras'],
  [[-54.440813, -25.690880], 'AR', 'Iguazú Waterfalls'],
  [[-54.437490, -25.695362], 'AR', 'Devil\'s Throat Lookout'],
  [[-54.482174, -25.613405], 'BR', 'Helicopter Flight Over Iguazu Waterfalls'],
  [[-54.482363, -25.613652], 'BR', 'Parque das Aves'],
  [[-54.588548, -25.407994], 'BR', 'Itaipu Dam'],
  [[-54.457834, -25.648383], 'BR', 'Macuco Safari'],
  [[-47.711117, -22.121222], 'BR', 'Indian Cave'],
  [[-122.422945, 37.826665], 'US', 'Alcatraz Prison'],
  [[-122.410418, 37.811144], 'US', 'Fisherman\'s Wharf'],
  [[-122.415363, 37.805335], 'US', 'San Francisco Cable Car'],
  [[-122.478253, 37.819938], 'US', 'Golden Gate Bridge'],
  [[-121.901712, 36.371537], 'US', 'Bixby Creek Bridge'],
  [[-121.902742, 36.357429], 'US', 'Hurricane Point'],
  [[-119.677483, 37.715824], 'US', 'Tunnel View'],
  [[-119.595757, 37.749948], 'US', 'Yosemite Falls'],
  [[-119.648578, 37.717472], 'US', 'Bridalveil Fall'],
  [[-119.549442, 37.747752], 'US', 'Mirror Lake'],
  [[-119.573643, 37.730464], 'US', 'Glacier Point'],
  [[-119.544228, 37.726578], 'US', 'Vernal Fall'],
  [[-118.751445, 36.581725], 'US', 'General Sherman Tree'],
  [[-122.070689, 37.417284], 'US', 'Computer History Museum'],
  [[-122.088013, 37.418436], 'US', 'Android Lawn Statues'],
  [[-32.419546, -3.8523687], 'BR', 'Ilhatour'],
  [[-32.398248, -3.834981], 'BR', '\'Buraco da Raquel\' Lookout'],
  [[-32.431141, -3.846836], 'BR', '\'Forte do Boldró\' Lookout'],
  [[-32.442897, -3.855229], 'BR', '\'Costa dos Mirantes\' Trail'],
  [[-32.446763, -3.858239], 'BR', 'Dolphins\' Lookout'],
  [[-32.432973, -3.847640], 'BR', '\'Costa da Esmeralda\' Trail'],
  [[-32.411044, -3.840651], 'BR', 'Historic Trail'],
  [[-32.410139, -3.837930], 'BR', '\'Nossa Senhora dos Remédios\' Fortress'],
  [[-32.445217, -3.852690], 'BR', 'Boat Ride'],
  [[-32.401564, -3.831680], 'BR', 'Boat Ride at Dusk'],
  [[12.454642, 41.904746], 'VA', 'Vatican Museums'],
  [[12.454479, 41.902965], 'VA', 'Sistine Chapel'],
  [[12.453930, 41.906293], 'VA', 'Bramante Staircase'],
  [[12.457334, 41.902255], 'VA', 'Saint Peter\'s Square'],
  [[12.461570, 41.902114], 'IT', 'Leonardo da Vinci Experience Museum'],
  [[12.492231, 41.890210], 'IT', 'Colosseum'],
  [[12.492461, 41.879030], 'IT', 'Baths of Caracala'],
  [[12.488685, 41.884290], 'IT', 'Circo Massimo'],
  [[12.486326, 41.890891], 'IT', 'Palatino and Roman Forum'],
  [[12.476862, 41.898611], 'IT', 'Pantheon'],
  [[12.483305, 41.900878], 'IT', 'Fontana di Trevi'],
  [[15.978659, 45.806362], 'HR', 'Fontana kralja Tomislava'],
  [[15.977287, 45.813115], 'HR', 'Jelačić Square'],
  [[15.973109, 45.814313], 'HR', 'Zagreb\'s Funicular'],
  [[15.973635, 45.816347], 'HR', 'St. Marks\'s Church'],
  [[15.979790, 45.814501], 'HR', 'Zagreb\'s Cathedral'],
  [[15.607950, 44.902356], 'HR', 'Velik Slap'],
  [[15.228539, 44.112217], 'HR', 'Land Gate'],
  [[15.219877, 44.117212], 'HR', 'Sea Organ'],
  [[15.964000, 43.805218], 'HR', 'Skradinski Buk'],
  [[15.973333, 43.861171], 'HR', 'Visovac Island'],
  [[15.889101, 43.735667], 'HR', 'Šibenik\'s Cathedral'],
  [[15.854655, 43.721561], 'HR', 'St\. Nicholas Fortress'],
  [[16.440275, 43.508581], 'HR', 'Dioclecian\'s Palace'],
  [[16.438122, 43.507783], 'HR', 'Riva'],
  [[18.107216, 42.641717], 'HR', 'Pile Gate'],
  [[18.111725, 42.643098], 'HR', 'Dubrovnik Cable Car'],
  [[18.111458, 42.649525], 'HR', 'Srđ Hill'],
  [[18.109520, 42.641246], 'HR', 'Stradun'],
  [[18.104090, 42.640994], 'HR', 'Lovrijenac Fortress'],
  [[18.110638, 42.640335], 'HR', 'Rector\'s Palace'],
  [[18.112295, 42.639902], 'HR', 'Dubrovnik Walls'],
  [[18.112498, 42.640104], 'HR', 'Dubrovnik Maritime Museum'],
  [[18.107098, 42.641568], 'HR', 'Fanciscan Church and Monastery'],
  [[18.122144, 42.625386], 'HR', 'Lokrum Island'],
  [[14.495298, 40.749709], 'IT', 'Archaeological Park of Pompeii'],
  [[14.549958, 40.614219], 'IT', 'Amalfi Coast'],
  [[-72.591245, -51.008827], 'CL', 'Sarmiento Lake Lookout'],
  [[-72.743243, -50.977351], 'CL', 'Laguna Amarga Lookout'],
  [[-72.791598, -50.942928], 'CL', 'Rio Paine\'s Waterfall Lookout'],
  [[-72.909727, -51.041252], 'CL', 'Nordenskjöld Lake Lookout'],
  [[-73.006833, -51.067346], 'CL', 'Salto Grande Waterfall Lookout'],
  [[-72.985795, -51.095779], 'CL', 'Pehoé Lake'],
  [[-72.962396, -51.161152], 'CL', 'Weber Bridge'],
  [[-72.968358, -51.232310], 'CL', 'Rio Serrano Lookout'],
  [[-72.905757, -51.234628], 'CL', 'Cuernos del Paine Lookout'],
  [[-72.866748, -51.262984], 'CL', 'Grey Lookout'],
  [[-72.866042, -51.263814], 'CL', 'Lago Toro Lookout'],
  [[-72.605888, -51.570388], 'CL', 'Cueva del Milodón'],
  [[-73.171123, -51.042155], 'CL', 'Grey Lake'],
  [[-73.234661, -50.972859], 'CL', 'Grey Glacier'],
  [[-72.905757, -51.234628], 'CL', 'Cuernos del Paine Lookout'],
  [[-72.887664, -51.249308], 'CL', 'Grey Lookout'],
  [[-72.866042, -51.263814], 'CL', 'Lago Toro Lookout'],
  [[-73.055645, -50.472517], 'AR', 'Perito Moreno Glacier'],
  [[-72.411613, -50.231877], 'AR', 'Argentinian Lake'],
  [[-73.337392, -50.243378], 'AR', 'Spegazzini Glacier'],
  [[-73.248333, -50.056073], 'AR', 'Upsala Glacier Viewpoint'],
  [[-73.223803, -50.198380], 'AR', 'Since Cows'],
  [[-70.580139, -52.920165], 'CL', 'Isla Magdalena'],
  [[-70.577488, -52.919268], 'CL', 'Los Pingüinos Natural Monument']
  [[-55.038450, -34.895930], 'UY', 'Punta Ballena Lookout Point'],
  [[-55.041580, -34.910640], 'UY', 'Las Grutas'],
  [[-55.044610, -34.908710], 'UY', 'Museo Casapueblo'],
  [[-54.971730, -34.953370], 'UY', 'Isla Gorriti'],
  [[-54.937180, -34.957850], 'UY', 'La Mano'],
  [[-54.951060, -34.963760], 'UY', 'Punta del Este\'s Harbor'],
  [[-57.853020, -34.471730], 'UY', 'Paseo de San Gabriel'],
  [[-57.852240, -34.472790], 'UY', 'The Lighthouse'],
  [[-57.851120, -34.472650], 'UY', 'Calle de los Suspiros'],
  // [[-57.850800, -34.473410], 'UY', 'San Miguel Bastion'],
  [[-57.850820, -34.471100], 'UY', 'Basílica do Santíssimo Sacramento'],
]
