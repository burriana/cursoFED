/*Exercici 7: Eliminar elements, removeChild
a) Eliminem el primer node que troba ... en aquest cas la opció de menú Vender
b) Accedir a la class="navegacion" y eliminem la opció de menú Registro ́. Eliminem a
partir del pare.
*/

const node = document.links[0]
console.log(node);
if( node.parentNode){
  node.parentNode.removeChild(node)
}

let p = document.querySelector('.navegacion')
let r = document.links[0]
let throwawayNode = p.removeChild(r)
