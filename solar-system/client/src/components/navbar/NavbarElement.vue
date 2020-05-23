<template>
  <p v-on:click="selectPage()" class="nav-el">{{planet.name}}</p>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: "navbar-element",
  props: ["planet"],
  methods: {
    selectPage() {
      eventBus.$emit("selected-page", "planet-info");
      eventBus.$emit("selected-planet", this.planet);
    }
  }
}
</script>

<style>
.nav-el {
  margin: 2%;
}
</style>