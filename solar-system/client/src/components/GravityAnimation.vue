<template>
  <div>
    <img id="rocket-pic" src="../assets/rocekt.png"/>
    <div id="gravity-animation-page">
      <div id="select-gravity">
        <p id="reset-button" v-on:click="resetAnimation()">Reset Animation</p>

        <div>
          <label for="planet-select">select a planet: </label>
          <select id="planet1-select" v-model="planetName" v-on:change="handleSelectPlanet(planetName)"> 
            <option v-for="(planet, index) in planetsArr" :key="index">{{planet.name}}</option>
          </select>
        </div>
      </div>

      <canvas id="my-canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "gravity-animation",
  props: ["planets"],
  data() {
    return {
      planetName: "earth",
      gravity: 9.8,
      img: new Image()
    }
  },
  computed: {
    planetsArr() {
      return this.planets.filter(planet => {
        return planet.name !== "Asteroid Belt" && planet.name !== "Sun" 
      })
    }
  },
  mounted() {
    this.frameTimerReference = this.initAnimation();
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

    handleSelectPlanet(name) {
      this.gravity = this.planets.find(planet => planet.name === name).gravity;
    },

    resetAnimation() {
      if(this.frameTimerReference) window.cancelAnimationFrame(this.frameTimerReference);
      if(this.logicTimerReference) window.clearInterval(this.logicTimerReference);

      this.initAnimation();
      this.logicTimerReference = setInterval(this.logic, 8);
    },

    initAnimation() {
      const c = document.getElementById("my-canvas");
      const contx = c.getContext('2d');

      this.canvas = c;
      this.ctx = contx;

      this.ball = {
        x: 400,
        y: 50,
        yVel: 0,
        xVel: 30,
        jumpForce: -100
      }

      this.scale = 35; // 1m = 35px

      this.canvas.width = 800;
      this.canvas.height = 400;

      this.img = new Image();
      this.img.onload = () => {
        console.log("the image is loaded")
        this.frameTimerReference = window.requestAnimationFrame(this.render);
        this.logicTimerReference = setInterval(this.logic, 8);
      };
      this.img.src = require("../assets/astronaut.png");
    },

    drawBackground() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = "rgb(155, 155, 155)";
      this.ctx.fillRect(0, 320, 800, 400);
      this.ctx.fill(); 
      this.ctx.closePath();
    },

    drawFrame() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.drawBackground();

      this.ctx.drawImage(this.img, this.ball.x, this.ball.y, this.scale*1.8, this.scale*2);
    },

    logic() {
      let y = this.ball.y;
      let x = this.ball.x;
      let yVel = this.ball.yVel
      let xVel = this.ball.xVel
      let yVelBuffer = yVel;

      yVel += (this.gravity * this.scale) / 125
      y += (this.ball.yVel / 125);
      x += (this.ball.xVel / 125);

      if(y >= 255) {
        yVel = this.ball.jumpForce;
        (x > 650 || x < 150) ? this.ball.xVel = - xVel : this.ball.xVel = xVel;
      }

      this.ball.y = y;
      this.ball.x = x;
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
#rocket-pic {
  position: absolute;
  top: 5%;
  left: 40%;
  height: 150px; 
}

#gravity-animation-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#select-gravity {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

#my-canvas {
  margin-bottom: 5%;
  position: relative;
  height: 400px;
  width: 800px;
  border: 2px solid rgb(113, 125, 141);
  border-radius: 2px;
}

#reset-button {
  padding: 0 5px;
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  border-radius: 2px;
}

#reset-button:hover {
  cursor: pointer;
  color: rgb(163, 255, 227);
  border-color: rgb(163, 255, 227);
}
</style>