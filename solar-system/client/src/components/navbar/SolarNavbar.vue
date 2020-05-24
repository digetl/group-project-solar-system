<template lang="html">
  <div class="header">
    <img src="../../assets/space_header.png" id="image-header" usemap="#solarmap"/>

    <map name="solarmap">
      <area shape="circle" coords="270, 78, 50" alt="sun" v-on:click="selectPage()">
      <area shape="circle" coords="337, 78, 8" alt="mercury" v-on:click="selectPlanet(1)">
      <area shape="circle" coords="374, 78, 15" alt="venus" v-on:click="selectPlanet(2)">
      <area shape="circle" coords="420, 78, 15" alt="earth" v-on:click="selectPlanet(3)">
      <area shape="circle" coords="457, 78, 12" alt="mars" v-on:click="selectPlanet(4)">
      <area shape="circle" coords="531, 78, 30" alt="jupiter" v-on:click="selectPlanet(5)">
      <area shape="circle" coords="606, 78, 25" alt="saturn" v-on:click="selectPlanet(6)">
      <area shape="circle" coords="674, 78, 20" alt="uranus" v-on:click="selectPlanet(7)">
      <area shape="circle" coords="726, 78, 15" alt="neptune" v-on:click="selectPlanet(8)">
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
      eventBus.$emit("selected-planet", this.planets[number - 1]);
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
  justify-content: space-between;
  /* padding: 10px; */
}

#image-header {
  height: 150px;
}

h1 {
  margin: 5%;
}
</style>