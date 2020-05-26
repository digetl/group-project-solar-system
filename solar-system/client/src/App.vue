<template>
  <div id="app">
    
    <solar-navbar :planets="planets"/>
    <div id="app-body">
      
      <div>
    	<div class="small-stars" v-for="(star, index) in smallStars" :key="index" :style="star"></div>
    	<div class="medium-stars " v-for="(star, index) in mediumStars" :key="index + 100" :style="star"></div>
    	<div class="large-stars" v-for="(star, index) in largeStars" :key="index + 200" :style="star"></div>
      </div>

      <front-page v-if="selectedPage === 'front-page'" :planets="planets"/>
      <planet-info v-if="selectedPage === 'planet-info'" :planet="selectedPlanet"/>  
      <size-comparison v-if="selectedPage === 'size-comparison'" :planets="planets"/>
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

    for(let i=0; i<100; i++) {
      this.smallStars.push(this.newStar());
      this.mediumStars.push(this.newStar());
      this.largeStars.push(this.newStar());
    };
  },
  methods: {
    fetchSolar() {
      Solar.getSolar()
      .then(solar => {
        this.planets = solar; 
      })
    },

    placeStar(x, y) {
      return  `animation: twinkle ${((Math.random()*5) + 5)}s linear ${((Math.random()*5) + 5)}s infinite; left: ${x}%; top: ${y}%;`;
    },
    newStar() {
      return this.placeStar(Math.floor(Math.random()*100), Math.floor(Math.random()*100));
    }
  }
}



</script>

<style>



#app {
  margin: 0;
	padding: 0;
  height: 100%;
	width: 100%;
}

#app-body {
 	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
  position: relative;
  /* background-image: url("./assets/space_only.png"); */
  color: white;


  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#2d343d+0,24272a+36,0b0f11+100 */
  background: #2d343d; /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover,  #2d343d 0%, #24272a 36%, #0b0f11 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover,  #2d343d 0%,#24272a 36%,#0b0f11 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center,  #2d343d 0%,#24272a 36%,#0b0f11 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2d343d', endColorstr='#0b0f11',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.small-stars {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  /* box-shadow: 
    0 0 1px 1px rgb(255, 255, 255),
    0 0 2px 2px rgb(255, 188, 186); */
}
.medium-stars {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgb(255, 255, 255);

  /* box-shadow: 
    0 0 1px 1px rgb(255, 255, 255),
    0 0 3px 3px rgb(186, 255, 252); */
}

.large-stars {
  margin: 0;
	padding: 0;
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgb(255, 255, 255);

  /* box-shadow: 
    0 0 2px 2px rgb(255, 255, 255),
    0 0 4px 4px rgb(255, 250, 186); */
}

@keyframes twinkle {
  0% {
    background: rgba(255, 255, 255, 0);
    animation-timing-function: ease-in;
  }
  50% {
    background: rgba(255,255,255,1);
    animation-timing-function: ease-out;
  }
  100% {
    background: rgba(255,255,255,0.0);
  }
}

</style>