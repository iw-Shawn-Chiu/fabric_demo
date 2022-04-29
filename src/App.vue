<template>
  <FabricDemo msg="Fabric Demo Page"/>
  <div>
    <canvas id="c"></canvas>
  </div>
  <div>
    <h2>Output</h2>
    <img :src="outImage" />
    <button type="button" @click="clickme">Click</button>
  </div>
</template>

<script>
import FabricDemo from './components/FabricDemo.vue'
import { fabric } from 'fabric'
import logo from './assets/logo.png'
import cat from './assets/cat.png'

export default {
  name: 'App',
  components: {
    FabricDemo
  },
  data: {
    canvas: null,
    outImage: ''
  },
  methods: {
    clickme: function() {
      this.outImage = this.canvas.toDataURL(format: 'png');
    }
  },
  mounted() {
    var canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(100,100,200)',
      backgroundImage: cat,
      selectionColor: 'blue',
      selectionLineWidth: 2
    });
    canvas.setDimensions({width: 800, height: 600});
    var text = new fabric.IText('Cat', {
      top: 50,
      left: 100
    });
    canvas.add(text);

    fabric.Image.fromURL(logo, (img) => {
      const oImg = img.set({
        left  : 10,
        top   : 10,
        width : 200,
        height: 200
      });
      canvas.add(oImg);
    });

    this.canvas = canvas;
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
