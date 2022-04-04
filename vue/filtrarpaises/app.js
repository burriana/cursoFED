const app = new Vue({
  el: "#app",
  data:{
    country :'',
    countries: ['Alemania', 'Albania','Francia','Italia','Ingraterra','Irlanda','USA','España']
  },
  computed:{
    countriesFiltered: function(){
      if(this.country=== ''){
        return this.countries
      }else{
        return this.countries.filter(element =>
          element.toUpperCase().includes(this.country.toUpperCase()))
      }
    }
  }

})