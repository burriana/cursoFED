Vue.component("my-button", {
  //template: "#boto",
  template: `
  <div>
  <button @click="onAdd2">{{ count }} clicks boto component VUE</button><br>
  <br/>
  </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onAdd2() {
      this.count += 1;
    },
  },
});


