/**
 * CLASE ATLAS: Gestiona la lógica del juego y el mapa
 */
class AtlasGame {
    constructor() {
        this.score = 0;
        this.collectedIds = new Set();
        this.currentRegion = "fondo1.jpg";
        
        // Elementos del DOM
        this.mapImage = document.getElementById('map-image');
        this.markerLayer = document.getElementById('markers-layer');
        this.scoreDisplay = document.getElementById('score');
        



















        // Datos de los objetos (Estructura solicitada)
        this.database = {
            "fondo1.jpg": [
                {id:"montanas_rocosas", type:"Maravilla_natural", name:"Montañas Rocosas", description:"Gran cadena montañosa de Norteamérica.", img: "rocosas.jpg", link:"https://es.wikipedia.org/wiki/Montañas_Rocosas", x:36.6, y:43.8},
                {id:"yellowstone", type:"Maravilla_natural", name:"Yellowstone", description:"Parque nacional famoso por sus géiseres.", img: "yellowstone.jpg", link:"https://es.wikipedia.org/wiki/Parque_nacional_de_Yellowstone", x:47.2, y:53.59},
                {id:"alce", type:"Animal_grande", name:"Alce", description:"El ciervo más grande del mundo.", img: "alce.jpg", link:"https://es.wikipedia.org/wiki/Alces_alces", x:51.5, y:39},
                {id:"cataratas_niagara", type:"Maravilla_natural", name:"Cataratas del Niágara", description:"Cascadas masivas en la frontera de Canadá y EE.UU.", img: "niagara.jpg", link:"https://es.wikipedia.org/wiki/Cataratas_del_Niágara", x:81.9, y:60},
                {id:"halloween", type:"Festividad", name:"Halloween", description:"Víspera de la conmemoración cristiana occidental de Todos los Santos. Inicia la conmemoración de Allhallowtide.", img: "halloween.jpg", link:"https://es.wikipedia.org/wiki/Halloween", x:91.1, y:52.8},
                {id:"oso_pardo", type:"Animal_grande", name:"Oso Pardo", description:"Un gran mamífero omnívoro que habita en bosques y montañas.", img: "osopardo.jpg", link:"https://es.wikipedia.org/wiki/Ursus_arctos", x:55.7, y:31.9},
                {id:"aguila_calva", type:"Animal_Volador", name:"Águila Calva", description:"Ave símbolo de Estados Unidos, conocida por su gran tamaño y fuerza.", img: "aguilacalva.jpg", link:"https://es.wikipedia.org/wiki/Haliaeetus_leucocephalus", x:49.1, y:56.6},
                {id:"las_vegas", type:"Ciudad", name:"Las Vegas", description:"Ciudad famosa por sus casinos, espectáculos y vida nocturna.", img: "lasvegas.jpg", link:"https://es.wikipedia.org/wiki/Las_Vegas", x:31.9, y:66.8},
                {id:"cactus", type:"Arbol_o_Planta", name:"Cáctus", description:"Planta adaptada al desierto que almacena agua en sus tejidos.", img: "cactus.jpg", link:"https://es.wikipedia.org/wiki/Cactaceae", x:33, y:75},
                {id:"sequoya_gigante", type:"Arbol_o_Planta", name:"Secuoya Gigante", description:"Uno de los árboles más grandes y longevos del planeta.", img:"secuoya.jpg", link:"https://es.wikipedia.org/wiki/Sequoiadendron_giganteum", x:29, y:63},    
                {id:"vancouver", type:"Ciudad", name:"Vancouver", description:"Ciudad canadiense conocida por su naturaleza y calidad de vida.", img:"vancouver.jpg", link:"https://es.wikipedia.org/wiki/Vancouver", x:29.3, y:39},
                {id:"san_francisco", type:"Ciudad", name:"San Francisco", description:"Ciudad famosa por sus colinas, tranvías y el puente Golden Gate.", img:"sanfrancisco.jpg", link:"https://es.wikipedia.org/wiki/San_Francisco", x:27.2, y:57.9},
                {id:"puente_golden_gate", type:"Grandes_Edificaciones", name:"Puente Golden Gate", description:"Uno de los puentes más famosos del mundo ubicado en California.", img:"goldengate.jpg", link:"https://es.wikipedia.org/wiki/Golden_Gate_Bridge", x:25.5, y:60.3},
                {id:"silicon_valley", type:"Tecnologia", name:"Silicon Valley", description:"Región tecnológica donde nacieron grandes empresas como Apple y Google.", img:"siliconvalley.jpg", link:"https://es.wikipedia.org/wiki/Silicon_Valley", x:24.9, y:65.2},
                {id:"los_angeles", type:"Gran_Ciudad", name:"Los Ángeles", description:"Ciudad conocida por Hollywood y la industria del cine.", img:"losangeles.jpg", link:"https://es.wikipedia.org/wiki/Los_%C3%81ngeles", x:24.9, y:68.2},
                {id:"hollywood", type:"Sitio", name:"Hollywood", description:"Centro mundial de la industria cinematográfica.", img:"hollywood.jpg", link:"https://es.wikipedia.org/wiki/Hollywood", x:28, y:71},
                {id:"marilyn_monroe", type:"Persona_Famosa", name:"Marilyn Monroe", description:"Actriz icónica del cine estadounidense del siglo XX.", img:"marilynmonroe.jpg", link:"https://es.wikipedia.org/wiki/Marilyn_Monroe", x:29.5, y:70.1},
                {id:"Henry_ford", type:"Genios_e_Inventores", name:"Henry Ford", description:"Introdujo el modelo Ford T en el mercado automovilistico", img:"henryford.jpeg", link:"https://es.wikipedia.org/wiki/Henry_Ford", x:75.4, y:53.4},
                {id:"phoenix", type:"ciudad", name:"Phoenix", description:"Ciudad ubicada en el desierto de Arizona.", img:"phoenix.jpg", link:"https://es.wikipedia.org/wiki/Phoenix", x:36.5, y:77.1},
                {id:"gran_canon", type:"Maravilla_Natural", name:"Gran Cañón", description:"Una impresionante formación natural creada por el río Colorado.", img:"grancanon.jpg", link:"https://es.wikipedia.org/wiki/Gran_Ca%C3%B1%C3%B3n", x:36.5, y:71.1},
                {id:"indios_yaquis", type:"Cultura", name:"Indios Yaquis", description:"Pueblo indígena originario del norte de México.", img:"yaquis.jpg", link:"https://es.wikipedia.org/wiki/Yaqui", x:53, y:87},
                {id:"energia_nuclear", type:"Energia", name:"Energía Nuclear", description:"Forma de energía obtenida a partir de reacciones nucleares.", img:"energianuclear.jpg", link:"https://es.wikipedia.org/wiki/Energ%C3%ADa_nuclear", x:65, y:65},
                {id:"dallas", type:"Ciudad", name:"Dallas", description:"Ciudad importante en el estado de Texas, conocida por su industria y cultura.", img:"dallas.jpg", link:"https://es.wikipedia.org/wiki/Dallas", x:49.95, y:79.05},
                {id:"houston", type:"Ciudad", name:"Houston", description:"Ciudad en Texas conocida por su industria energética y el Centro Espacial Johnson.", img:"houston.jpeg", link:"https://es.wikipedia.org/wiki/Houston", x:55.69, y:84.1},
                {id:"abraham_lincoln", type:"Gran_Lider", name:"Abraham Lincoln", description:"16º presidente de los Estados Unidos, conocido por liderar el país durante la Guerra Civil y abolir la esclavitud.", img:"lincoln.jpg", link:"https://es.wikipedia.org/wiki/Abraham_Lincoln", x:65.1, y:72.19},
                {id:"martin_luther_king", type:"Gran_Lider", name:"Martin Luther King Jr.", description:"Líder del movimiento por los derechos civiles en Estados Unidos, famoso por su discurso 'I Have a Dream'.", img:"mlk.jpg", link:"https://es.wikipedia.org/wiki/Martin_Luther_King_Jr.", x:71.08, y:69.49},
                {id:"kenedy", type:"Gran_Lider", name:"John F. Kennedy", description:"35º presidente de los Estados Unidos, conocido por su liderazgo durante la Crisis de los Misiles en Cuba.", img:"kennedy.jpg", link:"https://es.wikipedia.org/wiki/John_F._Kennedy", x:67.71, y:79.69},
                {id:"jazz", type:"Musica", name:"Jazz", description:"Género musical que se originó en la comunidad afroamericana de Nueva Orleans a finales del siglo XIX.", img:"jazz.jpg", link:"https://es.wikipedia.org/wiki/Jazz", x:64.95, y:79.91},
                {id:"neil_armstrong", type:"Persona_Famosa", name:"Neil Armstrong", description:"Astronauta estadounidense, el primer ser humano en pisar la Luna.", img:"armstrong.jpg", link:"https://es.wikipedia.org/wiki/Neil_Armstrong", x:69.88, y:80.19},
                {id:"disney_world", type:"Recreacion", name:"Disney World", description:"Complejo de parques temáticos ubicado en Florida, conocido por sus atracciones y entretenimiento familiar.", img:"disneyworld.jpg", link:"https://es.wikipedia.org/wiki/Walt_Disney_World_Resort", x:72.81, y:90.86},
                {id:"miami", type:"Ciudad", name:"Miami", description:"Ciudad en Florida conocida por sus playas, cultura latina y vida nocturna.", img:"miami.jpg", link:"https://es.wikipedia.org/wiki/Miami", x:74.13, y:94.17},
                {id:"orca", type:"Animal_Peligroso", name:"Orca", description:"Gran mamífero marino conocido por su inteligencia y habilidades de caza.", img:"orca.jpg", link:"https://es.wikipedia.org/wiki/Orca", x:95.09, y:79.34},
                {id:"nueva_york", type:"Gran_Ciudad", name:"Nueva York", description:"Ciudad más grande de Estados Unidos, conocida por su influencia cultural y económica.", img:"nuevayork.jpg", link:"https://es.wikipedia.org/wiki/Nueva_York", x:86.22, y:61.27},
                {id:"estatua_libertad", type:"Estatua", name:"Estatua de la Libertad", description:"Símbolo de libertad y democracia ubicado en Nueva York.", img:"libertad.jpg", link:"https://es.wikipedia.org/wiki/Estatua_de_la_Libertad", x:90.45, y:62.98},
                {id:"chicago", type:"Gran_Ciudad", name:"Chicago", description:"Ciudad conocida por su arquitectura y su influencia en la música jazz.", img:"chicago.jpg", link:"https://es.wikipedia.org/wiki/Chicago", x:68.95, y:59.25},
                {id:"detroit", type:"Ciudad", name:"Detroit", description:"Ciudad conocida por su historia en la industria automotriz.", img:"detroit.jpg", link:"https://es.wikipedia.org/wiki/Detroit", x:76.62, y:58.75},
                {id:"andy_warhol", type:"Artista/Escritor", name:"Andy Warhol", description:"Artista estadounidense, líder del movimiento pop art.", img:"warhol.jpg", link:"https://es.wikipedia.org/wiki/Andy_Warhol", x:83.71, y:61.56},
                {id:"harvard", type:"Centro_religioso", name:"Harvard University", description:"Una de las universidades más prestigiosas del mundo, ubicada en Massachusetts.", img:"harvard.jpg", link:"https://es.wikipedia.org/wiki/Universidad_de_Harvard", x:90.45, y:56.22},

            ],





            "fondo2.jpg": [
                {id:"chichen_itza", type:"Maravilla", name:"Chichén Itzá", description:"Ciudad maya famosa en México.", img: "chichen.jpg", link:"https://es.wikipedia.org/wiki/Chichén_Itzá", x:29, y:22},
                {id:"cancun", type:"Ciudad_interesante", name:"Cancún", description:"Destino turístico famoso por sus playas y vida nocturna.", img:"cancun.jpg", link:"https://es.wikipedia.org/wiki/Cancún", x:33, y:21.5},
                {id:"teotihuacan", type:"Ruina", name:"Teotihuacán", description:"Antigua ciudad prehispánica famosa por sus pirámides.", img:"teotihuacan.jpg", link:"https://es.wikipedia.org/wiki/Teotihuacán", x:17, y:20.5},
                {id:"cenote_sagrado", type:"Maravilla_Natural", name:"Cenote Sagrado", description:"Cenote ubicado en Chichén Itzá, utilizado para ceremonias mayas.", img:"cenote.jpg", link:"https://es.wikipedia.org/wiki/Cenote_Sagrado_de_Chichén_Itzá", x:30, y:26},
                {id:"vaqueros", type:"Cultura", name:"Vaqueros", description:"Figura icónica de la cultura del oeste estadounidense.", img:"vaqueros.jpg", link:"https://es.wikipedia.org/wiki/Vaquero", x:19.63, y:1.47},
                {id:"manati", type:"Animal_Marino", name:"Manatí", description:"Mamífero marino herbívoro que habita en aguas costeras y ríos de América.", img:"manati.jpg", link:"https://es.wikipedia.org/wiki/Trichechus_manatus", x:13.5, y:59.5},
                {id:"tortuga_galapa", type:"Gigante", name:"Tortuga Galápago", description:"Especie de tortuga gigante endémica de las Islas Galápagos.", img:"galapago.jpg", link:"https://es.wikipedia.org/wiki/Tortuga_galápago", x:26.47, y:63.64},
                {id:"gastronomia_mexicana", type:"Gastronomias", name:"Gastronomía Mexicana", description:"Conjunto de platillos tradicionales de México, reconocido por su diversidad y sabor.", img:"gastronomiamx.jpg", link:"https://es.wikipedia.org/wiki/Gastronomía_de_México", x:7.93, y:10.42},
                {id:"monterrey", type:"Ciudad", name:"Monterrey", description:"Ciudad industrial y cultural en el norte de México.", img:"monterrey.jpg", link:"https://es.wikipedia.org/wiki/Monterrey", x:14.5, y:10.5},
                {id:"la_catrina", type:"Cultura", name:"La Catrina", description:"Figura icónica del Día de Muertos en México, creada por el artista José Guadalupe Posada.", img:"catrina.jpeg", link:"https://es.wikipedia.org/wiki/La_Catrina", x:11.5, y:13.5}, 
                {id:"guanajuato", type:"Ciudad", name:"Guanajuato", description:"Ciudad colonial famosa por su arquitectura y su historia minera.", img:"guanajuato.jpg", link:"https://es.wikipedia.org/wiki/Guanajuato", x:12.5, y:18.5},
                {id:"catedral_de_guadalajara", type:"Centro_religioso", name:"Catedral de Guadalajara", description:"Imponente catedral barroca ubicada en el centro de Guadalajara.", img:"guadalajara.jpg", link:"https://es.wikipedia.org/wiki/Catedral_de_Guadalajara", x:9.8, y:17.5},
                {id:"momias_de_guanajuato", type:"Sitio", name:"Momias de Guanajuato", description:"Famosas momias naturales exhibidas en el Museo de las Momias en Guanajuato.", img:"momias.jpg", link:"https://es.wikipedia.org/wiki/Momias_de_Guanajuato", x:8.5, y:20.5},
                {id:"luchadores", type:"Cultura", name:"Luchadores", description:"Figuras emblemáticas de la lucha libre mexicana, conocidas por sus coloridos trajes y máscaras.", img:"luchadores.jpg", link:"https://es.wikipedia.org/wiki/Lucha_libre_mexicana", x:17.56, y:21.96},
                {id:"ciudad_de_mexico", type:"Gran_Ciudad", name:"Ciudad de México", description:"Capital del país, conocida por su rica historia y cultura vibrante.", img:"cdmx.jpg", link:"https://es.wikipedia.org/wiki/Ciudad_de_México", x:14.5, y:21.5},
                {id:"bellas_artes", type:"Museos", name:"Palacio de Bellas Artes", description:"Palacio ubicado en la Ciudad de México que alberga una vasta colección de arte mexicano e internacional.", img:"bellasartes.jpg", link:"https://es.wikipedia.org/wiki/Museo_Nacional_de_Bellas_Artes_(Ciudad_de_México)", x:16, y:27},
                {id:"frida_kahlo", type:"Artista/Escritor", name:"Frida Kahlo", description:"Renombrada pintora mexicana conocida por sus autorretratos y su estilo único.", img:"frida.jpg", link:"https://es.wikipedia.org/wiki/Frida_Kahlo", x:13, y:25.5},
                {id:"aguila_real", type:"Animal_Volador", name:"Águila Real", description:"Ave rapaz que habita en América del Norte y Central, símbolo nacional de México.", img:"aguilareal.jpg", link:"https://es.wikipedia.org/wiki/Águila_real", x:18, y:28.3},
                {id:"oaxaca", type:"Ciudad", name:"Oaxaca", description:"Ciudad colonial conocida por su arquitectura, cultura indígena y gastronomía.", img:"oaxaca.jpg", link:"https://es.wikipedia.org/wiki/Oaxaca", x:22.5, y:30.5},
                {id:"arbol_del_tule", type:"Arbol_o_Planta", name:"Árbol del Tule", description:"Árbol monumental ubicado en Oaxaca, conocido por su gran tamaño y antigüedad.", img:"tule.jpg", link:"https://es.wikipedia.org/wiki/%C3%81rbol_del_Tule", x:19, y:28},
                {id:"hierve_el_agua", type:"Maravilla_Natural", name:"Hierve el Agua", description:"Formación rocosa con pozas naturales de agua mineral, ubicada en Oaxaca.", img:"hierve.jpg", link:"https://es.wikipedia.org/wiki/Hierve_el_Agua", x:23.2, y:27.5},
                {id:"voladores_de_papantla", type:"Cultura", name:"Voladores de Papantla", description:"Tradición indígena mexicana que consiste en una danza ritual realizada por cuatro voladores que giran alrededor de un poste.", img:"voladores.jpg", link:"https://es.wikipedia.org/wiki/Voladores_de_Papantla", x:23.5, y:26.5},
                {id:"palenque", type:"Ruina", name:"Palenque", description:"Ciudad maya antigua ubicada en Chiapas, famosa por su arquitectura y arte.", img:"palenque.jpg", link:"https://es.wikipedia.org/wiki/Palenque", x:25.5, y:25},
                {id:"merida", type:"Ciudad", name:"Mérida", description:"Ciudad colonial y capital del estado de Yucatán, conocida por su cultura y arquitectura.", img:"merida.jpg", link:"https://es.wikipedia.org/wiki/Mérida_(Yucatán)", x:28.5, y:24.5},
                {id:"tulum", type:"Ruina", name:"Tulum", description:"Sitio arqueológico maya ubicado en la costa caribeña de México, conocido por sus impresionantes vistas al mar.", img:"tulum.jpg", link:"https://es.wikipedia.org/wiki/Tulum", x:32.5, y:23.5},
                {id:"simon_bolivar", type:"Gran_Lider", name:"Simón Bolívar", description:"Líder militar y político venezolano que jugó un papel crucial en la independencia de varios países sudamericanos.", img:"bolivar.jpg", link:"https://es.wikipedia.org/wiki/Simón_Bolívar", x:50, y:45},
                {id:"gabriel_garcia_marquez", type:"Artista/Escritor", name:"Gabriel García Márquez", description:"Escritor colombiano, ganador del Premio Nobel de Literatura, conocido por su obra 'Cien años de soledad'.", img:"garcia.jpg", link:"https://es.wikipedia.org/wiki/Gabriel_García_Márquez", x:50.5, y:55},
                {id:"fernando_botero", type:"Artista/Escritor", name:"Fernando Botero", description:"Pintor y escultor colombiano conocido por su estilo único de figuras voluminosas.", img:"botero.jpg", link:"https://es.wikipedia.org/wiki/Fernando_Botero", x:51, y:60},
                
            ],



            "fondo3.jpg": [
                {id:"condor_andino", type:"Animal_Volador", name:"Cóndor Andino", description:"Ave rapaz que habita en los Andes, símbolo de la libertad en la cultura andina.", img: "condor.jpg", link:"https://es.wikipedia.org/wiki/Cóndor_andino", x:36.5, y:2},
                {id:"santiago_de_chile", type:"Ciudad", name:"Santiago de Chile", description:"Capital de Chile, conocida por su cultura, gastronomía y cercanía a la cordillera de los Andes.", img:"santiago.jpg", link:"https://es.wikipedia.org/wiki/Santiago_de_Chile", x:35.5, y:30},
                {id:"cordillera_de_los_andes", type:"Maravilla_Natural", name:"Cordillera de los Andes", description:"La cadena montañosa más larga del mundo, que atraviesa varios países de América del Sur.", img:"andes.jpg", link:"https://es.wikipedia.org/wiki/Cordillera_de_los_Andes", x:37.5, y:50},
                {id:"gauchos", type:"Cultura", name:"Gauchos", description:"Figura emblemática de la cultura rural de Argentina, Uruguay y el sur de Brasil.", img:"gauchos.jpg", link:"https://es.wikipedia.org/wiki/Gaucho", x:48, y:26},
                {id:"mercedes_sosa", type:"Artista/Escritor", name:"Mercedes Sosa", description:"Cantante argentina de música folclórica, conocida como 'La Negra'.", img:"sosa.jpg", link:"https://es.wikipedia.org/wiki/Mercedes_Sosa", x:37, y:38},
                {id:"vaca", type:"Animal_Amigable", name:"Vaca", description:"Animal doméstico criado por su leche, carne y cuero, fundamental en la agricultura y ganadería.", img:"vaca.jpg", link:"https://es.wikipedia.org/wiki/Vaca", x:46.5, y:45.5},
                {id:"cataratas_iguazu", type:"Maravilla_Natural", name:"Cataratas del Iguazú", description:"Impresionantes cascadas ubicadas en la frontera entre Argentina y Brasil.", img:"iguazu.jpg", link:"https://es.wikipedia.org/wiki/Cataratas_del_Iguazú", x:58, y:27},
                {id:"violeta_parra", type:"Artista/Escritor", name:"Violeta Parra", description:"Cantautora chilena, considerada una de las figuras más importantes de la música folclórica latinoamericana.", img:"parra.jpg", link:"https://es.wikipedia.org/wiki/Violeta_Parra", x:41.5, y:37.5},    
                {id:"futbol", type:"Recreacion", name:"Fútbol", description:"Deporte más popular en América Latina, con una gran pasión y seguidores en toda la región.", img:"futbol.jpg", link:"https://es.wikipedia.org/wiki/Fútbol_en_América_Latina", x:54, y:35},
                {id:"buenos_aires", type:"Gran_Ciudad", name:"Buenos Aires", description:"Capital de Argentina, conocida por su arquitectura, cultura y vida nocturna.", img:"baires.jpg", link:"https://es.wikipedia.org/wiki/Buenos_Aires", x:53, y:48},
                {id:"capoera", type:"Recreacion", name:"Capoeira", description:"Arte marcial afrobrasileña que combina elementos de danza, acrobacia y música.", img:"capoeira.jpg", link:"https://es.wikipedia.org/wiki/Capoeira", x:65, y:14.5},
                {id:"sao_paulo", type:"Gran_Ciudad", name:"São Paulo", description:"Ciudad más grande de Brasil, conocida por su diversidad cultural y económica.", img:"saopaulo.jpg", link:"https://es.wikipedia.org/wiki/São_Paulo", x:66, y:19},
                {id:"rio_de_janeiro", type:"Gran_Ciudad", name:"Río de Janeiro", description:"Ciudad brasileña famosa por su carnaval, playas y la estatua del Cristo Redentor.", img:"rio.jpg", link:"https://es.wikipedia.org/wiki/Río_de_Janeiro", x:72, y:18.5},
                {id:"carnaval", type:"Festividad", name:"Carnaval de Río", description:"Celebración anual en Río de Janeiro, conocida por sus desfiles, música y baile.", img:"carnaval.jpg", link:"https://es.wikipedia.org/wiki/Carnaval_de_Río_de_Janeiro", x:68, y:14},
                {id:"brasilia", type:"Ciudad", name:"Brasilia", description:"Capital de Brasil, conocida por su arquitectura moderna y diseño urbano.", img:"brasilia.jpg", link:"https://es.wikipedia.org/wiki/Brasilia", x:60, y:4},
                {id:"cristo_redentor", type:"Estatua", name:"Cristo Redentor", description:"Famosa estatua de Jesucristo ubicada en Río de Janeiro, símbolo de Brasil.", img:"cristo.jpg", link:"https://es.wikipedia.org/wiki/Cristo_Redentor", x:72, y:14},
                {id:"oscar_niemeyer", type:"Arquitectos", name:"Oscar Niemeyer", description:"Arquitecto brasileño conocido por su diseño de edificios emblemáticos en Brasilia.", img:"niemeyer.jpg", link:"https://es.wikipedia.org/wiki/Oscar_Niemeyer", x:60, y:6},
                {id:"curitiba", type:"Ciudad", name:"Curitiba", description:"Ciudad brasileña reconocida por su planificación urbana y sostenibilidad.", img:"curitiba.jpg", link:"https://es.wikipedia.org/wiki/Curitiba", x:59, y:20},
                {id:"invernadero_botanico", type:"Maravilla_Natural", name:"Invernadero Botánico", description:"Invernadero ubicado en Curitiba, Brasil, que alberga una gran variedad de plantas tropicales.", img:"invernadero.jpg", link:"https://es.wikipedia.org/wiki/Invernadero_Botánico_de_Curitiba", x:62, y:22.5},
                {id:"pao_de_azucar", type:"Maravilla_Natural", name:"Pão de Açúcar", description:"Formación rocosa icónica ubicada en Río de Janeiro, Brasil.", img:"pao.jpg", link:"https://es.wikipedia.org/wiki/Pão_de_Açúcar", x:73, y:16},
                {id:"la_paz", type:"Ciudad", name:"La Paz", description:"Capital administrativa de Bolivia, conocida por su altitud y su cultura vibrante.", img:"lapaz.jpg", link:"https://es.wikipedia.org/wiki/La_Paz", x:41, y:2.5},
                {id:"salar_de_uyuni", type:"Maravilla_Natural", name:"Salar de Uyuni", description:"El salar más grande del mundo, ubicado en Bolivia, conocido por su paisaje surrealista.", img:"salar.jpg", link:"https://es.wikipedia.org/wiki/Salar_de_Uyuni", x:47, y:17},
            ],




            "fondo4.jpg": [
                {id:"puente_de_la_torre", type:"Grandes_Edificaciones", name:"Puente de la torre", description:"Famoso puente ubicado en Londres, Inglaterra.", img: "puentetorre.jpg", link:"https://es.wikipedia.org/wiki/Puente_de_la_Torre", x:27, y:48},
                {id:"big_ben", type:"Grandes_Edificaciones", name:"Big Ben", description:"Famosa torre del reloj ubicada en Londres, Inglaterra.", img: "bigben.jpg", link:"https://es.wikipedia.org/wiki/Big_Ben", x:28, y:44},
                {id:"londres", type:"Gran_Ciudad", name:"Londres", description:"Capital de Inglaterra, conocida por su historia, cultura y arquitectura.", img: "londres.jpg", link:"https://es.wikipedia.org/wiki/Londres", x:26.7, y:42.5},
                {id:"paris", type:"Gran_Ciudad", name:"París", description:"Capital de Francia, famosa por su arte, moda y monumentos icónicos como la Torre Eiffel.", img: "paris.jpg", link:"https://es.wikipedia.org/wiki/París", x:32, y:55},
                {id:"torre_eiffel", type:"Grandes_Edificaciones", name:"Torre Eiffel", description:"Famosa torre de hierro ubicada en París, Francia.", img: "eiffel.jpg", link:"https://es.wikipedia.org/wiki/Torre_Eiffel", x:33.2, y:53},
                {id:"roma", type:"Ciudad", name:"Roma", description:"Capital de Italia, conocida por su historia antigua, arte y arquitectura.", img: "roma.jpg", link:"https://es.wikipedia.org/wiki/Roma", x:48.5, y:71.5},
                {id:"coliseo", type:"Grandes_Edificaciones", name:"Coliseo", description:"Anfiteatro romano ubicado en Roma, Italia, símbolo de la ingeniería y arquitectura romana.", img: "coliseo.jpg", link:"https://es.wikipedia.org/wiki/Coliseo", x:45.4, y:70},
                {id:"berlin", type:"Ciudad", name:"Berlín", description:"Capital de Alemania, conocida por su historia, cultura y vida nocturna.", img: "berlin.jpg", link:"https://es.wikipedia.org/wiki/Berlín", x:46, y:44},
                {id:"stonehenge", type:"Maravilla_Natural", name:"Stonehenge", description:"Monumento megalítico ubicado en Inglaterra, conocido por su misterio y significado histórico.", img: "stonehenge.jpg", link:"https://es.wikipedia.org/wiki/Stonehenge", x:24, y:50},
                {id:"museo_del_louvre", type:"Museos", name:"Museo del Louvre", description:"Famoso museo ubicado en París, Francia, que alberga una vasta colección de arte y antigüedades.", img: "louvre.jpg", link:"https://es.wikipedia.org/wiki/Museo_del_Louvre", x:36, y:56.5},
                {id:"vaticano", type:"Centro_religioso", name:"Ciudad del Vaticano", description:"Estado independiente ubicado dentro de Roma, sede de la Iglesia Católica y hogar del Papa.", img: "vaticano.jpg", link:"https://es.wikipedia.org/wiki/Ciudad_del_Vaticano", x:47.5, y:71.5},
                {id:"madrid", type:"Ciudad", name:"Madrid", description:"Capital de España, conocida por su cultura, arte y vida nocturna.", img: "madrid.jpg", link:"https://es.wikipedia.org/wiki/Madrid", x:23, y:74.5},
                {id:"museo guggenheim_bilbao", type:"Museos", name:"Museo Guggenheim Bilbao", description:"Museo de arte contemporáneo ubicado en Bilbao, España, conocido por su arquitectura innovadora.", img: "guggenheim.jpg", link:"https://es.wikipedia.org/wiki/Museo_Guggenheim_Bilbao", x:23, y:70},
                {id:"sagrada_familia", type:"Grandes_Edificaciones", name:"Sagrada Familia", description:"Famosa basílica católica ubicada en Barcelona, España, diseñada por Antoni Gaudí.", img: "sagrada.jpg", link:"https://es.wikipedia.org/wiki/Templo_Expiatorio_de_la_Sagrada_Familia", x:31, y:71},
                {id:"edimburgo", type:"Ciudad", name:"Edimburgo", description:"Capital de Escocia, conocida por su historia, cultura y festivales.", img: "edimburgo.jpg", link:"https://es.wikipedia.org/wiki/Edimburgo", x:24, y:34.5},
                {id:"amsterdam", type:"Ciudad", name:"Ámsterdam", description:"Capital de los Países Bajos, conocida por sus canales, arte y cultura.", img: "amsterdam.jpg", link:"https://es.wikipedia.org/wiki/Ámsterdam", x:37, y:46},
                {id:"bruselas", type:"Ciudad", name:"Bruselas", description:"Capital de Bélgica, conocida por su arquitectura, chocolate y cerveza.", img: "bruselas.jpg", link:"https://es.wikipedia.org/wiki/Bruselas", x:36, y:49},
                {id:"alan_turing", type:"Genios_e_Inventores", name:"Alan Turing", description:"Matemático y científico de la computación británico, considerado el padre de la informática moderna.", img: "turing.jpg", link:"https://es.wikipedia.org/wiki/Alan_Turing", x:27, y:38},
                {id:"shakespeare", type:"Artista/Escritor", name:"William Shakespeare", description:"Dramaturgo y poeta inglés, considerado uno de los escritores más importantes de la literatura universal.", img: "shakespeare.jpg", link:"https://es.wikipedia.org/wiki/William_Shakespeare", x:27.3, y:52},
                {id:"lady_di", type:"Gran_Lider", name:"Lady Diana", description:"Princesa de Gales, conocida por su caridad y su trágica muerte.", img: "diana.jpg", link:"https://es.wikipedia.org/wiki/Diana_de_Gales", x:31, y:43},
                {id:"the_beatles", type:"Musica", name:"The Beatles", description:"Banda de rock británica, considerada una de las más influyentes de la historia de la música.", img: "beatles.jpg", link:"https://es.wikipedia.org/wiki/The_Beatles", x:23, y:45.5},
                {id:"isaac_newton", type:"Genios_e_Inventores", name:"Isaac Newton", description:"Físico y matemático inglés, conocido por sus leyes del movimiento y la gravitación universal.", img: "newton.jpg", link:"https://es.wikipedia.org/wiki/Isaac_Newton", x:25, y:37.5},
                {id:"virginia_woolf", type:"Artista/Escritor", name:"Virginia Woolf", description:"Escritora inglesa, considerada una de las figuras más importantes del modernismo literario del siglo XX.", img: "woolf.jpg", link:"https://es.wikipedia.org/wiki/Virginia_Woolf", x:22.5, y:38.5},
                {id:"dublin", type:"Ciudad", name:"Dublín", description:"Capital de Irlanda, conocida por su historia, cultura y literatura.", img: "dublin.jpg", link:"https://es.wikipedia.org/wiki/Dublín", x:20, y:41},
                {id:"catedral_de_colonia", type:"Centro_religioso", name:"Catedral de Colonia", description:"Imponente catedral gótica ubicada en Colonia, Alemania.", img: "colonia.jpg", link:"https://es.wikipedia.org/wiki/Catedral_de_Colonia", x:60.5, y:54.5},
                {id:"san_patricio", type:"Festival", name:"San Patricio", description:"Festividad de origen católico que se celebra anualmente el 17 de marzo para conmemorar la muerte de san Patricio de Irlanda.", img: "patricio.jpg", link:"https://es.wikipedia.org/wiki/D%C3%ADa_de_San_Patricio", x:18, y:42.5},
            

            ],



            // Agregar el resto de las regiones siguiendo este patrón...
        };


















        this.initPanzoom();
        this.setupEventListeners();
        this.renderMarkers();
    }



