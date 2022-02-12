/* 1. Crea dues variable numèriques i assigna dos números, Suma’ls i mostra el valor per
consola.*/

let a = 33;
let b = 100;
let suma = a + b;
console.log(" La suma de " + a + " y " + b + " es igual a " + suma)


/* 2. Utilitzant tant les cometes simples com les dobles per a inicialitzar la variable, crea
un programa que mostri en una finestra:
I’m = I am
You’re = You are */

console.log("I'm = I am ");
console.log("Yuo're = You are");

/*3. Implementa un programa que comprovi que les dades introduïdes són números.*/

let numero = 0;
let resultado;
resultado = !(isNaN(numero));
console.log(resultado)

/*4. Fes un programa que demani dos números a l’usuari i informi per pantalla de quin és
el menor i el major, o si són iguals.*/



function comparar(){
  let x = document.getElementById("num1").value;
console.log(x)
let y = document.getElementById("num2").value;
let text;


if (!(isNaN(x)) && !(isNaN(y))){
  if  (x < y ){
    text = x + " es menor que " + y;
    }else if  (x > y ){
    text = x + " es mayor que " + y;
    }else{
    text = x + " =  " + y ;
    }

}else{
  text =" Por favor, introduce dos numeros";
}
document.getElementById("answer").innerHTML = text;
}



/*5. Fes un programa que demani un número a l’usuari i calculi si és parell o senar.*/

function isEven() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("num").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if(!(isNaN(x))){
    if(x%2===0){
      text = "Número par"
    }else{
      text = "Número impar"
    }

  }else{
    text = "Error, introduce un numero"
  }
    
  document.getElementById("answer").innerHTML = text;
}

/*6. Fes un programa que demani a l’usuari l’altura i el pes i mostri per pantalla el seu
índex de massa corporal (IMC)*/
function IMC(){
  let x = document.getElementById("peso").value;
  let y = document.getElementById("altura").value;
  let text =x / ((y/100)**2);

  document.getElementById("imc").innerHTML=text;
}
/* 7. Considerant la següent assignació: let marca="total"+ 16 +4
obté per consola total20.*/

let marca = "total" + 16 + 4;
console.log(marca);