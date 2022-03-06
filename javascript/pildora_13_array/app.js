/*Funció que rebi dos nombres i retorni un array amb tots els nombres
compresos entre ells. El programa principal ha de mostrar aquest array per
consola.*/

function dosNumeros(n1,n2){
  const lista = []
  let min = Math.min(n1,n2);
  let max = Math.max(n1,n2)
  for(let i = min+1 ; i < max ; i++ ){
    lista.push(i)
  }
  return lista

}
console.log(dosNumeros(0,10))

/*Crea una funció que rebi un array de 5 noms com a paràmetre i retorni un nou
array amb el número de caràcters de cada nom.*/

function cincoPalabras(array){
  const lista2 = [];
  for( let i=0; i < array.length ; i++ ){
    lista2.push(array[i].length)
  }
  return lista2

}
let nombres=['Olegario','Eva','Antonio','Jose','Evaristo']
console.log(nombres,cincoPalabras(nombres))

