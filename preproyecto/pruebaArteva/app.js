const addCarrito = (e) => {
  if (e.target.classList.contains("cardAdd")) {
    setCarrito(e.target.getAttribute("data-id"));
  }
  e.stopPropagation();
};

function setCarrito(e) {
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
   //console.table(cartList); //print
   return cartList;
 }