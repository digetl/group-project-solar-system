<template>
  <div class="solar-footer">
    <p class="footer-link" v-on:click="selectSize()">Size comparison</p>
    <p class="footer-link" v-on:click="selectQuiz()">Quiz</p>
    <p class="footer-link" v-on:click="selectGravity()">Gravity animation</p>
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
  display: flex;
  padding:0.5% 2%;
  background-color: black;
  align-items: center;
  justify-content: center;
}

.footer-link {
  color:white;
  margin: 1rem;
  text-decoration: none;
}

.footer-link:hover {
  cursor: pointer;
  color:rgb(218, 228, 17)
}
</style>