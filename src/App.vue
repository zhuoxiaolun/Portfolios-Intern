<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hello World"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
   HelloWorld
  }
}
</script>

<style lang="scss">
@import '/src/assets/all_css';
</style>
