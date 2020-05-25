<template>
  <div class="info">
    <h2>Name: {{planet.name}}</h2>
    <p v-if="planet.moons.length">Number of Moons: {{planet.moons.length}}</p>
    <p>Mass: {{planet.massRelativeToEarth}} relative to Earth</p>
    <p>Diameter: {{planet.diameter}} kilometers</p>
    <p>Gravity: {{planet.gravity}}g</p>
    <p>Length of day: {{planet.lengthOfDay}}</p>
    <p>Distance from the Sun: {{planet.distanceFromSun}} kilometers</p>
    <p>Description: {{planet.description}}</p>
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