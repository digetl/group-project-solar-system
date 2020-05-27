<template>
  <div class="solar-footer">
    <a href="#" v-on:click="selectSize()">Size comparison</a>
    <a href="#" v-on:click="selectQuiz()">Quiz</a>
    <a href="#" v-on:click="selectGravity()">Gravity animation</a>
  </div>
</template>

<script>

import {eventBus} from "@/main.js"


export default {

    
  methods: {
    selectSize() {
      eventBus.$emit("selected-page", "size-comparison");
    },
    selectQuiz() {
      eventBus.$emit("selected-page", "quiz");
    },
    selectGravity() {
      eventBus.$emit("selected-page", "gravity-animation");
    }
  }
}
</script>

<style>
.solar-footer {
    padding:0.5% 2%;
    background-color: black;
    text-align: center;
}

a {
  color:white;
  margin: 1rem;
  text-decoration: none;
}

a:hover {
  color:rgb(218, 228, 17)
}
</style>