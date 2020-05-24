<template lang="html">
  <p v-on:click="selectPage()">{{planet.name}}</p>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: 'planet-element',
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

</style>