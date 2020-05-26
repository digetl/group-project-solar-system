<template>
  <div class="solar-footer">
      <p>Links:</p>
      <p v-on:click="selectSize()" href="#">Size comparison</p>
      <p v-on:click="selectQuiz()" href="#">Quiz</p>

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
      }
    }
}
</script>

<style>
.solar-footer {
    padding:0.5% 2%;
    background-color: black;
}

.solar-footer p{
    color:white;
}

</style>