<template lang="html">
  <div class="header">
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

<style>

.header {
  background: rgb(61, 61, 61);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  margin: 5%;
}
</style>