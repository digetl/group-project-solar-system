<template>
  <div class="quiz-container">
       <div id="questions">
    <h2>Space Quiz</h2>
    <!-- <br> -->
    <h4>Which planet is closest to the Sun?</h4>
     <select name="planet" id="planet">
    <option v-for="(planet, index) in planets" :value="index">{{ planet.name }}</option>
     </select>

     <!-- mercury -->

     <h4>Which planet is the biggest in the solar system?</h4>
     <select name="planet" id="planet">
    <option v-for="(planet, index) in planets" :value="index">{{ planet.name }}</option>
     </select>

     <!-- jupiter -->
   
      <h4>Does Venus have a moon?</h4>
    <input id="" name="questionButton" type="radio" value="">Yes</input>
    <input id="" name="questionButton" type="radio" value="">No</input>
     </div>
  <br>
  
         <input type="submit" value="Submit answers">
  
</div>
  
  </div>
</template>

<script>

import QuizQuestion from "./QuizQuestion.vue";
import {eventBus} from "@/main.js";

export default {
      name: "quiz",
      props: ["planets"],
      components: {
          "quizQuestion": QuizQuestion
      }
}

</script>

<style>

</style>