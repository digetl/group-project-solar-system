<template>
  <div class="solar-footer">
      <p>Links:</p>
      <p v-on:click="selectPage()" href="#">Size comparison</p>
  </div>
</template>

<script>
export default {

    methods: {
      selectPage() {
        eventBus.$emit("selected-page", "size-comparison");
      }
    }
}
</script>

<style>
.solar-footer {
    padding:0.5% 2%;
    background-color: black;
}

</style>