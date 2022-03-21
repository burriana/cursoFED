/*
a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al
buscador
b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al
buscador
c) El mateix que l'exercici 2, però ara fes servir una funció.
*/

const $inputTarget = document.querySelector('.busqueda')

$inputTarget.addEventListener('keydown',e =>{
  const $keyName = e.key;
  if ($keyName !== 'a'){
    alert(`Has tecleado la: ${$keyName}`);
  }
  if ($keyName  === 'a'){
    alert('Has tecleado la letra: a');
  }
});

//Fes que al clickar buscar, no envii el formulari

let $btnSubmit = document.getElementById('btn-submit');
// $btnSubmit = addEventListener('click',(e)=>{
//     e.preventDefault(); 
// })

let $formSubmit = document.querySelector('#formulario-buscar');

$formSubmit =  addEventListener('click',(e)=>{
  e.preventDefault(); 
})

  
