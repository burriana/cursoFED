<template>
  <div>
    <h1>Todos los chistes que contienen la palabra...</h1>
    <!-- <input type="text" v-model="wordSeach" />
    <p>{{ wordSearch }}</p> -->
    <section v-if="errored">
      <p>
        {{ msg }}
      </p>
    </section>
    <section v-else>
      <ul>
        <li v-for="acudit in acudits" :key="acudit">{{ acudit.value }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JokesSearch",
  data() {
    return {
      post: null,
      acudits: [],
      errored: false,
      msgError: " ",
      wordSearch: "",
    };
  },
 
  mounted() {
    console.log("entra");
    let url =
       "https://api.chucknorris.io/jokes/search?query=cow";
    axios
      .get(url)
      .then((response) => (this.acudits = response.data.result))
      .catch((error) => {
        this.errored = true;
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("El servidor respon amb missatge d'error:");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          this.msgError = "error 200";
        } else if (error.request) {
          // The request was made but no response was received
          console.log("El servidor NO respon");
          console.log(error.request);
          this.msgError = "Hay un error en la request";
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("hi ha algun problema amb la request");
          console.log("Error", error.message);
        }
        // console.log("Hi ha hagut un error en la configuració");
        // console.log(error.config);
      });
  },
};
</script>




<style>
h1 {
  padding: 1.3em 0;
}
li {
  padding-bottom: 0.3em;
  list-style: none;
  border-bottom: 1px solid #999;
}
</style>