Vue.component("Escena", {
  template: `
  <ul class="list-group ">
    <li class="list-group-item border-1 rounded-pill p-1 m-2 text-center"  
    v-for=" (frase,i) in frasesProp"
    :key='i'
    :class='{active: i ==selectPhrase}'
    >
     {{frase.name}}
    <li/>
  </ul>
   
  `,
  
  data() {
    return {};
  },
  methods: {

  },
  props: ['frasesProp','selectPhrase'],

  beforeMount(){
    let screen = document.querySelector('body');
    screen.style.background = "url('img/" + (this.selectPhrase + 1 )  + ".jpg ') "
    screen.style.backgroundSize = 'cover'

  },
 
  beforeUpdate(){
    // console.log(this.selectPhrase)
    let screen = document.querySelector('body');
    screen.style.backgroundImage = "url( 'img/" + (this.selectPhrase + 1 ) + ".jpg ') "
    screen.style.backgroundSize = "cover"
    // screen.style.backgroundRepeat = "nopeat"
    screen.style.backgroundHeight = "100%"
   }
});
