<template lang="html">
  <div id="front-page">
    <h2>Front Page</h2>
    <img src="../../assets/space_rings.png" id="bird-view" usemap="#bird-view-map"/>
    <map name="bird-view-map">
      <area shape="circle" coords="522, 409, 10" alt="mercury" v-on:click="selectPlanet(1)" href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap">
      <area shape="circle" coords="335, 335, 50" alt="venus" v-on:click="selectPlanet(2)" href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap">
      <area shape="circle" coords="420, 78, 15" alt="earth" v-on:click="selectPlanet(3)">
      <area shape="circle" coords="457, 78, 12" alt="mars" v-on:click="selectPlanet(4)">
      <area shape="circle" coords="531, 78, 30" alt="jupiter" v-on:click="selectPlanet(5)">
      <area shape="circle" coords="606, 78, 25" alt="saturn" v-on:click="selectPlanet(6)">
      <area shape="circle" coords="674, 78, 20" alt="uranus" v-on:click="selectPlanet(7)">
      <area shape="circle" coords="726, 78, 15" alt="neptune" v-on:click="selectPlanet(8)">
      <!-- <area shape="circle" coords="337, 78, 10" alt="pluto" v-on:click="selectPlanet(9)"> -->
    </map>
    <!-- <planets-element v-for="(planet, index) in planets" :key="index" :planet="planet"/> -->
  </div> 
</template>

<script>
import {eventBus} from "@/main.js"
import PlanetsElement from "./PlanetElement"

export default {
  name: "front-page",
  props: ["planets"],
  components: {
    "planets-element": PlanetsElement
  },
  methods: {
    selectPlanet(number) {
      eventBus.$emit("selected-page", "planet-info");
      eventBus.$emit("selected-planet", this.planets[number - 1]);
    }
  }
}
</script>

<style scoped>

#front-page{
  margin: 2%;
  /* display: flex; */
}

#bird-view {
  height: 800px;
  /* justify-content: center; */
  align-items: center;
}
</style>    