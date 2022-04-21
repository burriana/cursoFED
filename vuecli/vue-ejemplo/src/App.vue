<template>
  <!-- <img alt="Vue logo" src="http://picsum.photos/500"> 
  <img alt="Vue logo" src="./assets/logo.png">  -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HeaderTop/>
  <!-- <CardUser></CardUser> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CardUser from './components/CardUser.vue'
import HeaderTop from './components/HeaderTop.vue'

export default {
  name: 'App',
  components: {
    //  CardUser,
     HeaderTop
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
body{
margin:0;
padding:0;
	font-family: 'Work Sans', sans-serif;
}
</style>
