<template>
  <!-- <img alt="Vue logo" src="http://picsum.photos/500">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <CardUser></CardUser>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CardUser from './components/CardUser.vue'

export default {
  name: 'App',
  components: {
     CardUser
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
  display:flex;
  justify-content: center;

}
</style>
