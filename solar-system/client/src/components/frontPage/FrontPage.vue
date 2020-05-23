<template>
  <div>
    <h2>Front Page</h2>
    <planets-element v-for="(planet, index) in planets" :key="index" :planet="planet"/>
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

</style>