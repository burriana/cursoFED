<template>
  <header class="header">
    <div class="fondo-header">
      <p>Software</p>
      <img :src="img" alt="chip" width="60" />
      <p>Hardware</p>
    </div>
    <NavHeader></NavHeader>
  </header>
</template>

<script>
import NavHeader from "./NavHeader.vue";
import img from "../assets/img/logochip.jpg";
export default {
  components: {
    NavHeader,
  },
  data() {
    return {
      img,
    };
  },
};
</script>


<style>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url("../assets/img/electronics.jpg");
}
.fondo-header {
  /* background-image: url("../assets/img/electronics.jpg"); */
  height: 10vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 10vh;
  border-radius: 50%;
}
.fondo-header p {
  font-size: 4rem;
  color: white;
  padding: 0 1em;
}
</style>