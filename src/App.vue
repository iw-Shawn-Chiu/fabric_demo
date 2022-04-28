<template>
  <FabricDemo msg="Fabric Demo Page"/>
  <div>
    <canvas id="c" width="300" height="200"></canvas>
  </div>
</template>

<script>
import FabricDemo from './components/FabricDemo.vue'
import fabric from 'fabric'

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
