var app = new Vue({
  el: "#databinding",
  data: {
    name: "Olegario",
    currencyfrom: [
      { name: "USD", desc: "US Dollar" ,ratio:1},
      { name: "EUR", desc: "Euro",ratio:0.84 },
      { name: "INR", desc: "Indian Rupee",ratio:63.88 },
      { name: "BHD", desc: "Bahraini Dinar",ratio:0.38 },
    ],
    currentfrom: { name: "INR", desc: "Indian Rupee",ratio:63.88 },
    currentto: { name: "USD", desc: "US Dollar" ,ratio:1},
    cantidad: 1,
    fromratio:1,
    toratio:1,
  },
  computed: {
    cambio: function () {
      if (this.currentfrom == "INR" && this.currentto == "INR") {
        return this.cantidad * 1;
      };
      if (this.currentfrom == "INR" && this.currentto == "USD") {
        return this.cantidad * 0.016;
      };
      if (this.currentfrom == "INR" && this.currentto == "EUR") {
        return this.cantidad * 0.013;
      };
      if (this.currentfrom == "INR" && this.currentto == "BHD") {
        return this.cantidad * 0.059;
      };

      if (this.currentfrom == "USD" && this.currentto == "INR") {
        return this.cantidad * 63.88;
      };
      if (this.currentfrom == "USD" && this.currentto == "USD") {
        return this.cantidad * 1;
      };
      if (this.currentfrom == "USD" && this.currentto == "EUR") {
        return this.cantidad * 0.84;
      };
      if (this.currentfrom == "USD" && this.currentto == "BHD") {
        return this.cantidad * 0.38;
      };

      if (this.currentfrom == "EUR" && this.currentto == "INR") {
        return this.cantidad * 76.22;
      };
      if (this.currentfrom == "EUR" && this.currentto == "USD") {
        return this.cantidad * 1.19;
      };
      if (this.currentfrom == "EUR" && this.currentto == "EUR") {
        return this.cantidad * 1;
      };
      if (this.currentfrom == "EUR" && this.currentto == "BHD") {
        return this.cantidad * 0.45;
      };

      if (this.currentfrom == "BHD" && this.currentto == "INR") {
        return this.cantidad * 169.44;
      };
      if (this.currentfrom == "BHD" && this.currentto == "USD") {
        return this.cantidad * 2.65;
      };
      if (this.currentfrom == "BHD" && this.currentto == "EUR") {
        return this.cantidad * 2.22;
      };
      if (this.currentfrom == "BHD" && this.currentto == "BHD") {
        return this.cantidad * 1;
      };
    },
    change: function(){
      
      if(NaN){
        return 0
      }else{
        let valor = this.cantidad * this.currentto.ratio /  this.currentfrom.ratio
        return valor.toFixed(3)
      }
  }}
});
