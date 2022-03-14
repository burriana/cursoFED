//PROTOTYPE:  buy(id)
//DESCRIPTION: Agregate the product with the id to the array at the end
function buy(id) {
  cart.push(products.find((ele) => ele.id === id));
}

//PROTOTYPE: showArrayAsTable(array), array is an Array
//DESCRIPTION: Show in the console de array as a table.
function showArrayAsTable(array) {
  console.table(array);
}

//PROTOTYPE: cleanArray(array) array is an Array
//DESCRIPTION: Clean de array. It will come to an empty array.
function cleanArray(array) {
  array.length = 0;
 // subTotal()
}

// PROTOTYPE: Void subTotal().
// DESCRIPTION: Compute the adition by type.

function subTotal() {
  for (key in subtotal) {
    cart.forEach((element) => {
      if (element.type === key) {
        subtotal[key].value += element.price;
      }
    });
  }
  return subtotal;
  //console.table(subtotal)
}

// PROTOTYPE: Void calculateTotal().
// DESCRIPTION: Compute the adition of the cart.
function calculateTotal() {
  let total = 0;
  for (key in subtotal) {
    total += subtotal[key].value;
    console.log(`Subtotal de ${key} : ${subtotal[key].value}`);
  }
  // return total;
  console.log(`--- Total de la compra por Categoria: ${total.toFixed(3)}€---`);
}

function computeTotal(array) {
  let total = 0;
  array.forEach((ele) => {
    console.log(`Valor de ${ele.name} es: ${ele.price}`);
    total += ele.price;
  });
  console.log(`--- Total de la compra por Producto: ${total.toFixed(3)}€ ---`);
}



//reto
function crearObject(array) {
  const newArray = [];
  const categorias = [];
  let newObject = {}
  class Categoria {
    constructor(tipo) {
      this.tipo = tipo;
      this.value = 0,
      this.descuento =0
      }
  }
  
  
  array.forEach((ele) => {
    
    if (categorias.includes(ele.type) === false) {
      categorias.push(ele.type);
      newArray.push(new Categoria(ele.type))
    }
    newObject = Object.assign(newObject,newArray)
  })

  console.log(categorias);
  console.log(newArray);
  console.log(newObject)

};
  //console.log(categorias);s
  

// PROTOTYPE: Void SubTotal()
// DESCRIPTION: Compute the adition by type.
// function subTotal2(){
//   const keysSub = Object.keys(subtotal) // Creamos un array con los type de subtotal
//   let cartSub = [] , sum= []
//   //console.log(keysSub);

//   keysSub.forEach(ele => {
//     cartSub[ele] = cart.filter( pro => pro.type === ele)

//   })
//   //console.log(cartSub);
//   keysSub.forEach( ele  => {
//     sum[ele] = sumToKeys(cartSub[ele], 'price')
//   })

//   keysSub.forEach(ele => subtotal[ele].value = sum[ele])
//   console.log(subtotal);
// }

// PROTOTYPE: Array sumToKeys(Array array, String key)
// DESCRIPTION: Compute the adition of the key of the array.
// function sumToKeys(array,key){
//   let total = 0
//   for (let i = 0; i< array.length;i++){
//     total +=array[i][key]
//   }
//   return total
// }
