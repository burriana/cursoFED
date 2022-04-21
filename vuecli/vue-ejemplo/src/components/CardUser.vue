<template>
  <div class="card-user">
    <img :src="img" alt="foto" width="100">
    <!-- <img src="../assets/img/rana.webp" alt="foto" width="80"> -->
    <div class="card">
      <h3>{{ name }}</h3>
      <p>{{ email }}</p>
      <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
jf
export default {
  data() {
    return {
      name: "Olegario Ballester",
      email:"olegario.ballester@gmail.com",
      phone:'689 515 741',
      img
    };
  },
};
</script>


<style>
.card-user{
  display:flex;
  flex-direction:column;
  /* align-items:start; */
  /* border: 2px solid rgb(82, 82, 196); */
  border-radius: 10px;
  padding:1em;
  width: 20%;
  background-image:url("/src/assets/img/old-paper-texture-background.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  margin:0;
  padding:0;
  
}
.card{
  display:flex;
  flex-direction:column;
  align-items:end;
  margin-bottom:.5em;
  padding-top:.2em;
}

img{
 border-radius: 10px;
 margin-bottom:1em;
 margin-left:.5em;
 margin-top:.5em
 
 

}
p,h3{
  margin-top:0;
  margin-bottom:.5em;
  padding-right:0.5em;
  line-height: 0.8;
}
</style>