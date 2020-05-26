<template>
  <div class="solar-footer">
    <p>Links:</p>
    <p v-on:click="selectPage()" href="#">Size comparison</p>
    <p v-on:click="selectPage()" href="#">Gravity animation</p>
  </div>
</template>

<script>

import {eventBus} from "@/main.js"


export default {
  methods: {
    selectPage() {
      eventBus.$emit("selected-page", "size-comparison");
      eventBus.$emit("selected-page", "gravity-animation");
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