<template>
  <div>
    <div class="compare-header">
      <h1>Compare a planet diameter with another</h1>
    </div>
      <div class="row">
        <div class="compare-container">
          <div class="planet-holder">
            <img class="compare" :src="require(`../assets/${planet1.images.mainPic}`)" :style="stylePlanet1" id="planet1"/>
          </div>
            <h2>{{planet1.name}}</h2>
            <h2>Diameter: {{planet1.diameter}} km</h2>

            <select id="planet1-select" v-model="planetName1" v-on:change="handleSelectPlanet1(planetName1)"> 
                <option v-for="(planet, index) in isPlanet" :key="index">{{planet.name}}</option>
            </select>
            
        </div>

        <div class="spacer"></div>

        <div class="earth-container">
          <div class="planet-holder">
            <img class="earth" :src="require(`../assets/${planet2.images.mainPic}`)" :style="stylePlanet2" id="planet2"/>
          </div>
            <h2>{{planet2.name}}</h2>
            <h2>Diameter: {{planet2.diameter}} km</h2>
             <select id="planet2-select" v-model="planetName2" v-on:change="handleSelectPlanet2(planetName2)"> 
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
          planetName1: "",
          planetName2: "",
          planet1: this.planets[2],
          planet2: this.planets[3],
          stylePlanet1: "",
          stylePlanet2: ""
      }
  },
  mounted() {
    this.resizePlanets()
  },

    computed: {
       isPlanet: function() {
       return this.planets.filter(function(planet) {
         return planet.isPlanet
       })
    }
    },
    
   methods: {
      selectPage() {
        eventBus.$emit("selected-page", "size-comparison");
        eventBus.$emit("selected-planet", this.planet);
      },

      handleSelectPlanet1(name) {
        this.planet1 = this.planets.find(planet => planet.name === name);
        this.resizePlanets();
      },

      handleSelectPlanet2(name) {
        this.planet2 = this.planets.find(planet => planet.name === name);
        this.resizePlanets();
      },

      resizePlanets() {
        let ratio = this.planet1.diameter/this.planet2.diameter

        if(ratio > 1) {
          this.stylePlanet1 = `height: ${100}%; width: ${100}%`;
          this.stylePlanet2 = `height: ${1/ratio * 100}%; width: ${1/ratio * 100}%`;
        } else {
          this.stylePlanet2 = `height: ${100}%; width: ${100}%`;
          this.stylePlanet1 = `height: ${ratio * 100}%; width: ${ratio * 100}%;`
        }
        ratio = 1;
      }
  }
}

</script>

<style>
.row {
  position: relative;
  padding: 1% 6%;
  display: flex;
  align-items: center;
  justify-content: center;
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
      width :400px;
  }

  .row h2{
      text-align: center;
  }

  .compare-header{
    font-weight: 400;
    padding:1rem 0 0 0;
    text-align: center;

  }

  .planet-holder {
    height: 450px;
    width: 450px;
  }

</style>