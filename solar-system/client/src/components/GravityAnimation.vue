<template>
  <div>
    <canvas id="my-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      animation: null,
      rectWidth: 400
    }
  },
  mounted() {
      var c = document.getElementById("my-canvas");
      var ctx = c.getContext("2d");    
      this.animation = ctx;
  },
  methods: {
    drawRect() {
      // clear canvas
      this.animation.clearRect(0, 0, 400, 800);
      
      // draw rect
      this.animation.beginPath();
      this.animation.rect(20, 20, this.rectWidth, 100);
      this.animation.stroke();      
    }
  }
}

</script>

<style>
#my-canvas {
  height: 400px;
  width: 800px;
  border: 2px solid rgb(255, 255, 255);
}
</style>