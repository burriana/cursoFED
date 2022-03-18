//PROTOTYPE:  buy(id)
//DESCRIPTION: Agregate the product with the id to the array at the end
function buy(id) {
  cart.push(products.find((ele) => ele.id === id));
}

//PROTOTYPE:  cartListOnes()
//DESCRIPTION: A partir de un array con los productos de compra, crea otro array donde solo aparece una vez cada producto con la cantidad comprada. Calcula el total por procusto y el total del carrito.

function cartListOnes() {
  const cartList = [];

  // ids es un array auxiliar para controlas los id's del carrito y ver si se repiten
  const ids = [];

  cart.forEach((producto) => {
    if (ids.includes(producto.id) === false) {
      ids.push(producto.id);
      producto["cantidad"] = 1;
      producto["total"] = producto.price * producto.cantidad;
      cartList.push(producto);
    } else {
      producto.cantidad += 1;
      producto["total"] = producto.price * producto.cantidad;
    }
  });
  console.table(cartList);
  return cartList
}


//PROTOTYPE:   addTotalcart()
//DESCRIPTION:  Calculo del total del carrito

function addTotalCart() {
  const totalCart = cart
    .reduce((suma, linea) => (suma += linea.price), 0)
    .toFixed(3);
  console.log(`El total de la compra es ${totalCart} €`);
  return totalCart
}

//PROTOTYPE: cleanCart() 
//DESCRIPTION: Clean de array cart. It will come to an empty array.
function cleanCart() {
  cart.length = 0;
}


//DESCRIPTION: Remove de object with the id.
function removeBuy(id) {
 let objIndex = cartList.map(function(x){return x.id;}).indexOf(id)
 //if(objIndex === -1){
  console.log(objIndex);
  //cartList.splice(objIndex,1)
//}
  //return cartList.filter(({id}) => id !==id)
}

