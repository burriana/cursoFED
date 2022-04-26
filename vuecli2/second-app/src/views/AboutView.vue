<template>
  <div>
    <div class="home">
      <h1>The Chuck Norris API: Joke of the day</h1>
      <div class="card-container">
        <div class="card">
          <p @click="newJoke()">{{ acudit }}</p>
        </div>
        <button @click="newJoke()">New Joke</button>
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
h1 {
  padding-top: 1em;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

.card-container {
  display: flex;
  flex-direction: column;

  height: 60vh;
  align-items: center;
  justify-content: center;
}
.card {
  width: 50%;
  border: none;
  align-items: middle;
  padding-bottom: 1em;
}
p{
  font-size:1.5rem;
  background-color:#999;
  color:white;
  padding: .5em 1.5em;
  border-radius: 10px;
}

button {
  border: none;
  padding: 0.5em 1.5em;
  background-color: #999;
  color: white;
}
button:hover, p:hover {
  background-color: #333;
}

</style>

