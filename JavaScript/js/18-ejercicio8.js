"use strict";
/*
Calculadora
- Pida dos numeros por pantalla
- Si metemos uno mal, que nos los vuelva a pedir.
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar
, restar, multiplicar y dividir  esas dos cifras

*/

var num1 = parseInt(prompt("Ingrese el primer numero", 0));
var num2 = parseInt(prompt("Ingrese el segundo numero", 0));

while (isNaN(num1) || isNaN(num2)) {
  num1 = parseInt(prompt("Ingrese el primer numero", 0));
  num2 = parseInt(prompt("Ingrese el segundo numero", 0));
}

var suma = 0;
var resta = 0;
var multipli = 0;
var division = 0;

function sumar(num1, num2) {
  suma = num1 + num2;
  return suma;
}

function restar(num1, num2) {
  resta = num1 - num2;
  return resta;
}

function multiplicar(num1, num2) {
  multipli = num1 * num2;
  return multipli;
}

function dividir(num1, num2) {
  if (num2 == 0) {
    alert("No se puede dividir un numero por 0");
    division = 0;
  } else {
    division = num1 / num2;
  }
  return division;
}

//Por el cuerpo de la pagina
document.write(
  "<h3>La suma de los dos numeros ingresados es : " +
    sumar(num1, num2) +
    "<h3/>" +
    "<br/>"
);

document.write(
  "<h3>La resta de los dos numeros ingresados es : " +
    restar(num1, num2) +
    "<h3/>"
);
document.write(
  "<h3>La multiplicacion de los dos numeros ingresados es : " +
    multiplicar(num1, num2) +
    "<h3/>"
);
document.write(
  "<h3>La division de los dos numeros ingresados es : " +
    dividir(num1, num2) +
    "<h3/>"
);

alert("La suma es : " + sumar(num1, num2));
alert("La resta es : " + restar(num1, num2));
alert("La multiplicacion es : " + multiplicar(num1, num2));
alert("La division es : " + dividir(num1, num2));

console.log("La suma es : " + sumar(num1, num2));
console.log("La resta es : " + restar(num1, num2));
console.log("La multiplicacion es : " + multiplicar(num1, num2));
console.log("La division es : " + dividir(num1, num2));
