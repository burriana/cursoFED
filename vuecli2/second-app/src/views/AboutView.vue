<template>
  <div>
    <div class="about">
      <h1 class="my-5">The Chuck Norris API</h1>
      <div>
        <b-card
          title="Joke of the day"
          
          img-src="../assets/img/norris.jpg"
          img-alt="Chuck Norris"
          img-top
          tag="article"
          style="max-width: 20rem;
          background-color:transparent;
          border:none;
          font-size:1.2rem;
          color:white;
          font-weight:bold;
          "
          class="mb-2"
          
        >
          <b-card-text>
            {{ acudit }}
          </b-card-text>

          <b-button href="#" variant="dark" @click="newJoke()">New Joke</b-button>
        </b-card>
      </div>  
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutView",
  data() {
    return {
      post: null,
      acudit: "",
    };
  },
  methods:{
    newJoke(){
      axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => (this.acudit = response.data.value));
    }
  },
  
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => (this.acudit = response.data.value));
  },
};
</script>
<style scoped>
.about{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-image: url('../assets/img/poblado.webp');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

