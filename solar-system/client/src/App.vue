<template>
  <div id="app">
    
    <solar-navbar :planets="planets"/>
    <div id="app-body">
      
      <front-page v-if="selectedPage === 'front-page'" :planets="planets"/>
      <planet-info v-if="selectedPage === 'planet-info'" :planet="selectedPlanet"/>  
      <size-comparison v-if="selectedPage === 'sizeCompare'" :planets="planets"/>
    </div>
    <solar-footer class="footer"/>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SolarNavbar from "@/components/navbar/SolarNavbar";
import FrontPage from "@/components/frontPage/FrontPage";
import PlanetInfo from "@/components/PlanetInfo";
import SizeComparison from "@/components/SizeComparison";
import SolarFooter from "@/components/SolarFooter";
import Solar from "./services/Solar.js"

export default {
  name: 'app',
  components: {
    "solar-navbar": SolarNavbar,
    "front-page": FrontPage,
    "planet-info": PlanetInfo,
    "size-comparison": SizeComparison,
    "solar-footer": SolarFooter
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      selectedPage: "front-page"
    }
  }
  ,
  mounted() {
    this.fetchSolar();
    
    eventBus.$on("selected-page", (page) => {this.selectedPage = page});

    eventBus.$on("selected-planet", (planet) => {
      console.log(planet.name)
      this.selectedPlanet = planet
    });
  },
  methods: {
    fetchSolar() {
      Solar.getSolar()
      .then(solar => {
        this.planets = solar; 
      })
    }
  }
}
</script>

<style>

#app {
  margin: 0;

}

#app-body {
  margin: 0;
  background-image: url("./assets/space_only.png");
  color: white;
  background-size: cover;
}

</style>