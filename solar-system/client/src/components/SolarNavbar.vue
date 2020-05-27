<template lang="html">
  <div class="header">
    <img src="../assets/planets_birds-navbar.png" id="birdview-navbar" usemap="#go-front-page"/>
    <map name="go-front-page">
      <area shape="circle" coords="35, 35, 20" alt="bird-view" v-on:click="selectPage()" href="#"
        v-on:mouseenter="showName($event, -1)" 
        v-on:mouseleave="hover = false">
      </map>

    <p id="planet-name" v-if="hover" :style="coor">{{name}}</p>
    <img src="../assets/space_header.png" id="image-header" usemap="#solarmap"/>
    <map name="solarmap">
      <area shape="circle" coords="84, 77, 30" alt="sun" v-on:click="selectPlanet(0)" href="#"
        v-on:mouseenter="showName($event, 0)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="155, 77, 8" alt="mercury" v-on:click="selectPlanet(1)" href="#"
        v-on:mouseenter="showName($event, 1)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="189, 77, 13" alt="venus" v-on:click="selectPlanet(2)" href="#"
        v-on:mouseenter="showName($event, 2)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="239, 78, 11" alt="earth" v-on:click="selectPlanet(3)" href="#"
        v-on:mouseenter="showName($event, 3)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="276, 77, 9" alt="mars" v-on:click="selectPlanet(4)" href="#"
        v-on:mouseenter="showName($event, 4)" 
        v-on:mouseleave="hover = false">
      <area shape="rect" coords="292, 30, 308, 124" alt="asteroid-belt" v-on:click="selectPlanet(11)" href="#"
        v-on:mouseenter="showName($event, 11)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="350, 77, 30" alt="jupiter" v-on:click="selectPlanet(5)" href="#"
        v-on:mouseenter="showName($event, 5)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="425, 77, 25" alt="saturn" v-on:click="selectPlanet(6)" href="#"
        v-on:mouseenter="showName($event, 6)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="491, 77, 20" alt="uranus" v-on:click="selectPlanet(7)" href="#"
        v-on:mouseenter="showName($event, 7)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="543, 77, 17" alt="neptune" v-on:click="selectPlanet(8)" href="#"
        v-on:mouseenter="showName($event, 8)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="577, 78, 10" alt="pluto" v-on:click="selectPlanet(9)" href="#"
        v-on:mouseenter="showName($event, 9)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="239, 96, 3" alt="moon" v-on:click="selectPlanet(10)" href="#"
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
      name: "",
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
      this.coor = `top: 70%; left: ${event.pageX - 30}px`
      this.hover = true;
      (id >= 0) ? this.name = this.planets[id].name : this.name = "Bird View"; 
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
}

#image-header {
  height: 150px;
}
#planet-name{
  position: absolute;
  padding: 2px 10px;
  border: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 2px;
  background: white;
  /* justify-self: left; */
}
#birdview-navbar {
  height: 70px;
}

</style>