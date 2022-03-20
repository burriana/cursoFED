/*
a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al
buscador
b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al
buscador
c) El mateix que l'exercici 2, però ara fes servir una funció.
*/

const inputTarget = document.querySelector('.busqueda')

inputTarget.addEventListener('keydown',event =>{
  const keyName = event.key;
  if (keyName!== 'a'){
    //alert(`Has teccleado la: ${keyName}`);
    inputTarget.textContent += keyName
  }
  if (keyName === 'a'){
    alert('Has tecleado a la letra: a');
    inputTarget.textContent +=keyName
  }
});
console.log(inputTarget.textContent);

// Fes que al clickar buscar, no envii el formulari

// const btnSubmit = document.getElementById(btn-submit);
// btnSubmit = addEventListener('click',function(e){
//   if (inputTarget === ''){
//     e.preventDefault();
//   }
 
// })


  