    initPanzoom() {
        const elem = document.getElementById('map-container');
        this.pz = Panzoom(elem, {
            maxScale: 4,
            minScale: 0.5,
            contain: 'outside'
        });
        
        // Habilitar zoom con la rueda del ratón
        elem.parentElement.addEventListener('wheel', this.pz.zoomWithWheel);
    }

    setupEventListeners() {
        // Cambio de Región
        document.getElementById('region-selector').addEventListener('change', (e) => {
            this.changeRegion(e.target.value);
        });

        // Cerrar Modal
        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('info-modal').classList.remove('active');
        });
    }

    changeRegion(imgSrc) {
        this.currentRegion = imgSrc;
        this.mapImage.src = imgSrc;
        // Al cargar imagen nueva, resetear zoom y renderizar marcadores
        this.mapImage.onload = () => {
            this.pz.reset();
            this.renderMarkers();
        };
    }

    renderMarkers() {
        this.markerLayer.innerHTML = '';
        const items = this.database[this.currentRegion] || [];

        items.forEach(item => {
            const btn = document.createElement('div');
            btn.className = 'marker';
            btn.style.left = `${item.x}%`;
            btn.style.top = `${item.y}%`;
            btn.innerHTML = this.getIcon(item.type);
            
            btn.onclick = (e) => {
                e.stopPropagation();
                this.showDetails(item);
            };
            
            this.markerLayer.appendChild(btn);
        });
    }








    getIcon(type) {
        // Retorna un emoji o icono basado en el tipo
        const icons = {
            "Animal": "🐾",
            "Animal_Marino": "🐠",
            "Animal_Volador": "🦅",
            "Animal_Grande": "🐘",
            "Animal_Peligroso": "🦈",
            "Animal_Amigable": "🐶",
            "Felinos": "🐱",
            "Sitio": "📍",
            "Maravilla": "✨",
            "Maravilla_Natural": "🌿",
            "Naturaleza": "🌎",
            "Ruina": "🏛️",
            "Cultura": "🎭",
            "Gran_Ciudad": "🏙️",
            "Grandes_Edificaciones": "🏗️",
            "Ciudad": "🏘️",
            "Energia": "⚡",
            "Gran_Lider": "👑",
            "Persona_Famosa": "👤",
            "Genios_e_Inventores": "🧠",
            "Artista/Escritor": "🎨",
            "Musica": "🎵",
            "Mitologia": "🐉",
            "Gastronomias": "🍲",
            "Estatua": "🗿",
            "Ciudad_interesante": "🏘️",
            "Recreacion": "🎢",
            "Festividad": "🎉",
            "Arquitectos": "👷",
            "Museos": "🏛️",
            "Centro_religioso": "⛪",
            "Arbol_o_Planta": "🌳",
            "Tecnologia": "💻",
        };
        return icons[type] || "❓";
    }




    




    showDetails(item) {
        // Actualizar UI del Modal
        document.getElementById('item-title').innerText = item.name;
        document.getElementById('item-desc').innerText = item.description;
        document.getElementById('item-img').src = item.img;
        document.getElementById('item-link').href = item.link;
        
        document.getElementById('info-modal').classList.add('active');

        // Lógica de Gamificación
        if (!this.collectedIds.has(item.id)) {
            this.collectedIds.add(item.id);
            this.score++;
            this.scoreDisplay.innerText = this.score;
            this.checkMissions(item);
        }
    }

    checkMissions(item) {
        // Ejemplo de sistema de misiones simple
        const panel = document.getElementById('mission-panel');
        if(this.score >= 3) {
            panel.innerText = "¡Misión Cumplida! Has explorado 3 sitios.";
            panel.style.color = "green";
        }
    }
}

// Iniciar el juego al cargar la página
window.onload = () => {
    window.game = new AtlasGame();
};
