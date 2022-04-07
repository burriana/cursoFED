const app = new Vue({
  el: '#my-app',
  data:{
  name: 'Hola classe, això és un exemple de COMPONENT',
  count: 0,
  firstname: 'Olegario',
  lastname:'Ballester'
  },
  methods: {
  onAdd() {
  this.count += 1
  }
  }
  })