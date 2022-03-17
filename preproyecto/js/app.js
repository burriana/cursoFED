function buy(id) {
  // Buscamos el elemneto con el id a comprar
  const producto = products.find((ele) => ele.id === id);

  /* Vemos si ya ha sido comprado
  Si es la primera vez lo añadimos al carrito, creamos cantidda y total,
  si ya ha sido comprado -> incrementamos la cantidad en 1.
  */
  if (ids.includes(producto.id) === false) {
    ids.push(producto.id);
    producto["cantidad"] = 1;
    cart.push(producto);
    producto["total"] = producto.price * producto.cantidad;
  } else {
    producto.cantidad += 1;
    producto["total"] = producto.price * producto.cantidad;
  }

  //Mostrar Carrito y hacer la suma total

  show();
  //addTotalCart();
}

function removeBuy(id) {
  cart.forEach((element) => {
    if (element.id === id) {
      let index = cart.indexOf(element);
      cart.splice(index, 1);
      //console.table(cart);
      show();
      // addTotalCart();
    }
  });
}

function decreaseQuantityByOne(id) {
  const producto = products.find((ele) => ele.id === id);
  if (producto.cantidad === 1) {
    //removeBuy(id)
    let index = cart.indexOf(producto.id);
    cart.splice(index, 1);
  } else {
    producto.cantidad--;
    producto["total"] = producto.price * producto.cantidad;
  }
  show();
}

function increaseQuantityByOne(id) {
  const producto = products.find((ele) => ele.id === id);
  producto.cantidad++;
  producto["total"] = producto.price * producto.cantidad;
  show();
}
// Muestra el carrito y su suma
function show() {
  console.table(cart);
  const totalCarrito = cart
    .reduce((suma, linea) => (suma += linea.total), 0)
    .toFixed(3);
  console.log(`El total de la compra es ${totalCarrito} €`);
}

function addTotalCart() {
  const totalCarrito = cart
    .reduce((suma, linea) => (suma += linea.total), 0)
    .toFixed(3);
  //console.log(`El total de la compra es ${totalCarrito} €`);
}
