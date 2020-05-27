<template>
  <div>
    <div class="compare-header">
      <h1>Compare a planets diameter with Earth</h1>
    </div>
      <div class="row">
        <div class="compare-container">
            <img class="compare" src="../assets/mars-pic.png" id="planet"/>
        </div>

        <div class="spacer"></div>

        <div class="earth-container">
            <img class="earth" src="../assets/earth-pic.png" id="earth" />
            <h2>Earth</h2>
            <h2>Diameter: 12,740 kilometers</h2>
        </div>
      </div>
    

      <div class="row">
          <div class="compare-container">
              <select id="planet-select" v-model="planetName" v-on:change="handleChangePlanet()"> 
                <option v-for="(planet, index) in isPlanet" :key="index">{{planet.name}}</option>
              </select>
          </div>

          
      </div>

      
    
  </div>
</template>

<script>
import {eventBus} from "@/main.js";

export default {
  name: "size-comparison",
  props: ["planets"],

  data() {
      return {
          planetName: "",
          findPlanets: null,
          compareRatio: null,
          }
  },
  
    mounted() {
        this.handleChangePlanet()
      },

    computed: {
       isPlanet: function() {
       return this.planets.filter(function(planet) {
         return planet.isPlanet
       })
    }
    },
    
   methods: {
      handleChangePlanet() {
          this.planet = this.planets.find(planet => planet.name === this.planetName);
          this.compareRatio = parseFloat(this.planet.diameter) / 12740
          planetToChange = document.getElementById("compare-svg")
          planetToChange.style.width = compareRatio
      },

      selectPage() {
        eventBus.$emit("selected-page", "size-comparison");
        eventBus.$emit("selected-planet", this.planet);
      },

      findSizeRatio() {
        const earth = 1
      // suedo code   compareRatio = this.planet.diameter / 127404
      }
    }
}
</script>

<style>
.row {
  position: relative;
  padding: 1% 6%;
  display: flex;
  font-family: Roboto,sans-serif;
  align-items: safe center;
}
  .compare-container{
      flex: 40%;    
      text-align:center;
  }
  .earth-container{
      flex: 40%;
      text-align:center;
  }
  .spacer {
    padding: 2% 1%;
  }
  .earth{
      width :400px;
  }

 .compare{
      width :320px;
  }

  .row h2{
      text-align: center;
  }

  .compare-header{
    font-weight: 400;
    padding:1rem 0 0 0;
    text-align: center;
  }
</style>