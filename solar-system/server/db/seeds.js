use solar;
db.dropDatabase();

db.planets.insertMany([
  {
    name: "Earth",
    isPlanet: true,
    moons:["The Moon"]
  },
  {
    name: "Mercury",
    isPlanet: true,
    moons: null
  },
  {
    name: "Venus",
    isPlanet: true,
    moons: null
  },

  {
    name: "Mars",
    isPlanet: true,
    moons: ["Phobos", "Deïmos"]
  },
  {
    name: "Jupiter",
    isPlanet: true,
    moons: ["Io", "Europe", "Ganymède", "Callisto", "Amalthée", "Himalia", "Élara", "Pasiphaé", "Sinopé", "Lysithéa", "Carmé", "Ananké", "Léda", "Thébé", "Adrastée", "Métis", "Callirrhoé", "Thémisto", "Mégaclité", "Taygété", "Chaldéné", "Harpalyké", "Thébé", "Kalyké", "Iocasté", "Erinomé", "Isonoé", "Praxidyké", "Thyoné", "Hermippé", "Aitné", "Eurydomé", "Euanthé", "Euporie", "Orthosie", "Spondé", "Calé", "Pasithée", "Hégémone", "Mnémé", "Thébé", "Aoedé", "Thelxinoé", "Arché", "Callichore", "Hélicé", "Carpo", "Eukéladé", "Cyllène", "Coré", "Hersé", "S/2003 J 2", "Euphémé", "S/2003 J 4", "Eiréné", "S/2003 J 9", "S/2003 J 10", "S/2003 J 12", "Philophrosyne", "S/2003 J 16", "S/2003 J 18", "S/2003 J 19", "S/2003 J 23", "Dia", "S/2010 J 1", "S/2010 J 2", "S/2011 J 1", "S/2011 J 2", "S/2017 J 1", "S/2016 J 1", "Valétudo", "S/2017 J 2", "S/2017 J 3", "Pandia", "S/2017 J 5", "S/2017 J 6", "S/2017 J 7", "S/2017 J 8", "S/2017 J 9", "Ersa"]
  },
  {
    name: "Saturn",
    isPlanet: true,
    moons: ["Mimas", "Encelade", "Téthys", "Dioné", "Rhéa", "Titan", "Hypérion", "Japet", "Phoebé", "Janus", "Epiméthée", "Hélène", "Télesto", "Calypso", "Atlas", "Prométhée", "Pandore", "Pan", "Ymir", "Paaliaq", "Tarvos", "Ijiraq", "Suttungr", "Kiviuq", "Mundilfari", "Albiorix", "Skathi", "Erriapo", "Siarnaq", "Thrymr", "Narvi", "Méthone", "Pallène","Pollux", "Daphnis", "Aegir", "Bebhionn", "Bergelmir", "Bestla", "Farbauti", "Fenrir", "Fornjot", "Hati", "Hyrrokkin", "Kari", "Loge", "Skoll", "Surtur", "Anthé", "Jarnsaxa", "Greip", "Tarqeq", "Égéon", "S/2004 S 7", "S/2004 S 12", "S/2004 S 13", "S/2004 S 17", "S/2006 S 1", "S/2006 S 3", "S/2007 S 2", "S/2007 S 3", "S/2009 S 1", "S/2004 S 22", "S/2004 S 21", "S/2004 S 20", "S/2004 S 23", "S/2004 S 24", "S/2004 S 25", "S/2004 S 26", "S/2004 S 27", "S/2004 S 28", "S/2004 S 29", "S/2004 S 30", "S/2004 S 31", "S/2004 S 32", "S/2004 S 33", "S/2004 S 34", "S/2004 S 35", "S/2004 S 36", "S/2004 S 37", "S/2004 S 38", "S/2004 S 39"]
  },
  {
    name: "Uranus",
    isPlanet: true,
    moons: ["Ariel", "Umbriel", "Titania", "Obéron", "Miranda", "Cordélia", "Ophélie", "Bianca", "Cressida", "Desdémone", "Juliette", "Portia", "Rosalinde", "Belinda", "Puck", "Caliban", "Sycorax", "Prospero", "Setebos", "Stephano", "Trinculo", "Francisco", "Margaret", "Ferdinand", "Perdita", "Mab", "Cupid"]
  },
  {
    name: "Neptune",
    isPlanet: true,
    moons: ["Triton", "Néreïde", "Naïade", "Thalassa", "Despina", "Galatée", "Larissa", "Protée", "Halimède", "Psamathée", "Sao", "Laomédie", "Néso", "Hippocampe"]
  },
  {
    name: "Pluto",
    isPlanet: true,
    moons:["Charon", "Nix", "Hydra", "Kerberos", "Styx"]
  }]
  );