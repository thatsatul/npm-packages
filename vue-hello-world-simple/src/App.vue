<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <aa-hello-world />
  </div>
</template>

<script>
import AaHelloWorld from './components/AaHelloWorld.vue'

export default {
  name: 'App',
  components: {
    AaHelloWorld
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
