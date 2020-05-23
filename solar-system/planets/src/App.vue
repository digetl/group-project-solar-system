<template>
  <div id="app">
    <solar-navbar class="header"/>
    <div id="body">
      <index v-if="selectedPage === 'index'" :planets="planets"/>
      <planet-info v-if="selectedPage === 'planet'" :planet="selectedPlanet">
      <size-comparison v-if="selectedPage === 'sizeCompare'" :planets="planets"/>
    </div>
    <foot-page class="footer"/>
  </div>
</template>

<script>
import {eventBus} from "@/main.js"

export default {
  name: 'app',
  components: {
    "solar-navbar": SolarNavbar,
    "index": Index,
    "planet-info": PlanetInfo,
    "size-comparison": SizeComparison,
    "foot-page": FootPage
  },
  data( {
    
  })
}
</script>

<style>

</style>