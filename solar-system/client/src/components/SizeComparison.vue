<template>
  <div class="row">
    <div class="compare-container">
      <img src="../assets/compare.svg" id="mercury"/>
    </div>

    <div class="spacer">
      <div class="earth-container">
        <img src="../assets/earth.svg" id="earth"/>
      </div>
    </div>

    <div class="row">
      <div class="compare-container">
        <h2>Select a planet</h2>
  <!-- <h2>Name: {{planet.name}}</h2> -->
  <!-- <p>Diameter: {{planet.diameter.toLocale()}} kilometers</p> -->
      </div>

      <div class="earth-container">
        <h2>Earth</h2>
        <h2>Diameter: 127,404 kilometers</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "size-comparison",
  props: ["planets"],

  methods: {
    selectPage() {
      eventBus.$emit("selected-page", "size-comparison");
      eventBus.$emit("selected-planet", this.planet);
    },

    findSizeRatio() {
      const earth = 1
    // suedo code   compareRatio = this.planet.diameter / 127404
    }
  }
}
</script>

<style>
.row {
  position: relative;
  padding: 2% 1%;
  display: flex;
  align-items: flex-start;
  font-family: Roboto,sans-serif;
}
.compare-container{
  flex: 40%
}
.earth-container{
  flex: 40%
}
.spacer {
  padding: 2% 1%;
}
.row h2{
  text-align: center;
}
</style>