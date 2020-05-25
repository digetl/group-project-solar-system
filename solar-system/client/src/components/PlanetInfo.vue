<template>
<div>
    <img id="planet-pic" :src="require(`../assets/${planet.images.mainPic}`)">
    <div class="info">
        <h3>{{planet.description}}</h3>
        <p v-if="planet.moons.length">Number of Moons: {{planet.moons.length}}</p>
        <p>Mass: {{planet.massRelativeToEarth}} relative to Earth</p>
        <p>Diameter: {{planet.diameter}} kilometers</p>
        <p>Gravity: {{planet.gravity}} g</p>
        <p>Length of day: {{planet.lengthOfDay}} hours</p>
        <p>Distance from the Sun: {{planet.distanceFromSun}} million kilometers</p>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
.info {
  margin: 1%;
  border-color: goldenrod;
  display: flexbox;
  align-items: center;
  font-family: Roboto,sans-serif;
  
}
#planet-pic {
  display: flex;
  align-items: flex-end;
  height: 400px;
}
</style>