<template>
  <div class="havefun">
    <h1 class="my-3" >Chuk Norrris API Jokes</h1>
    <div class="card" style="width: 18rem">
      <img src="https://picsum.photos/600" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Joke of the day</h5>
        <p class="card-text">
          {{ acudit }}
        </p>
        <button class="btn btn-primary" @click="newJoke">New Joke</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FunView",
  data() {
    return {
      post: null,
      acudit: "",
    };
  },
  methods: {
    newJoke() {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => (this.acudit = response.data.value));
    },
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

.havefun{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
h1{
  font-family:Roboto,sans-serif;
}
</style>





