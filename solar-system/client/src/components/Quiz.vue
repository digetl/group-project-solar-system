<template>
  <div class="quiz-container">

    <div>
      <h2> Wich planet is the bigger? </h2>
      <div>
        <P v-if="planet1" v-on:click="answerQuestion1(planet1)">{{planet1.name}}</P>
        <P v-if="planet2" v-on:click="answerQuestion1(planet2)">{{planet2.name}}</P>
      </div>

      <div v-if="showResult1">
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
      answer1: null,
      showResult1: null
    }
  },
  mounted() {
    this.selectRandomPlanets()
  },
  methods: {
    randomNum() {
      return Math.floor(Math.random()*9 + 1)
    },
    selectRandomPlanets() {
      this.planet1 = this.planets[this.randomNum()];
      this.planet2 = this.planets[this.randomNum() ];

      while(this.planet1 === this.planet2) {
        this.planet2 = this.planets[this.randomNum()];
      }
    },
    answerQuestion1(selectAnswer) {
      let correctAnswer = null;

      (this.planet1.diameter > this.planet2.diameter) ? correctAnswer = this.planet1 : correctAnswer = this.planet2;

      (correctAnswer === selectAnswer) ? this.answer1 = true : this.answer1 = false;
      
      this.showResult1 = true;
    }
  }
}

</script>

<style>

</style>