<template>
  <div id="front-page">
    <h2>Front Page</h2>
    <img src="../../assets/space_rings.png" id="bird-view"/>
    <!-- <planets-element v-for="(planet, index) in planets" :key="index" :planet="planet"/> -->
  </div> 
</template>

<script>
import PlanetsElement from "./PlanetElement"

export default {
  name: "front-page",
  props: ["planets"],
  components: {
    "planets-element": PlanetsElement
  }
}
</script>

<style>
#front-page{
  margin: 2%;
  display: flex;
}

#bird-view {
  
  
  height: 800px;
  justify-content: center;
  align-items: center;
}
</style>