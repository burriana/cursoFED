//PROTOTYPE:  buy(id)
//DESCRIPTION: Agregate the product with the id to the array at the end
function buy(id) {
  cart.push(products.find((ele) => ele.id === id));
}

//PROTOTYPE:  cartListOnes()
//DESCRIPTION: A partir del arrar -cart- crea el array -cartList- crea la propiedad cantidad para ir sumando los elemntos repetidos.
// Autor: Olegario Ballester . 18/03/2022
function cartListOnes() {
 // El Array cartList esta declarado en data;

  // ids es un array auxiliar para controlas los id's del carrito y ver si se repiten
  const ids = [];

  cart.forEach((producto) => {
    if (ids.includes(producto.id) === false) {
      ids.push(producto.id);
      producto.cantidad = 1;
      producto.total = producto.price * producto.cantidad;
      cartList.push(producto);
    } else {
      producto.cantidad += 1;
      producto.total = producto.price * producto.cantidad;
    }
  });
  console.table(cartList); //print
  return cartList;
}

//PROTOTYPE:   addTotalcart()
//DESCRIPTION:  Calculo del total del carrito

function addTotalCart() {

  const totalCart = cartList
    .reduce((suma, ele) => (suma += ele.total), 0)
    .toFixed(3);
  console.log(`El total de la compra es ${totalCart} €`); // print
  return totalCart;
}

//PROTOTYPE: cleanCart()
//DESCRIPTION: Clean de array cart. It will come to an empty array.
function cleanCart() {
  cart.length = 0;
  cartList.length = 0;
}

//DESCRIPTION: Remove de object with the id.
function removeBuy(id) {
 // let cartList = cartListOnes();
  const index = cartList.findIndex(ele=> ele.id === id);
  if (index !== -1){
    cartList.splice(index,1)
  }
  addTotalCart()
  console.table(cartList);
  return cartList
  
}

function decreaseQuantityByOne(id) {
  const producto = products.find((ele) => ele.id === id);
  //console.log(producto);
  if (producto.cantidad === 1) {
    removeBuy(id)
    // let index = cartList.indexOf(producto.id);
    // cartList.splice(index, 1);
  } else {
    producto.cantidad--;
    producto.total = producto.price * producto.cantidad;
  }
  addTotalCart()
  console.table(cartList);
  return cartList;
}

function increaseQuantityByOne(id) {
  const producto = products.find((ele) => ele.id === id);
  producto.cantidad++;
  producto["total"] = producto.price * producto.cantidad;
  addTotalCart()
  console.table(cartList);
  return cartList;
}
