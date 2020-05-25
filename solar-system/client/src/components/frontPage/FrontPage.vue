<template lang="html">
  <div id="front-page">
    <div>
    <p id="info-bird-view" v-if="hover" :style="coor">{{selectedPlanet.name}}</p>
    <img src="../../assets/space_rings.png" id="bird-view" usemap="#bird-view-map"/>
    <map name="bird-view-map">
      <area shape="circle" coords="495, 399, 10" alt="mercury" href="#" v-on:click="selectPlanet(1)"
        v-on:mouseover="showInfo($event, 1)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="303, 283, 25" alt="venus" href="#" v-on:click="selectPlanet(2)">
      <area shape="circle" coords="231, 483, 27" alt="earth" href="#" v-on:click="selectPlanet(3)">
      <area shape="circle" coords="600, 409, 16" alt="mars" href="#" v-on:click="selectPlanet(4)">
      <area shape="circle" coords="528, 191, 57" alt="jupiter" href="#" v-on:click="selectPlanet(5)">
      <area shape="circle" coords="246, 646, 49" alt="saturn" href="#" v-on:click="selectPlanet(6)">
      <area shape="circle" coords="625, 617, 38" alt="uranus" href="#" v-on:click="selectPlanet(7)">
      <area shape="circle" coords="124, 145, 33" alt="neptune" href="#" v-on:click="selectPlanet(8)" 
        v-on:mouseover="showInfo($event, 8)" 
        v-on:mouseleave="hover = false">
      <!-- <area shape="circle" coords="337, 78, 10" alt="pluto" v-on:click="selectPlanet(9)"> -->
    </map>
    </div>
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
  data() {
    return {
      selectedPlanet: null,
      hover: false,
      coor: ""
    }
  },
  methods: {
    selectPlanet(id) {
      eventBus.$emit("selected-page", "planet-info");
      eventBus.$emit("selected-planet", this.planets[id]);
    },
    showInfo(event, id) {
      this.coor = `top: ${event.offsetY}px; left: ${event.offsetX}px`
      this.hover = true;
      this.selectedPlanet = this.planets[id];
    }
  }
}
</script>

<style>

#front-page{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#bird-view {
  height: 800px;
}

#info-bird-view {
  position: absolute;
}
</style>    