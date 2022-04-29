<template>
  <FabricDemo msg="Fabric Demo Page"/>
  <div>
    <canvas id="c" width="600" height="400"></canvas>
  </div>
</template>

<script>
import FabricDemo from './components/FabricDemo.vue'
import { fabric } from 'fabric'
import logo from './assets/logo.png'

export default {
  name: 'App',
  components: {
    FabricDemo
  },
  mounted() {
    var canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(100,100,200)',
      selectionColor: 'blue',
      selectionLineWidth: 2
    });
    var rect = new fabric.Rect({
      top: 50,
      left: 100,
      width: 100,
      height: 70,
      fill: 'red'
    });
    canvas.add(rect);

    fabric.Image.fromURL(logo, (img) => {
      const oImg = img.set({
        left  : 10,
        top   : 10,
        width : 200,
        height: 200
      });
      canvas.add(oImg);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
canvas {
  border:  1px dashed black;
}
</style>
