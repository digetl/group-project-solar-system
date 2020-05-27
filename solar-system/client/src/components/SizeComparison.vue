<template>
  <div>

      <h1 class="compare-header">Compare planet diameters</h1>
  
      <div class="planets-pictures">
        <div class="picture-holder">
          <img id="planet1" :src="require(`../assets/${planet1.images.mainPic}`)" :style="stylePlanet1" />
        </div>  

        <div class="picture-holder">
          <img id="planet2" :src="require(`../assets/${planet2.images.mainPic}`)" :style="stylePlanet2" />
        </div>  
      </div>

      <div class="select-planet">
        <div>
          <h2 class="select">{{planet1.name}}</h2>
          <h2 class="select">Diameter: {{planet1.diameter.toLocaleString()}} km</h2>

          <select id="planet1-select" v-model="planetName1" v-on:change="handleSelectPlanet1(planetName1)"> 
            <option v-for="(planet, index) in isPlanet" :key="index">{{planet.name}}</option>
          </select>
        </div>

        <div>
          <h2>{{planet2.name}}</h2>
          <h2>Diameter: {{planet2.diameter.toLocaleString()}} km</h2>
          
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
          planetName1: "venus",
          planetName2: "earth",
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
         return planet.name !== "Asteroid Belt" 
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
        
        if(this.planetName1 === "Saturn") {
          ratio = ratio/0.6
        }
        if(this.planetName2 === "Saturn") {
          ratio = ratio*0.6
        }

        if(ratio > 1) {
          this.stylePlanet1 = `height: ${100}%; width: ${100}%`;
          this.stylePlanet2 = `height: ${1/ratio * 100}%; width: ${1/ratio * 100}%`;
        } else {
          this.stylePlanet2 = `height: ${100}%; width: ${100}%`;
          this.stylePlanet1 = `height: ${ratio * 100}%; width: ${ratio * 100}%;`
        }
      }
  }
}

</script>

<style>

.planets-pictures {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.picture-holder {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 450px;
}

.select-planet {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  justify-content: space-evenly;
}
.compare-header {
  padding: 0.5rem 0;
  text-align: center;
}
</style>