<template lang="html">
  <div id="front-page">
    <div>
    <img id="info-bird-view" v-if="hover" :style="coor" :src="imageLink"/>
    <img src="../assets/planets_birds-01.png" id="bird-view" usemap="#bird-view-map"/>
    <map name="bird-view-map">
      <area shape="circle" coords="405, 405, 68" alt="sun" href="#" v-on:click="selectPlanet(0)"
        v-on:mouseenter="showInfo($event, 0)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="513, 405, 14" alt="mercury" href="#" v-on:click="selectPlanet(1)"
        v-on:mouseenter="showInfo($event, 1)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="417, 263, 27" alt="venus" href="#" v-on:click="selectPlanet(2)"
        v-on:mouseenter="showInfo($event, 2)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="252, 315, 29" alt="earth" href="#" v-on:click="selectPlanet(3)"
        v-on:mouseenter="showInfo($event, 3)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="232, 528, 20" alt="mars" href="#" v-on:click="selectPlanet(4)"
        v-on:mouseenter="showInfo($event, 4)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="392, 690, 60" alt="jupiter" href="#" v-on:click="selectPlanet(5)"
        v-on:mouseenter="showInfo($event, 5)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="713, 463, 53" alt="saturn" href="#" v-on:click="selectPlanet(6)"
        v-on:mouseenter="showInfo($event, 6)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="626, 123, 36" alt="uranus" href="#" v-on:click="selectPlanet(7)"
        v-on:mouseenter="showInfo($event, 7)" 
        v-on:mouseleave="hover = false">
      <area shape="circle" coords="104, 150, 33" alt="neptune" href="#" v-on:click="selectPlanet(8)" 
        v-on:mouseenter="showInfo($event, 8)" 
        v-on:mouseleave="hover = false">
      <!-- <area shape="circle" coords="337, 78, 10" alt="pluto" v-on:click="selectPlanet(9)"> -->
    </map>
    </div>
  </div> 
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: "front-page",
  props: ["planets"],
  data() {
    return {
      selectedPlanet: null,
      hover: false,
      coor: "",
      imageLink: ""
    }
  },
  methods: {
    selectPlanet(id) {
      eventBus.$emit("selected-page", "planet-info");
      eventBus.$emit("selected-planet", this.planets[id]);
    },
    showInfo(event, id) {
      let heightOffset = 0;
      if(event.offsetY >= 520 ) {heightOffset = -110}
      if(event.offsetY <= 220) {heightOffset = 110}

      this.coor = `top: ${event.offsetY - 200 + heightOffset}px; left: ${event.pageX + 30}px`
      this.hover = true;
      this.selectedPlanet = this.planets[id];
      this.imageLink = require(`../assets/${this.selectedPlanet.images.hoverGif}`);
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
  margin: 5%;
  height: 800px;
}

#info-bird-view {
  position: absolute;
  height: 400px;
  border: solid;
  border-color: white;
  border-radius: 5px;
}
</style>    