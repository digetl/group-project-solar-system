<template lang="html">
  <div class="header">
    <img src="../../assets/space_header.png" id="image-header" usemap="#solarmap"/>

    <map name="solarmap">
      <area shape="circle" coords="267, 77, 50" alt="sun" v-on:click="selectPage()" href="#">
      <area shape="circle" coords="337, 77, 8" alt="mercury" v-on:click="selectPlanet(1)" href="#">
      <area shape="circle" coords="374, 77, 15" alt="venus" v-on:click="selectPlanet(2)" href="#">
      <area shape="circle" coords="420, 77, 15" alt="earth" v-on:click="selectPlanet(3)" href="#">
      <area shape="circle" coords="459, 77, 12" alt="mars" v-on:click="selectPlanet(4)" href="#">
      <area shape="rect" coords="475, 30, 490, 125" alt="asteroid-belt" href="#">
      <area shape="circle" coords="533, 77, 30" alt="jupiter" v-on:click="selectPlanet(5)" href="#">
      <area shape="circle" coords="606, 77, 25" alt="saturn" v-on:click="selectPlanet(6)" href="#">
      <area shape="circle" coords="674, 77, 20" alt="uranus" v-on:click="selectPlanet(7)" href="#">
      <area shape="circle" coords="726, 77, 17" alt="neptune" v-on:click="selectPlanet(8)" href="#">
      <!-- <area shape="circle" coords="337, 78, 10" alt="pluto" v-on:click="selectPlanet(9)"> -->
    </map>

    <!-- <navbar-element v-for="(planet, index) in planets" :key="index" :planet="planet"/> -->
    <!-- <h1 class="title" v-on:click="selectPage()">Solar</h1> -->
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import NavbarElement from './NavbarElement.vue';

export default {
    name:"solar-navbar",
    props: ["planets"],
    components: {
      "navbar-element": NavbarElement
    },
    methods: {
      selectPage() {
        eventBus.$emit("selected-page", "front-page");
      },
      selectPlanet(number) {
      eventBus.$emit("selected-page", "planet-info");
      eventBus.$emit("selected-planet", this.planets[number]);
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
  /* padding: 10px; */
}

#image-header {
  height: 150px;
}

</style>