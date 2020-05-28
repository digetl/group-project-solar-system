<template>
  <div class="quiz-container">

    <div>
      <h2> Which planet is larger? </h2>
      <div>
        <P v-if="planet1" v-on:click="answerQuestion1(planet1)">{{planet1.name}}</P>
        <P v-if="planet2" v-on:click="answerQuestion1(planet2)">{{planet2.name}}</P>
      </div>

      <div v-if="showResult1">
        <p class="correct-answer" v-if="answer1">correct answer</p>
        <p class="incorrect-answer" v-if="!answer1">sorry wrong answer</p>
      </div>

    </div>
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
.quiz-container{
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.correct-answer{
  border: solid;
  color: rgb(47, 201, 47);
  size: 50px;
  border-width: 3px;;
  padding: 0 2%;
}
.incorrect-answer{
  border: solid;
  color: rgb(250, 97, 50);
  size: 50px;
  border-width: 3px;;
  padding: 0 2%;
}
</style>