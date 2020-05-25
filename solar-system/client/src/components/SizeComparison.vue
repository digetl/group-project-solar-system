<template>
  <div>
    <div class="compare">
        <h2>Name: {{planet.name}}</h2>
        <p>Diameter: {{planet.diameter}} kilometers</p>
    </div>

    <div class="compare">
        <h2>Earth</h2>
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