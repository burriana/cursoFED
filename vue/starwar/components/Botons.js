Vue.component('Botons',{
  template:`
    <div class="text-center p-3 m-3">
      <button  v-if=" selectPhrase > 0 "type="button" @click="prev()" class= "btn btn-primary p-2 m-1"> Anterior </button>
      <button  v-if=" selectPhrase !=  num-1 " type="button"  @click="next()" class= "btn btn-primary p-2 m-1"> Siguiente </button>
    </div>
  `,
  data(){
    return {
      currentPhrase:'',
      
    }
  },
  methods: {
    next(){
      this.currentPhrase++
      this.$emit('currentSentence',this.currentPhrase);
    },
    prev(){
      this.currentPhrase--
      this.$emit('currentSentence',this.currentPhrase); 
    },  
  },
  props:['selectPhrase','num']
})