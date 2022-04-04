var app = new Vue({
  el:"#databinding",
  data:{
    name:'Olegario',
    currencyfrom : [
      {name:"USD", desc:"US Dollar"},
      {name:"EUR", desc:"Euro"},
      {name:"INR", desc:"Indian Rupee"},
      {name:"BHD", desc:"Bahraini Dinar"}
      ],
      currentfrom:'INR',
      currentto:'USD',
      cantidad : 0
  },
  computed:{
    
  }
})