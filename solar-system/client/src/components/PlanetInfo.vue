<template>
  <div class="info">
    <h2>Name:{{planet.name}}</h2>
    <p>and all the cool information you want to add</p>
    <p>Stuff</p>
    <p>things</p>
    <p>others</p>
  </div>
</template>

<script>


export default {
  name: "planet-info",
  props: ["planet"]
}
</script>

<style>
.info {
  margin: 2%;
}
</style>