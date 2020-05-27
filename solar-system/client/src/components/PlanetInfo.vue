<template>
  <div class="info">
    <div class="column1">
      <img id="planet-pic" :src="require(`../assets/${planet.images.mainPic}`)">
    </div>
    <div class="column2">
      <h3>{{planet.description}}</h3>
      <p v-if="planet.moons">Number of Moons: <strong>{{planet.moons.length}}</strong></p>
      <p v-if="planet.massRelativeToEarth">Mass relative to earth: <strong>{{planet.massRelativeToEarth}} relative to Earth</strong></p>
      <p v-if="planet.diameter">Diameter: <strong>{{planet.diameter.toLocaleString()}} kilometers</strong></p>
      <p v-if="planet.gravity">Gravity: <strong>{{planet.gravity}} g</strong></p>
      <p v-if="planet.lengthOfDay">Length of day: <strong>{{planet.lengthOfDay}} hours</strong></p>
      <p v-if="planet.distanceFromSun">Distance from the Sun: <strong>{{planet.distanceFromSun.toLocaleString()}} million kilometers</strong></p>
      <p v-if="planet.meanTemp">Mean Tempereture: <strong>{{planet.meanTemp}} celcius</strong></p>
      <p v-if="planet.orbitalPeriod">Orbital period: <strong>{{planet.orbitalPeriod}} days</strong></p>
    </div>
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
  position: relative;
  padding: 6% 3%;
  display: flex;
  align-items: flex-start;
}
.column1 {
  flex: 30%;
}
.column2 {
  padding:0 2%;
  flex: 70%;
}

#planet-pic {
  display: flex;
  align-items: flex-end;
  height: 400px;
}
</style>