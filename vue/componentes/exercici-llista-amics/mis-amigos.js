Vue.component('mis-amigos',{
  template:`
  <span>
    <h2>{{name}}</h2>
     <button @click = 'showdetails'>Show Details</button>
    <ul v-show= mostrar>
      <li><strong>Phone:</strong> {{phone}}</li>
      <li><strong>Email:</strong> {{email}}</li>
    </ul>
  </span>  
  `,
  data(){
    return {
      mostrar: false,
    }
  },
  methods: {
    showdetails: function (){
      this.mostrar = !this.mostrar;
    }
  },
  props:['name','phone','email']
})