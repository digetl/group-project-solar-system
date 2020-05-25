<template>
  <div class="info">
    <h2>Name: {{planet.name}}</h2>
    <p>Number of Moons: {{planet.moons.length}}</p>
    <p>Mass: {{planet.mass}} Kilograms</p>
    <p>Diameter: {{planet.Diameter}} kilometers</p>
    <p>Gravity: {{planet.gravity}}g</p>
    <p>Lenght of day: {{planet.lengthOfDay}}</p>
    <p>Distance from the Sun: {{planet.distanceFromSun}} kilometers</p>
  </div>
</template>

<script>


export default {
  name: "planet-info",
  props: ["planet"]
}
</script>

<style>
.info {
  margin: 2%;
}
</style>