const app = new Vue({
  el: "#vue-app",
  data: {
    data() {
      return {
        author: "Manz",
      };
    },
  },

  mounted(){
    console.log("El componente " + this.$options.el + " ha sido montado.");
    let divFondo = this.$refs.fondo;
    console.log(divFondo);
    divFondo.style.backgroundImage = 'url("http://picsum.photos/500")';
    divFondo.style.backgroundSize = 'contain';
    divFondo.style.backgroundRepeat = 'no-repeat';
    divFondo.style.backgroundPosition = 'center'
    divFondo.style.height = '500px';
    divFondo.style.width = '500px'

    let screen = document.body
    screen.style.backgroundImage = 'url("http://picsum.photos/900")';
    screen.style.backgroundSize = 'cover';
    screen.style.backgroundRepeat = 'no-repeat';
    screen.style.backgroundPosition = 'center'
    screen.style.height ='100vh';
    screen.style.display = 'grid';
    screen.style.placeContent ='center'
  },

  methods: {},
  computed: {},
});
