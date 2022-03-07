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
    precio: 0
  },
];


// a) Mostrat tots els productes del carrito.
 console.log(carrito);

// b) Mostrar els productes de més de 300€.

carrito.forEach((element) => {
  if (element.precio > 300) {
    console.log(element.nombre);
  }
});

// c) Mostrar el total a pagar del carrito. (hem de sumar tots els preus.)
let totalCarrito = 0;
carrito.forEach( element =>{
   totalCarrito += element.precio
});
console.log(`El total del carrito es: ${totalCarrito} €`);

let initialValue = 1
let sum = carrito.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.precio
}, initialValue)

console.log(sum)

let resultado = carrito.reduce((total,producto) => total + producto.precio, 2)
console.log(resultado);

  
// d) Obtenir nous arrays, tenint en compte les següents condicions:
// a. Nuevo Array con Productos con precio > 400

const precio400 = carrito.filter( element => element.precio > 400);
console.log(precio400);

// b. Nuevo Carrito con Productos con el nombre ‘Celular'

const carritoCelular = carrito.filter( element => element.nombre ==='Celular');
console.log(carritoCelular);

// c. Nuevo Carrito con todos los excepto ‘Laptop

const exceptoLaptop = carrito.filter( element => element.nombre !=='Laptop');
console.log(exceptoLaptop );

// e) Comprova que en el carrito no hi hagi algun preu = 0

const resulta = carrito.every(producto => producto.precio === 0);
console.log(resulta)