<template>
  <div id="front-page">
    <h2>Front Page</h2>
    <planets-element v-for="(planet, index) in planets" :key="index" :planet="planet"/>
    <br>
    
  </div> 
</template>

<script>
import PlanetsElement from "./PlanetElement"
import Quiz from "../Quiz.vue";

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
}
</style>