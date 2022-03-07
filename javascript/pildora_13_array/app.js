/*Funció que rebi dos nombres i retorni un array amb tots els nombres
compresos entre ells. El programa principal ha de mostrar aquest array per
consola.*/

function dosNumeros(n1, n2) {
  // Crear un array vacío llamado lista
  const lista = [];

  // Determinar el menor y el mayor
  const min = Math.min(n1, n2);
  const max = Math.max(n1, n2);
  // recorrer los numeros entre el menor+1 y el mayor.
  for (let i = min + 1; i < max; i++) {
    // Agregar un numero al final del array lista
    lista.push(i);
  }
  // Devolver el resultado
  return lista;
}
console.log(dosNumeros(45, 23));

/*Crea una funció que rebi un array de 5 noms com a paràmetre i retorni un nou
array amb el número de caràcters de cada nom.*/

function cincoPalabras(array) {
  const nCharWord = [];
  for (let i = 0; i < array.length; i++) {
    nCharWord.push(array[i].length);
  }
  return nCharWord;
}
let nombres = ["Olegario", "Eva", "Antonio", "Jose", "Evaristo"];
console.log(nombres, cincoPalabras(nombres));

function words(array){
  let nCharWord = [];
  array.forEach(element => { 
    nCharWord.push(element.length);
    console.log(element);
  });
  return nCharWord;
}
console.log(words(nombres));

function lenWords(array) {
  let nCharWord = nombres.map((x) => x.length);
  return nCharWord ;
}

console.log(lenWords(nombres));
