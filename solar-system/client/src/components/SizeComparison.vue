<template>
  <div>
    <div class="compare-container">
        <h2>Name: {{planet.name}}</h2>
        <img src="../../assets/compare" id="mercury"/>
        <p>Diameter: {{planet.diameter}} kilometers</p>
    </div>

    <div class="earth-container">
        <h2>Earth</h2>
        <img src="../../assets/earth.svg" id="earth"/>
        <p>Diameter: {{planet.diameter}} kilometers</p>
    </div>

  </div>

</template>

<script>
export default {
  name: "planet-info",
  props: ["planet"]
}
</script>

<style>

</style>