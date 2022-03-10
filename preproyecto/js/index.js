
//PROTOTYPE:  buy(id), id is a Number
//DESCRIPTION: Agregate the product with the id to the array at the end
function buy(id) {
  cart.push(products.find((producto) => producto.id === id));
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
}



// PROTOTYPE: SubTotal(array) . Array is an Array
// DESCRIPTION: Compute the adition by type.
function subTotal(){ 
  console.table(subtotal);
  for ( key in subtotal){
    //console.log(key);
    console.log(key.value);
    cart.forEach(element => {
       if( element.type === key){
         console.log(element.type,key,element.price);
       key.value += element.price   /// No funciona
       }
    })
    console.log(key.value);
  }
  //return subtotal
  console.table(subtotal);
  };





// function subTotal2() {
//   const grocery = cart.filter((producto) => producto.type === "grocery");
//   const beauty = cart.filter((producto) => producto.type === "beauty");
//   const clothes = cart.filter((producto) => producto.type === "clothes");

//   subtotal.grocery.value = grocery
//     .map((item) => item.price)
//     .reduce((pev, curr) => pev + curr, 0);

//   subtotal.beauty.value = beauty
//     .map((item) => item.price)
//     .reduce((pev, curr) => pev + curr, 0);

//   subtotal.clothes.value = clothes
//     .map((item) => item.price)
//     .reduce((pev, curr) => pev + curr, 0);

 
//   console.log(subtotal);
// }


// function subTotal(){
//  for (let i =0; i< cart.length;i++){
//   if (cart[i].type == 'grocery'){
//     subtotal.grocery.value += cart[i].price
//   }
//   if (cart[i].type == 'beauty'){
//     subtotal.beauty.value += cart[i].price
//   }
//   if (cart[i].type == 'clothes'){
//     subtotal.clothes.value += cart[i].price
//   }
//  }
//  console.log(subtotal);
// }

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