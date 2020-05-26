<template>
  <div class="quiz-container">
      <!-- v-model -->


    <div>
      <h2> Wich planet is the bigger? </h2>
      <div>
        <P v-if="planet1" >{{planet1.name}}</P>
        <P v-if="planet2" >{{planet2.name}}</P>
      </div>

      <div>
        <p v-if="answer1">correct answer</p>
        <p v-if="!answer1">sorry wrong answer</p>
      </div>

    </div>


    <!-- <form>
      <h2>Space Quiz</h2> -->
      <!-- <br> -->
      <!-- <h4>Which planet is closest to the Sun?</h4>
      <select name="planet" id="planet">
        <option v-for="(planet, index) in planets" :value="index">{{ planet.name }}</option>
      </select> -->

      <!-- mercury -->

      <!-- <h4>Which planet is the biggest in the solar system?</h4>
      <select name="planet" id="planet">
        <option v-for="(planet, index) in planets" :value="index">{{ planet.name }}</option> -->
      <!-- </select> -->
    

      <!-- jupiter -->
    
      <!-- <h4>Does Venus have a moon?</h4>
      <input id="" name="questionButton" type="radio" value="">Yes</input>
      <input id="" name="questionButton" type="radio" value="">No</input> -->
    <!-- <br> -->
  
    <!-- <input type="submit" value="Submit answers"> -->
    <!-- </form> -->
</div>
  

</template>

<script>

import {eventBus} from "@/main.js";

export default {
  name: "quiz",
  props: ["planets"],
  data() {
    return {
      planet1: null,
      planet2: null,
      answer1: null
    }
  },
  mounted() {
    this.selectRandomPlanets()
  },
  methods: {
    randomNum() {
      return Math.floor(Math.random()*8) + 1
    },
    selectRandomPlanets() {
      this.planet1 = this.planets[this.randomNum()];
      this.planet2 = this.planets[this.randomNum() ];

      if(this.planet1 === this.planet2) {
        this.planet2 = this.planets[this.randomNum()];
      }
    },
    answerQuestion1() {
      let correctAnswer = null;

      if(this.planet1.diameter > this.planet2.diameter) {
        correctAnswer = planet1;
      } 
      else {
        correctAnswer = planet2;
      }

      if(correctAnswer === this.answer1) { 
        return true 
      }
      else {
        return false
      }
    }
  }
}

</script>

<style>

</style>