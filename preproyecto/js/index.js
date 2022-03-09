// Buscar producto por id y agregarlo al cart.
function buy(id) {
  cart.push(products.find((producto) => producto.id === id));
}

//
function showCartList(cart) {
  console.table(cart);
}

// Vacia el carrito
function cleanCart() {
  cart.length = 0;
}

// Calcular los subtotales por tipo
function subTotal() {
  const grocery = cart.filter((producto) => producto.type === "grocery");
  const beauty = cart.filter((producto) => producto.type === "beauty");
  const clothes = cart.filter((producto) => producto.type === "clothes");

  subtotal.grocery.value = grocery
    .map((item) => item.price)
    .reduce((pev, curr) => pev + curr, 0);

  subtotal.beauty.value = beauty
    .map((item) => item.price)
    .reduce((pev, curr) => pev + curr, 0);

  subtotal.clothes.value = clothes
    .map((item) => item.price)
    .reduce((pev, curr) => pev + curr, 0);

 
  console.log(subtotal);
}


function semiSuma(){
 for (let i =0; i< cart.length;i++){
  if (cart[i].type == 'grocery'){
    subtotal.grocery.value += cart[i].price
  }
  if (cart[i].type == 'beauty'){
    subtotal.beauty.value += cart[i].price
  }
  if (cart[i].type == 'clothes'){
    subtotal.clothes.value += cart[i].price
  }
 }
 console.log(subtotal);
}
