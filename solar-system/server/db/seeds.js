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
    meanTemp: 5778,
    description: "The Sun is the star at the centre of our solar system. It is an almost perfect sphere of super-hot gases whose gravity holds the solar system together. The energy produced by the Sun is essential for life on Earth and is a driving force behind the Earth’s weather. There is a 10-kilometre difference between the Sun’s polar and equatorial diameter. This means it is the closest thing to a perfect sphere that has been observed in nature.",
    images: {
      mainPic:"sun-pic.jpg",
      hoverGif:"sun.gif"}
    
      

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
    meanTemp: 167,
    description: "Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit, the next will occur on the 12th November 2032.",
    images: {
      mainPic:"mercury-pic.png",
      hoverGif:"mercury.gif"}
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
    meanTemp: 464,
    description: "Venus is the second planet from the Sun and is the second largest terrestial Planet. Venus is sometimes referred to as the Earth’s sister planet due to their similar size and mass. Venus is named after the Roman goddess of love and beauty.",
    images: {
      mainPic:"venus-pic.png",
      hoverGif:"venus.gif"}
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
    meanTemp: 15,
    description: "Earth is the third planet from the Sun and is the largest of the terrestial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.",
    images: {
      mainPic:"earth-pic.png",
      hoverGif:"earth.gif"}
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
    meanTemp: -65,
    description: "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestial planet with a thin atmosphere composed primarily of carbon dioxide.",
    images: {
      mainPic:"mars-pic.jpg",
      hoverGif:"mars.gif"}
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
    meanTemp: -110,
    description: "Jupiter is the largest planet in the solar system and is the fifth planet out from the Sun. It is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a “gas giant”.",
    images: {
      mainPic:"jupiter-pic.png",
      hoverGif:"jupiter.gif"}
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
    meanTemp: -140,
    description: "Best known for its fabulous ring system, Saturn is the sixth planet from the Sun and the second largest in our solar system. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane.",
    images: {
      mainPic:"saturn-pic.png",
      hoverGif:"saturn.gif"}
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
    meanTemp: -195,
    description: "Uranus is the seventh planet from the Sun. It’s not visible to the naked eye, and became the first planet discovered with the use of a telescope. Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side.”",
    images: {
      mainPic:"uranus-pic.jpg",
      hoverGif:"uranus.gif"}
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
    meanTemp: -200,
    description: "Neptune is the eighth planet from the Sun, making it the most distant in the solar system. This gas giant may have formed much closer to the Sun in the early solar system history before migrating out to its current position.",
    images: {
      mainPic:"neptune-pic.png",
      hoverGif:"neptune.gif"}
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
    meanTemp: -225,
    description: "Discovered in 1930, Pluto is the second closest dwarf planet to the Sun and was at one point classified as the ninth planet. Pluto is the largest dwarf planet but only the second most massive, with Eris being the most massive.",
    images: {
      mainPic:"pluto-pic.png",
      hoverGif:"pluto.gif"}
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
    meanTemp: -225,
    description: "The moon is Earth's only natural satellite. The moon is a cold, dry orb whose surface is studded with craters and strewn with rocks and dust. The moon has no atmosphere. The same side of the moon always faces the Earth.",
    images: {
      mainPic:"moon-pic.png",
      hoverGif:"moon.gif"}
  }]
  );