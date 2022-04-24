<template>
<div class="todo">
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui, incidunt beatae consectetur maxime voluptas accusantium libero enim corrupti cupiditate nostru.</p>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    // HelloWorld

  },
}
</script>

<style scoped>
.todo{
height:100vh;
/* background-image: url('../assets/img/montserrat__1.jpg'); */
background-image: url('https://picsum.photos/1280/720');
background-repeat: no-repeat;
background-size: cover;
display:flex;
align-items: center;

}
.home{
  width: 40%;
  margin:0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  color:white;
}

</style>
