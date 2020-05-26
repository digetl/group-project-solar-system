<template>
  <div id="gravity-animation-page">
    <canvas id="my-canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "gravity-animation",
  data() {
    return {
      canvas: null,
      ctx: null,
      gravity: 1.3,
      scale: 50, // 1m = 50px
      ball: {
        x: 400,
        y: 50,
        yVel: 0,
        xVel: 0,
      },
      frameTimerReference: null,
      logicTimerReference: null
    }
  },
  mounted() {
    this.initAnimation();
  },
  beforeDestroy: function () {
    // this.frameTimerReference.destroy()
    window.cancelAnimationFrame(this.frameTimerReference);
    // this.logicTimerReference.destroy()
  },
  methods: {
    initAnimation() {
      const c = document.getElementById("my-canvas");
      const contx = c.getContext('2d');

      this.canvas = c;
      this.ctx = contx;

      this.canvas.width = 800;
      this.canvas.height = 400;


      this.frameTimerReference = window.requestAnimationFrame(this.update);
    },
    drawBackground() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = "rgb(218, 218, 218)";
      this.ctx.fillRect(0, 320, 800, 400);
      this.ctx.fill(); 
    },

    drawFrame() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.drawBackground();

      this.ctx.beginPath();
      this.ctx.arc(this.ball.x, this.ball.y, 10, 0, Math.PI*2);
      this.ctx.fillStyle = "white";
      this.ctx.fill();
      this.ctx.closePath();
    },

    update () {
      
      let x = this.ball.x;
      let y = this.ball.y
      
      if (y <= this.canvas.height - 85) {
        y += 1;
      }

      this.ball.x = x;
      this.ball.y = y;

      this.drawFrame()
      this.frameTimerReference = window.requestAnimationFrame(this.update);
    }
  }
}
</script>

<style>
#gravity-animation-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#my-canvas {
  margin: 5%;
  position: relative;
  height: 400px;
  width: 800px;
  border: 2px solid rgb(113, 125, 141);
  border-radius: 2px;
}
</style>