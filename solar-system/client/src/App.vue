<template>
  <div id="app">
    <solar-navbar :planets="planets"/>

    <div id="app-body">
      <!-- <div class="stars">
    	  <div class="small" v-for="(star) in smallStars" :key="star.key" :style="star.style"></div>
      	<div class="medium" v-for="(star) in mediumStars" :key="star.key" :style="star.style"></div>
    	  <div class="large" v-for="(star) in largeStars" :key="star.key" :style="star.style"></div>
      </div> -->

      <front-page v-if="selectedPage === 'front-page'" :planets="planets"/>
      <planet-info v-if="selectedPage === 'planet-info'" :planet="selectedPlanet"/>  
      <gravity-animation v-if="selectedPage === 'gravity-animation'" :planets="planets"/>
      <size-comparison v-if="selectedPage === 'size-comparison'" :planets="planets"/>
      <quiz v-if="selectedPage === 'quiz'" :planets="planets"/>
    </div>
    <solar-footer class="footer"/>
  </div>
</template>

<script>
import {eventBus} from "@/main.js";
import SolarNavbar from "@/components/SolarNavbar";
import FrontPage from "@/components/FrontPage";
import PlanetInfo from "@/components/PlanetInfo";
import SizeComparison from "@/components/SizeComparison";
import SolarFooter from "@/components/SolarFooter";
import Solar from "./services/Solar.js";
import Quiz from "@/components/Quiz.vue";
import GravityAnimation from "@/components/GravityAnimation.vue"

export default {
  name: 'app',
  components: {
    "solar-navbar": SolarNavbar,
    "front-page": FrontPage,
    "planet-info": PlanetInfo,
    "size-comparison": SizeComparison,
    "solar-footer": SolarFooter,
    "quiz": Quiz,
    "gravity-animation": GravityAnimation
  },
  data() {
    return {
      planets: [],
      selectedPlanet: null,
      selectedPage: "front-page",
      smallStars: [],
      mediumStars: [],
      largeStars: []

    }
  },
  mounted() {
    this.fetchSolar();
    
    eventBus.$on("selected-page", (page) => {this.selectedPage = page});
    eventBus.$on("selected-planet", (planet) => {
      this.selectedPlanet = planet
    });

    // create and randomly place stars on the background
    for(let i=0; i<15; i++) {
      this.smallStars.push(this.newStar(`smallstar_${i}`));
      this.mediumStars.push(this.newStar(`mediumstar_${i}`));
      this.largeStars.push(this.newStar(`largestar_${i}`));
    };
  },
  methods: {
    fetchSolar() {
      Solar.getSolar()
      .then(solar => {
        this.planets = solar; 
      })
    },

    placeStar(x, y, k) {
      return {
        style: `animation: twinkle 5s ${(Math.round(Math.random()*5) + 5)}s linear infinite; left: ${x}%; top: ${y}%;`,
        key: k
      };
    },
    newStar(k) {
      const leCarrayDAs = Math.max(window.innerWidth, window.innerHeight)
      const x = Math.round(Math.random()*100);
      const y = Math.round(Math.random()*100);
      return this.placeStar(x, y, k);
    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
#app {
  position: relative;
  margin: 0;
	padding: 0;
  height: 100%;
	width: 100%;
  font-family: Roboto,sans-serif;
}

#app-body {
 	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
  position: relative;
  color: white;


/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#2d343d+0,24272a+36,0b0f11+100 */
background: #2d343d; /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover,  #2d343d 0%, #24272a 36%, #0b0f11 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover,  #2d343d 0%,#24272a 36%,#0b0f11 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center,  #2d343d 0%,#24272a 36%,#0b0f11 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2d343d', endColorstr='#0b0f11',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.footer {
  position: relative;
}

.stars {
  position: static;
}

.small {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}

.medium {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}

.large {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    
    opacity: 0;
  }
}
</style>
