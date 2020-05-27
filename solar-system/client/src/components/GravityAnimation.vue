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
      gravity: 9.8,
    }
  },
  mounted() {
    this.initAnimation();
    this.logicTimerReference = setInterval(this.logic, 8);
  },
  beforeDestroy() {
    this.canvas = null;
    this.ctx = null;
    this.scale = null;
    this.ball = null;
    if(this.frameTimerReference) window.cancelAnimationFrame(this.frameTimerReference);
    if(this.logicTimerReference) window.clearInterval(this.logicTimerReference);
  },
  methods: {
    initAnimation() {
      const c = document.getElementById("my-canvas");
      const contx = c.getContext('2d');

      this.canvas = c;
      this.ctx = contx;

      this.ball = {
        x: 400,
        y: 50,
        yVel: 0,
        xVel: 0
      }

      this.scale = 50; // 1m = 50px

      this.canvas.width = 800;
      this.canvas.height = 400;

      this.frameTimerReference = window.requestAnimationFrame(this.render);
    },

    drawBackground() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = "rgb(218, 218, 218)";
      this.ctx.fillRect(0, 320, 800, 400);
      this.ctx.fill(); 
      this.ctx.closePath();
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

    logic() {
      let y = this.ball.y;
      let yVel = this.ball.yVel
      let yVelBuffer = yVel;

      yVel += (this.gravity * this.scale) / 125
      y += (this.ball.yVel / 125);

      if(y >= 350) {
        yVel = - yVelBuffer;
      }

      this.ball.y = y;
      this.ball.yVel = yVel;
    },

    render() {
      this.drawFrame()
      this.frameTimerReference = window.requestAnimationFrame(this.render);
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