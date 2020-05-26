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
              <select id="planet-select" v-model="handleChangePlanet" v-on:change="handleChangePlanet"> 
                <option v-for="(planet, index) in planets" :key="index" value="planet">{{planet.name}}</option>
              </select>
         <!-- <h2>Name: {{planet.name}}</h2> -->
         <!-- <p>Diameter: {{planet.diameter.toLocale()}} kilometers</p> -->

          </div>

          <div class="earth-container">
              <h2>Earth</h2>
              <h2>Diameter: 127,404 kilometers</h2>
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
          planet:[],
          compareRatio: 0
      }
  },
  
    mounted() {
        this.handleChangePlanet()
    },
   methods: {
    handleChangePlanet() {
        const compareRatio = this.planet.diameter / 127404
        const planetToChange = document.getElementById("compare-svg")
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