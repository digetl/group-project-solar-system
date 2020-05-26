<template lang="html">
  <div class="header">
    <img src="../../assets/space_header.png" id="image-header" >
    <navbar-element v-for="(planet, index) in planets" :key="index" :planet="planet"/>
    <h1 class="title" v-on:click="selectPage()">Solar</h1>
    
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
      }
    }
}
</script>

<style scoped>

.header {
  color: black;
  background: white;
  /* background-image: url("../../assets/space_header.png");
  background-size: cover; */
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