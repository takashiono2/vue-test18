<template>
  <div id="app">
    <img alt="vue logo" src="./assets/logo.png">
    <HelloWorld mgs="Welcom ton Your Vue.js App"/>
    <p>こんにちは、Vue.js！</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>