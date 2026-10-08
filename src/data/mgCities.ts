export interface MGCity {
  id: string;
  name: string;
  lat: number;
  lng: number;
  region: string;
  tag: string;
  activity: string;
  funFact: string;
  altitude: string;
  distanceFromBH: string;
  typicalFood: string;
}

export const MG_CITIES: MGCity[] = [
  {
    id: 'bh',
    name: 'Belo Horizonte',
    lat: -19.9167,
    lng: -43.9345,
    region: 'Região Metropolitana',
    tag: 'Capital Mundial dos Botecos',
    activity: 'Num boteco do Mercado Central comendo fígado com jiló e queijo minas na chapa.',
    funFact: 'BH possui mais de 14 mil bares registrados, a maior densidade per capita do país.',
    altitude: '852 m',
    distanceFromBH: '0 km (No coração da capital)',
    typicalFood: 'Fígado com Jiló & Torresmo de Rolo'
  },
  {
    id: 'ouro_preto',
    name: 'Ouro Preto',
    lat: -20.3856,
    lng: -43.5035,
    region: 'Central / Metalúrgica',
    tag: 'Patrimônio Mundial da UNESCO',
    activity: 'Subindo as ladeiras históricas de pedra sabão admirando as igrejas barrocas de Aleijadinho.',
    funFact: 'Primeira cidade brasileira declarada Patrimônio Cultural da Humanidade pela UNESCO em 1980.',
    altitude: '1.179 m',
    distanceFromBH: '98 km',
    typicalFood: 'Tutu à Mineira com Costelinha'
  },
  {
    id: 'tiradentes',
    name: 'Tiradentes',
    lat: -21.1106,
    lng: -44.1772,
    region: 'Campo das Vertentes',
    tag: 'Polo Gastronômico & Charme',
    activity: 'Passeando de charrete pelas ruas coloniais e experimentando um doce de leite artesanal feito no tacho.',
    funFact: 'Famosa pelo Festival de Cinema e pelo Festival Internacional de Gastronomia.',
    altitude: '927 m',
    distanceFromBH: '190 km',
    typicalFood: 'Frango com Quiabo & Angu de Milho Verde'
  },
  {
    id: 'diamantina',
    name: 'Diamantina',
    lat: -18.2494,
    lng: -43.6031,
    region: 'Vale do Jequitinhonha',
    tag: 'Terra da Vesperata',
    activity: 'Na sacada de um casarão histórico assistindo aos seresteiros tocarem na Vesperata.',
    funFact: 'Terra natal de Juscelino Kubitschek e Chica da Silva, encravada na Serra do Espinhaço.',
    altitude: '1.280 m',
    distanceFromBH: '290 km',
    typicalFood: 'Feijão Tropeiro Tradicional'
  },
  {
    id: 'sao_joao_del_rei',
    name: 'São João del-Rei',
    lat: -21.1356,
    lng: -44.2617,
    region: 'Campo das Vertentes',
    tag: 'Cidade dos Sinos',
    activity: 'Escutando o toque tradicional dos sinos e embarcando na maria-fumaça rumo a Tiradentes.',
    funFact: 'Conhecida pela linguagem dos sinos das igrejas, patrimônio imaterial nacional.',
    altitude: '898 m',
    distanceFromBH: '185 km',
    typicalFood: 'Leitão à Pururuca'
  },
  {
    id: 'uberlandia',
    name: 'Uberlândia',
    lat: -18.9186,
    lng: -48.2772,
    region: 'Triângulo Mineiro',
    tag: 'Capital do Triângulo',
    activity: 'Almoçando no Parque do Sabiá e provando uma pamonha quentinha temperada.',
    funFact: 'Segunda cidade mais populosa de Minas Gerais e grande polo de inovação logística e agrotech.',
    altitude: '863 m',
    distanceFromBH: '535 km',
    typicalFood: 'Pamonha Salgada com Queijo'
  },
  {
    id: 'juiz_de_fora',
    name: 'Juiz de Fora',
    lat: -21.7642,
    lng: -43.3496,
    region: 'Zona da Mata',
    tag: 'Manchester Mineira',
    activity: 'Caminhando pelo calçadão da Rua Halfeld e saboreando empadas quentinhas.',
    funFact: 'Pioneira na industrialização mineira com a primeira usina hidrelétrica da América do Sul.',
    altitude: '678 m',
    distanceFromBH: '260 km',
    typicalFood: 'Empada de Palmito e Pastel de Angu'
  },
  {
    id: 'pocos_de_caldas',
    name: 'Poços de Caldas',
    lat: -21.7892,
    lng: -46.5625,
    region: 'Sul de Minas',
    tag: 'Estância Hidromineral',
    activity: 'Relaxando nos banhos termais sulfurosos das Thermas Antônio Carlos e provando queijo trufado.',
    funFact: 'Famosa pelas águas termais com propriedades medicinais e pelas fábricas de cristais Murano.',
    altitude: '1.186 m',
    distanceFromBH: '460 km',
    typicalFood: 'Queijo Trufado com Requeijão Cremoso'
  },
  {
    id: 'capitolio',
    name: 'Capitólio',
    lat: -20.6144,
    lng: -46.0506,
    region: 'Sul / Sudoeste de Minas',
    tag: 'Mar de Minas',
    activity: 'Navegando de lancha nos cânions verde-esmeralda do Lago de Furnas.',
    funFact: 'O Lago de Furnas tem quatro vezes o volume da Baía de Guanabara.',
    altitude: '780 m',
    distanceFromBH: '280 km',
    typicalFood: 'Tilápia Grelhada com Molho de Alcaparras'
  },
  {
    id: 'monte_verde',
    name: 'Monte Verde (Camanducaia)',
    lat: -22.8631,
    lng: -46.0356,
    region: 'Serra da Mantiqueira',
    tag: 'Suíça Mineira',
    activity: 'Comendo fondue perto da lareira com temperatura de 12°C nas montanhas.',
    funFact: 'Vila a mais de 1.500m de altitude, uma das cidades mais frias do Brasil.',
    altitude: '1.554 m',
    distanceFromBH: '480 km',
    typicalFood: 'Fondue de Queijo Mantiqueira e Truta'
  },
  {
    id: 'serro',
    name: 'Serro',
    lat: -18.6044,
    lng: -43.3794,
    region: 'Alto Jequitinhonha',
    tag: 'Berço do Queijo do Serro',
    activity: 'Conversando com o produtor rural e saboreando a fatia fresca de queijo do Serro meia cura.',
    funFact: 'O modo artesanal de fazer queijo no Serro foi o primeiro patrimônio imaterial registrado pelo IPHAN.',
    altitude: '960 m',
    distanceFromBH: '230 km',
    typicalFood: 'Queijo Minas Artesanal do Serro'
  },
  {
    id: 'varginha',
    name: 'Varginha',
    lat: -21.5514,
    lng: -45.4308,
    region: 'Sul de Minas',
    tag: 'Capital do Café & Mistério',
    activity: 'Tirando foto na nave espacial do centro e tomando um café arábica especial premiado.',
    funFact: 'Famosa internacionalmente pelo suposto caso do ET de Varginha e um dos maiores centros de café do mundo.',
    altitude: '915 m',
    distanceFromBH: '315 km',
    typicalFood: 'Café Especial com Pão de Queijo Recheado'
  },
  {
    id: 'montes_claros',
    name: 'Montes Claros',
    lat: -16.7350,
    lng: -43.8617,
    region: 'Norte de Minas',
    tag: 'Princesa do Norte',
    activity: 'Almoçando no Mercado Municipal um arroz com pequi bem aromático e carne de sol.',
    funFact: 'Maior polo urbano do Norte de Minas, conhecida pelas Festas de Agosto e cultura dos Catopês.',
    altitude: '638 m',
    distanceFromBH: '420 km',
    typicalFood: 'Arroz com Pequi e Carne de Sol com Manteiga de Garrafa'
  },
  {
    id: 'governador_valadares',
    name: 'Governador Valadares',
    lat: -18.8511,
    lng: -41.9494,
    region: 'Vale do Rio Doce',
    tag: 'Capital Mundial do Voo Livre',
    activity: 'No topo do Pico do Ibituruna vendo as asas-deltas e paragliders decolarem sobre o Rio Doce.',
    funFact: 'O Pico da Ibituruna tem quase 1.000m de desnível e é meca internacional de parapente.',
    altitude: '170 m',
    distanceFromBH: '320 km',
    typicalFood: 'Carne na Lata com Mandioca Frita'
  },
  {
    id: 'araxa',
    name: 'Araxá',
    lat: -19.5933,
    lng: -46.9406,
    region: 'Alto Paranaíba',
    tag: 'Águas Termais & Dona Beja',
    activity: 'Tomando banho de lama radioativa relaxante no imponente Grande Hotel de Araxá.',
    funFact: 'Famosa pelas águas sulfurosas, lama terapêutica e pela história lendária de Dona Beja.',
    altitude: '973 m',
    distanceFromBH: '370 km',
    typicalFood: 'Doces Cristalizados e Queijo de Araxá'
  },
  {
    id: 'sao_lourenco',
    name: 'São Lourenço',
    lat: -22.1158,
    lng: -45.0539,
    region: 'Circuito das Águas',
    tag: 'Parque das Águas',
    activity: 'No Parque das Águas provando as 7 fontes minerais gasosas e passeando no balão de ar quente.',
    funFact: 'Tem um dos parques hidrominerais mais belos da América Latina com águas gasosas naturais.',
    altitude: '875 m',
    distanceFromBH: '380 km',
    typicalFood: 'Queijo Mantiqueira de Minas com Goiabada Cascão'
  },
  {
    id: 'caxambu',
    name: 'Caxambu',
    lat: -21.9772,
    lng: -44.9333,
    region: 'Circuito das Águas',
    tag: 'Estância Hidromineral Imperial',
    activity: 'No Geiser Duque de Saxe vendo o jato de água mineral brotar da terra.',
    funFact: 'Destino preferido da Princesa Isabel e Dom Pedro II para tratamentos nas fontes termais.',
    altitude: '900 m',
    distanceFromBH: '360 km',
    typicalFood: 'Ambrosia Mineira Tradicional'
  },
  {
    id: 'congonhas',
    name: 'Congonhas',
    lat: -20.5000,
    lng: -43.8581,
    region: 'Central',
    tag: 'Cidade dos Profetas',
    activity: 'Em frente ao Santuário do Bom Jesus de Matosinhos admirando os 12 Profetas esculpidos em pedra-sabão.',
    funFact: 'Obra-prima barroca de Aleijadinho reconhecida como Patrimônio Mundial pela UNESCO.',
    altitude: '910 m',
    distanceFromBH: '80 km',
    typicalFood: 'Feijão Mexido com Linguiça Caseira'
  },
  {
    id: 'mariana',
    name: 'Mariana',
    lat: -20.3778,
    lng: -43.4161,
    region: 'Central',
    tag: 'Primaz de Minas',
    activity: 'Visitando a Mina da Passagem, a maior mina de ouro aberta a visitação do planeta.',
    funFact: 'Primeira vila, primeira cidade e primeira capital do estado de Minas Gerais fundada em 1711.',
    altitude: '697 m',
    distanceFromBH: '110 km',
    typicalFood: 'Frango ao Molho Pardo'
  },
  {
    id: 'ipatinga',
    name: 'Ipatinga',
    lat: -19.4683,
    lng: -42.5367,
    region: 'Vale do Aço',
    tag: 'Capital do Vale do Aço',
    activity: 'Descansando no Parque Ipanema com jardins projetados por Burle Marx.',
    funFact: 'Abriga um dos maiores parques urbanos do Brasil e o famoso Parque das Águas.',
    altitude: '220 m',
    distanceFromBH: '215 km',
    typicalFood: 'Feijão Tropeiro de Fogão a Lenha'
  },
  {
    id: 'divinopolis',
    name: 'Divinópolis',
    lat: -20.1436,
    lng: -44.8906,
    region: 'Oeste de Minas',
    tag: 'Princesa do Oeste',
    activity: 'Visitando as feiras de confecção e saboreando uma porção de torresminho crocante.',
    funFact: 'Maior polo confeccionista do estado de Minas e berço de grandes poetas mineiros.',
    altitude: '712 m',
    distanceFromBH: '120 km',
    typicalFood: 'Costelinha de Porco com Mandioca Cozida'
  },
  {
    id: 'pouso_alegre',
    name: 'Pouso Alegre',
    lat: -22.2300,
    lng: -45.9367,
    region: 'Sul de Minas',
    tag: 'Coração do Sul de Minas',
    activity: 'Caminhando pela Praça Senador José Bento e tomando cafezinho com queijo canastra.',
    funFact: 'Polo farmacêutico e universitário de destaque na rodovia Fernão Dias.',
    altitude: '832 m',
    distanceFromBH: '385 km',
    typicalFood: 'Pastel de Mandioca Recheado'
  },
  {
    id: 'patos_de_minas',
    name: 'Patos de Minas',
    lat: -18.5789,
    lng: -46.5181,
    region: 'Alto Paranaíba',
    tag: 'Capital Nacional do Milho',
    activity: 'Comemorando a colheita comendo curau quentinho, pamonha e bolo de milho verde.',
    funFact: 'Sede da tradicional Fenamilho, uma das maiores festas agropecuárias do país.',
    altitude: '815 m',
    distanceFromBH: '415 km',
    typicalFood: 'Curau Doce com Canela e Pamonha Mineira'
  },
  {
    id: 'vicosa',
    name: 'Viçosa',
    lat: -20.7539,
    lng: -42.8819,
    region: 'Zona da Mata',
    tag: 'Capital do Doce de Leite',
    activity: 'No campus histórico da UFV provando o lendário Doce de Leite Viçosa direto da fábrica.',
    funFact: 'O Doce de Leite Viçosa já foi eleito o melhor do Brasil mais de 10 vezes no concurso nacional.',
    altitude: '648 m',
    distanceFromBH: '225 km',
    typicalFood: 'Doce de Leite Viçosa Puro'
  },
  {
    id: 'sabara',
    name: 'Sabará',
    lat: -19.8911,
    lng: -43.8058,
    region: 'Região Metropolitana',
    tag: 'Terra da Jabuticaba',
    activity: 'Debaixo de um pé de jabuticaba no quintal de um casarão colonial colhendo fruta do galho.',
    funFact: 'Famosa pelo Festival da Jabuticaba e pelo Festival do Ora-pro-nóbis.',
    altitude: '705 m',
    distanceFromBH: '20 km',
    typicalFood: 'Frango com Ora-pro-nóbis'
  },
  {
    id: 'sete_lagoas',
    name: 'Sete Lagoas',
    lat: -19.4597,
    lng: -44.2467,
    region: 'Central',
    tag: 'Terra das Grutas',
    activity: 'Explorando as estalactites milenares da Gruta Rei do Mato.',
    funFact: 'Possui lagoas urbanas encantadoras e sítios arqueológicos com pinturas rupestres antiquíssimas.',
    altitude: '767 m',
    distanceFromBH: '70 km',
    typicalFood: 'Empadão Mineiro de Frango com Catupiry'
  },
  {
    id: 'barbacena',
    name: 'Barbacena',
    lat: -21.2258,
    lng: -43.7736,
    region: 'Campo das Vertentes',
    tag: 'Cidade das Rosas',
    activity: 'Visitando os campos floridos de rosas na Mantiqueira e tomando chocolate quente.',
    funFact: 'Maior polo produtor de flores da América Latina na década de 1970.',
    altitude: '1.164 m',
    distanceFromBH: '170 km',
    typicalFood: 'Broa de Fubá com Manteiga e Chá'
  },
  {
    id: 'alfenas',
    name: 'Alfenas',
    lat: -21.4258,
    lng: -45.9469,
    region: 'Sul de Minas',
    tag: 'Capital Universitária do Lago',
    activity: 'Às margens do Lago de Furnas apreciando o pôr do sol alaranjado.',
    funFact: 'Cidade com grande tradição médica, universitária e banhada pelas águas de Furnas.',
    altitude: '888 m',
    distanceFromBH: '340 km',
    typicalFood: 'Peixe na Telha'
  },
  {
    id: 'lavras',
    name: 'Lavras',
    lat: -21.2461,
    lng: -44.9997,
    region: 'Campo das Vertentes',
    tag: 'Terra dos Ipês e das Escolas',
    activity: 'Passeando pelos jardins da UFLA provando queijo minas frescal com café gourmet.',
    funFact: 'Conhecida historicamente como a terra onde "se ensina e se aprende".',
    altitude: '919 m',
    distanceFromBH: '235 km',
    typicalFood: 'Bolo de Fubá Cremoso'
  },
  {
    id: 'teofilo_otoni',
    name: 'Teófilo Otoni',
    lat: -17.8572,
    lng: -41.5053,
    region: 'Vale do Mucuri',
    tag: 'Capital Mundial das Pedras Preciosas',
    activity: 'Olhando esmeraldas, águas-marinhas e turmalinas brutas na Praça Tiradentes.',
    funFact: 'Maior centro de lapidação e comércio de gemas e pedras preciosas do país.',
    altitude: '334 m',
    distanceFromBH: '450 km',
    typicalFood: 'Carne de Sol com Mandioca Amarela'
  },
  {
    id: 'sao_roque_de_minas',
    name: 'São Roque de Minas',
    lat: -20.2458,
    lng: -46.3683,
    region: 'Serra da Canastra',
    tag: 'Nascente do Velho Chico',
    activity: 'No topo da Serra da Canastra visitando a nascente do Rio São Francisco e comendo queijo Canastra legítimo.',
    funFact: 'Aqui nasce o imponente Rio São Francisco e é o coração da produção do Queijo Canastra com casca florida.',
    altitude: '830 m',
    distanceFromBH: '330 km',
    typicalFood: 'Queijo Canastra Real e Goiabada'
  },
  {
    id: 'cordisburgo',
    name: 'Cordisburgo',
    lat: -19.1278,
    lng: -44.3314,
    region: 'Central',
    tag: 'Coração de Guimarães Rosa',
    activity: 'Explorando os salões mágicos da Gruta de Maquiné imaginando histórias do Grande Sertão: Veredas.',
    funFact: 'Terra natal de Guimarães Rosa e berço da Gruta de Maquiné, a mais monumental de Minas.',
    altitude: '690 m',
    distanceFromBH: '120 km',
    typicalFood: 'Paçoca de Carne Seca no Pilão'
  }
];

export function getRandomCity(excludeId?: string): MGCity {
  const filtered = excludeId ? MG_CITIES.filter(c => c.id !== excludeId) : MG_CITIES;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
