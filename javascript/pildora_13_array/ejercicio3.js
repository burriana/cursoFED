const carrito = [
  {
    nombre: "Monitor 20 Pulgadas",
    precio: 500,
  },
  {
    nombre: "Televisión 50 Pulgadas",
    precio: 700,
  },
  {
    nombre: "Tablet",
    precio: 300,
  },
  {
    nombre: "Audifonos",
    precio: 200,
  },
  {
    nombre: "Teclado",
    precio: 50,
  },
  {
    nombre: "Celular",
    precio: 500,
  },
  {
    nombre: "Bocinas",
    precio: 300,
  },
  {
    nombre: "Laptop",
    precio: 800,
  },
];

carrito.forEach((element) => {
  if (element.precio > 300) {
    console.log(element.nombre);
  }
});

let totalCarrito = 0;
carrito.forEach( element =>{
   totalCarrito += element.precio
});
console.log(`El total del carrito es ${totalCarrito} €`);
  

function mayorCuatocientos(value){
  return value > 400;
}

const precio400 = carrito.filter( element => element.precio > 400);
console.log(precio400);

const carritoCelular = carrito.filter( element => element.nombre =='Celular');
console.log(carritoCelular);

const exceptoLaptop = carrito.filter( element => element.nombre !=='Laptop');
console.log(exceptoLaptop );

