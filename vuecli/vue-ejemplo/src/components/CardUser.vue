<template>
  <div class="card-user">
    <img src="http://picsum.photos/100" alt="" width="100">
    <div class="card">
      <h3>{{ name }}</h3>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Olegario Ballester",
      email:"olegario.ballester.gmail.com"
    };
  },
};
</script>


<style>
.card-user{
  display:flex;
  flex-direction:column;
  align-items:startTime;
  /* border: 2px solid rgb(82, 82, 196); */
  border-radius: 10px;
  padding:1em;
  width: 50%;
  background-image:url("/src/assets/old-paper-texture-background.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  
}
.card{
  display:flex;
  flex-direction:column;
  align-items:end;
  margin-bottom:.5em;
 
}
img{
 border-radius: 10px;
 /* margin-bottom:.5em; */
 margin:1em;
 

}
p,h3{
  margin-top:0;
  margin-bottom:.5em
}
</style>