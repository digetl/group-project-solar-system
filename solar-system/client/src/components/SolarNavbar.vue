<template lang="html">
  <div class="header">
    <p id="planet-name" v-if="hover" :style="coor">{{selectedPlanet.name}}</p>
    <img src="../assets/space_header.png" id="image-header" usemap="#solarmap"/>
    <map name="solarmap">
      <area shape="circle" coords="267, 77, 50" alt="sun" v-on:click="selectPlanet(0)" href="#"
        v-on:mouseenter="showName($event, 0)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="337, 77, 8" alt="mercury" v-on:click="selectPlanet(1)" href="#"
        v-on:mouseenter="showName($event, 1)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="372, 77, 13" alt="venus" v-on:click="selectPlanet(2)" href="#"
        v-on:mouseenter="showName($event, 2)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="421, 77, 11" alt="earth" v-on:click="selectPlanet(3)" href="#"
        v-on:mouseenter="showName($event, 3)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="459, 77, 9" alt="mars" v-on:click="selectPlanet(4)" href="#"
        v-on:mouseenter="showName($event, 4)" 
        v-on:mouseleave="hover = false">
      <area shape="rect" coords="475, 30, 490, 125" alt="asteroid-belt" v-on:click="selectPlanet(11)" href="#"
        v-on:mouseenter="showName($event, 11)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="533, 77, 30" alt="jupiter" v-on:click="selectPlanet(5)" href="#"
        v-on:mouseenter="showName($event, 5)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="608, 77, 25" alt="saturn" v-on:click="selectPlanet(6)" href="#"
        v-on:mouseenter="showName($event, 6)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="674, 77, 20" alt="uranus" v-on:click="selectPlanet(7)" href="#"
        v-on:mouseenter="showName($event, 7)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="726, 77, 17" alt="neptune" v-on:click="selectPlanet(8)" href="#"
        v-on:mouseenter="showName($event, 8)" 
        v-on:mouseleave="hover = false">
      <!-- <area shape="circle" coords="337, 78, 10" alt="pluto" v-on:click="selectPlanet(9)" href="#"
        v-on:mouseenter="showName($event, 9)" 
        v-on:mouseleave="hover = false"> -->
      <area shape="circle" coords="422, 95, 3" alt="moon" v-on:click="selectPlanet(10)" href="#"
        v-on:mouseenter="showName($event, 10)" 
        v-on:mouseleave="hover = false">
    </map>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";

export default {
  name:"solar-navbar",
  props: ["planets"],
  data() {
    return {
      selectedPlanet: null,
      hover: false,
      coor: ""
    }
  },
  methods: {
    selectPage() {
      eventBus.$emit("selected-page", "front-page");
    },
    selectPlanet(number) {
    eventBus.$emit("selected-page", "planet-info");
    eventBus.$emit("selected-planet", this.planets[number]);
    },
    showName(event, id) {
      this.coor = `top: 70%; right: 50%; ${event.pageX}px`
      this.hover = true;
      this.selectedPlanet = this.planets[id];
    }
  }
}
</script>

<style scoped>

.header {
  color: black;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* padding: 10px; */
}

#image-header {
  height: 150px;
}
#planet-name{
  position: absolute;
  border: solid;
  border-color: black;
  border-radius: 5%;
  background: white;
}

</style>