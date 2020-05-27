<template>
  <div>
      <div class="row">
        <div class="compare-container">
            <img class="compare-svg" src="../assets/compare.svg" id="mercury"/>
        </div>

        <div class="spacer"></div>

        <div class="earth-container">
            <img class="earth-svg" src="../assets/earth.svg" id="earth" />
            
        </div>
      </div>
    

      <div class="row">
          <div class="compare-container">
              <select id="planet-select" v-model="planetName" v-on:change="handleChangePlanet()"> 
                <option v-for="(planet, index) in planets" :key="index">{{planet.name}}</option>
              </select>
         <!-- <h2>Name: {{planet.name}}</h2> -->
         <!-- <p>Diameter: {{planet.diameter.toLocale()}} kilometers</p> -->
          </div>

          <div class="earth-container">
              <h2>Earth</h2>
              <h2>Diameter: 12,740 kilometers</h2>
          </div>
      </div>

      <div class="earth-container">
        <h2>Earth</h2>
        <h2>Diameter: 127,404 kilometers</h2>
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
          planet: null,
          compareRatio: null
      }
  },
  
    mounted() {
        this.handleChangePlanet()
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
  padding: 4% 6%;
  display: flex;
  font-family: Roboto,sans-serif;
  align-items: safe center;
}
  .compare-container{
      flex: 40%;     
  }
  .earth-container{
      flex: 40%;
  }
  .spacer {
    padding: 2% 1%;
  }
  .earth-svg{
      width :75%;
  }

 .compare-svg{
      width :55%;
      filter: grayscale(1);
      filter: hue-rotate(3.142rad);
  }

  .row h2{
      text-align: center;
  }
</style>