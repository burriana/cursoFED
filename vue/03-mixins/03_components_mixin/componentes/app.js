const app = new Vue({
  el: "#app",
  data: {
    courses: [
      {
        id: 1,
        title: "Curso introductorio JavaScript",
        subtitle: "Aprende lo básico en JS",
        description:
          "En este curso explicaremos de la mano de los mejores profesores JS los principios básicos",
        type: "course-js",
        price: 150,
      },
      {
        id: 2,
        title: "Curso avanzado JavaScript",
        subtitle: "Aprende lo avanzado en JS",
        description:
          "En este curso explicaremos de la mano de los mejores profesores JS los principios avanzados",
        type: "course-js",
        price: 195,
      },
      {
        id: 3,
        title: "Curso introductorio Cascading Style Sheets",
        subtitle: "Aprende lo básico en CSS",
        description:
          "En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos",
        type: "course-css",
        price: 150,
      },
      {
        id: 4,
        title: "Curso avanzado Cascading Style Sheets",
        subtitle: "Aprende lo avanzado en CSS",
        description:
          "En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos",
        type: "course-css",
        price: 195,
      },
      {
        id: 5,
        title: "Curso Introductorio de Vue",
        subtitle: "Aprendiendo Vue en 20 inutos",
        description:
          "En este curso explicaremos de la mano de los mejores profesores de Vue los principios básicos",
        type: "course-vue",
        price: 150,
        descount:'20%'
      },
    ],
    cart: [],
  },
  methods: {
    addToCart: function (course) {
      this.cart.push(course);
    },
  },
});
