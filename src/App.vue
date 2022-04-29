<template>
  <FabricDemo msg="Fabric Demo Page"/>
  <div>
    <button type="button" @click="addText">Add Text</button>
  </div>
  <div>
    <canvas id="c"></canvas>
  </div>
  <div>
    <h2>Output</h2>
    <button id="click" type="button" @click="clickme">Click</button>
    <img :src="outImage" />
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
  data: () => {
    return {
      canvas: null,
      outImage: ''
    }
  },
  methods: {
    clickme: function() {
      this.outImage = this.canvas.toDataURL({format: 'png'});
    },
    addText: function() {
      let text = new fabric.IText('New Text1', {
        top: 50,
        left: 100,
        editable: true
      });
      this.canvas.add(text).setActiveObject(text);
    }
  },
  mounted() {
    let canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(100,100,200)',
      backgroundImage: cat,
      selectionColor: 'blue',
      selectionLineWidth: 2
    });
    canvas.setDimensions({width: 800, height: 600});
    let text = new fabric.IText('Cat', {
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
#click {
  display: block;
  margin: 0 auto;
}
</style>
