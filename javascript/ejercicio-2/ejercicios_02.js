/* 1. Crea dues variable numèriques i assigna dos números, Suma’ls i mostra el valor per
consola.*/

//let a = 33;
//let b = 100;
//let suma = a + b;
console.log(" La suma de " + a + " y " + b + " es igual a " + suma)


/* 2. Utilitzant tant les cometes simples com les dobles per a inicialitzar la variable, crea
un programa que mostri en una finestra:*/
let im=" I'\m = I am"
let ya="You\'re = You are"
windoww.alert(im +"\n" + ya);


/*3. Implementa un programa que comprovi que les dades introduïdes són números.*/

//let numero = prompt("Introduce un numero");
//alert(!( isNaN(numero)));



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
document.getElementById("answerComparar").innerHTML = text;
}



/*5. Fes un programa que demani un número a l’usuari i calculi si és parell o senar.*/

function isEven() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("num").value;
  // If x is Not a Number or less than one or greater than 10
  let text ;
  if(!(isNaN(x))){
    if(x%2===0){
      text = "Número par"
    }else{
      text = "Número impar"
    }

  }else{
    text = "Error, introduce un numero"
  }
    
  document.getElementById("answerPar").innerHTML = text;
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

let marca = "total" + (16 + 4);
console.log(marca)

function factorial() {
  let n = document.getElementById("nFactorial").value;
  let inicial = n;
  let fcat;

  if (n==0 || n==1){
    fact = 1;
  }
  
  fact = 1;
  while ( n > 1){
    fact = n * fact;
    n--;
  }
  let text = inicial + "!= " + fact
document.getElementById("answerFactorial").innerHTML = text;
}