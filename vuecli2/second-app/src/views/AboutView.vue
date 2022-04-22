<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <div class="about">
      <h1>Aqui farem proves amb les APIsss</h1>
      <div>
        <b-card
          title="Chiste del día"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            {{ acudit }}
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
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
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => (this.acudit = response.data.value));
  },
};
</script>

