var app = new Vue({
  el: "#databinding",
  data: {
    name: "Olegario",
    currencyfrom: [
      { name: "USD", desc: "US Dollar" },
      { name: "EUR", desc: "Euro" },
      { name: "INR", desc: "Indian Rupee" },
      { name: "BHD", desc: "Bahraini Dinar" },
    ],
    currentfrom: "INR",
    currentto: "USD",
    cantidad: 0,
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
  },
});
