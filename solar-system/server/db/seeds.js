use solar;
db.dropDatabase();

db.planets.insertMany([
  {
    name: "Mars"
  },
  {
    name: "Earth"
  },
  {
    name: "Pluto"
  }
]);

