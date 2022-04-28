<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FabricDemo msg="Fabric Demo Page"/>
</template>

<script>
import FabricDemo from './components/FabricDemo.vue'

export default {
  name: 'App',
  components: {
    FabricDemo
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
</style>
