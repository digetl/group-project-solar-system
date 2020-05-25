use solar;
db.dropDatabase();

db.planets.insertMany([
  {
    name: "Sun",
    isPlanet: false,
    moons: [],
    massRelativeToEarth: 332946,
    diameter: 1390000,
    gravity: 274,   
    lengthOfDay: 0,
    distanceFromSun: 0,
    orbitalPeriod: 0,
    meanTemp: 5778
  },
  
  {
    name: "Mercury",
    isPlanet: true,
    moons: [],
    massRelativeToEarth: 0.0553,
    diameter: 4879,
    gravity: 3.7,   
    lengthOfDay: 4222.6,
    distanceFromSun: 57.9,
    orbitalPeriod: 87.97,
    meanTemp: 167
  },
  {
    name: "Venus",
    isPlanet: true,
    moons: [],
    massRelativeToEarth: 0.815,
    diameter: 12104,
    gravity: 8.9,   
    lengthOfDay: 2802,
    distanceFromSun: 108.2,
    orbitalPeriod: 224.70,
    meanTemp: 464
  },
  {
    name: "Earth",
    isPlanet: true,
    moons:["The Moon"],
    massRelativeToEarth: 1,
    diameter: 12104,
    gravity: 9.8,   
    lengthOfDay: 24.6,
    distanceFromSun: 149.6,
    orbitalPeriod: 365.2,
    meanTemp: 15
  },

  {
    name: "Mars",
    isPlanet: true,
    moons: ["Phobos", "Deïmos"],
    massRelativeToEarth: 0.107,
    diameter: 3475,
    gravity: 1.6,   
    lengthOfDay: 24.7,
    distanceFromSun: 227.9,
    orbitalPeriod: 686.98,
    meanTemp: -65
  },
  {
    name: "Jupiter",
    isPlanet: true,
    moons: ["Io", "Europe", "Ganymède", "Callisto", "Amalthée", "Himalia", "Élara", "Pasiphaé", "Sinopé", "Lysithéa", "Carmé", "Ananké", "Léda", "Thébé", "Adrastée", "Métis", "Callirrhoé", "Thémisto", "Mégaclité", "Taygété", "Chaldéné", "Harpalyké", "Thébé", "Kalyké", "Iocasté", "Erinomé", "Isonoé", "Praxidyké", "Thyoné", "Hermippé", "Aitné", "Eurydomé", "Euanthé", "Euporie", "Orthosie", "Spondé", "Calé", "Pasithée", "Hégémone", "Mnémé", "Thébé", "Aoedé", "Thelxinoé", "Arché", "Callichore", "Hélicé", "Carpo", "Eukéladé", "Cyllène", "Coré", "Hersé", "S/2003 J 2", "Euphémé", "S/2003 J 4", "Eiréné", "S/2003 J 9", "S/2003 J 10", "S/2003 J 12", "Philophrosyne", "S/2003 J 16", "S/2003 J 18", "S/2003 J 19", "S/2003 J 23", "Dia", "S/2010 J 1", "S/2010 J 2", "S/2011 J 1", "S/2011 J 2", "S/2017 J 1", "S/2016 J 1", "Valétudo", "S/2017 J 2", "S/2017 J 3", "Pandia", "S/2017 J 5", "S/2017 J 6", "S/2017 J 7", "S/2017 J 8", "S/2017 J 9", "Ersa"],
    massRelativeToEarth: 317.8,
    diameter: 142984,
    gravity: 23.1,   
    lengthOfDay: 9.9,
    distanceFromSun: 778.6,
    orbitalPeriod: 4332.82,
    meanTemp: -110
  },
  {
    name: "Saturn",
    isPlanet: true,
    moons: ["Mimas", "Encelade", "Téthys", "Dioné", "Rhéa", "Titan", "Hypérion", "Japet", "Phoebé", "Janus", "Epiméthée", "Hélène", "Télesto", "Calypso", "Atlas", "Prométhée", "Pandore", "Pan", "Ymir", "Paaliaq", "Tarvos", "Ijiraq", "Suttungr", "Kiviuq", "Mundilfari", "Albiorix", "Skathi", "Erriapo", "Siarnaq", "Thrymr", "Narvi", "Méthone", "Pallène","Pollux", "Daphnis", "Aegir", "Bebhionn", "Bergelmir", "Bestla", "Farbauti", "Fenrir", "Fornjot", "Hati", "Hyrrokkin", "Kari", "Loge", "Skoll", "Surtur", "Anthé", "Jarnsaxa", "Greip", "Tarqeq", "Égéon", "S/2004 S 7", "S/2004 S 12", "S/2004 S 13", "S/2004 S 17", "S/2006 S 1", "S/2006 S 3", "S/2007 S 2", "S/2007 S 3", "S/2009 S 1", "S/2004 S 22", "S/2004 S 21", "S/2004 S 20", "S/2004 S 23", "S/2004 S 24", "S/2004 S 25", "S/2004 S 26", "S/2004 S 27", "S/2004 S 28", "S/2004 S 29", "S/2004 S 30", "S/2004 S 31", "S/2004 S 32", "S/2004 S 33", "S/2004 S 34", "S/2004 S 35", "S/2004 S 36", "S/2004 S 37", "S/2004 S 38", "S/2004 S 39"],
    massRelativeToEarth: 95.2,
    diameter: 120536,
    gravity: 9,   
    lengthOfDay: 10.7,
    distanceFromSun: 1433.5,
    orbitalPeriod: 10747,
    meanTemp: -140
  },
  {
    name: "Uranus",
    isPlanet: true,
    moons: ["Ariel", "Umbriel", "Titania", "Obéron", "Miranda", "Cordélia", "Ophélie", "Bianca", "Cressida", "Desdémone", "Juliette", "Portia", "Rosalinde", "Belinda", "Puck", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano", "Trinculo", "Francisco", "Margaret", "Ferdinand", "Perdita", "Mab", "Cupid"],
    massRelativeToEarth: 14.5,
    diameter: 51118,
    gravity: 8.7,   
    lengthOfDay: 17.2,
    distanceFromSun: 2872.5,
    orbitalPeriod: 30589,
    meanTemp: -195
  },
  {
    name: "Neptune",
    isPlanet: true,
    moons: ["Triton", "Néreïde", "Naïade", "Thalassa", "Despina", "Galatée", "Larissa", "Protée", "Halimède", "Psamathée", "Sao", "Laomédie", "Néso", "Hippocampe"],
    massRelativeToEarth: 17.1,
    diameter: 49528,
    gravity: 11,   
    lengthOfDay: 16.4,
    distanceFromSun: 4495.1,
    orbitalPeriod: 59800,
    meanTemp: -200
  },
  {
    name: "Pluto",
    isPlanet: true,
    moons:["Charon", "Nix", "Hydra", "Kerberos", "Styx"],
    massRelativeToEarth: 0.0025,
    diameter: 2370,
    gravity: 0.7,   
    lengthOfDay: 153.3,
    distanceFromSun: 5906.4,
    orbitalPeriod: 90560,
    meanTemp: -225
  },
  {
    name: "The Moon",
    isPlanet: false,
    moons: [],
    massRelativeToEarth: 0.12,
    diameter: 3475,
    gravity: 1.6,   
    lengthOfDay: 708.7,
    distanceFromSun: 148,
    orbitalPeriod: 27.3,
    meanTemp: -225
  }]
  );