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
      ctx: null
    }
  },
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      const c = document.getElementById("my-canvas");
      const contx = c.getContext('2d');

      this.canvas = c;
      this.ctx = contx;

      this.canvas.width = 800;
      this.canvas.height = 400;

      // const gravity = 0.25;

      // const ball = {
      //   radius: 30,
      //   x: this.canvas.width / 2,
      //   y: this.canvas.height / 2,
      //   velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
      //   velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
      // }

      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = "rgb(218, 218, 218)";
      this.ctx.fillRect(0, 330, 800, 400);
      this.ctx.fill(); 

      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(20, 20, 30, 30);
      this.ctx.fill(); 

      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgb(113, 125, 141)";
      this.ctx.arc(100, 410, 50, Math.PI, Math.PI*2);
      this.ctx.stroke();
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgb(113, 125, 141)";
      this.ctx.arc(480, 390, 40, 0, Math.PI*2);
      this.ctx.stroke();
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.strokeStyle = "rgb(113, 125, 141)";
      this.ctx.arc(270, 370, 30, 0, Math.PI*2);
      this.ctx.stroke();
      this.ctx.closePath();
      // this.ctx.arc(270, 370, 30, Math.PI, Math.PI*2);
      // this.ctx.arc(100, 410, 50, Math.PI, Math.PI*2);


      // window.requestAnimationFrame(update)
    },

    // drawFrame() {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height)

    //   ctx.beginPath()
    //   ctx.fillStyle = 'red'
    //   ctx.arc(
    //     ball.x, ball.y,
    //     ball.radius,
    //     0, Math.PI * 2
    //   )
    //   ctx.fill()
    // },

    // update () {
    //   window.requestAnimationFrame(update)

    //   // bottom bound / floor
    //   if (ball.y + ball.radius >= canvas.height) {
    //     ball.velY *= -ball.bounce
    //     ball.y = canvas.height - ball.radius
    //     ball.velX *= friction
    //   }
    //   // top bound / ceiling
    //   if (ball.y - ball.radius <= 0) {
    //     ball.velY *= -ball.bounce
    //     ball.y = ball.radius
    //     ball.velX *= friction
    //   }

    //   // left bound
    //   if (ball.x - ball.radius <= 0) {
    //     ball.velX *= -ball.bounce
    //     ball.x = ball.radius
    //   }
    //   // right bound
    //   if (ball.x + ball.radius >= canvas.width) {
    //     ball.velX *= -ball.bounce
    //     ball.x = canvas.width - ball.radius
    //   }

    //   // reset insignificant amounts to 0
    //   if (ball.velX < 0.01 && ball.velX > -0.01) {
    //     ball.velX = 0
    //   }
    //   if (ball.velY < 0.01 && ball.velY > -0.01) {
    //     ball.velY = 0
    //   }

    //   // add gravity
    //   ball.velY += gravity

    //   // update ball position
    //   ball.x += ball.velX
    //   ball.y += ball.velY

    //   // draw after logic/calculations
    //   drawFrame()
    // }
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