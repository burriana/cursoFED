<template>
  <footer>
    <span class="logo-vue"><a href="https://v2.vuejs.org/"><img src="../assets/img/vue.svg" /></a></span>
    <p class="legal"> <a href="/">&copy; Olegario Ballester</a></p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
}

footer .legal {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1rem 1em;
  margin:.5em 0;
}  
footer .logo-vue {
  padding: 1rem 1em;
   margin:.7em 0;
}
.legal a{
  text-decoration:none;
  color:white;
}
</style>