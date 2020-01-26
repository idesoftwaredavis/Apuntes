'use strict'

// Arrays, arreglos, Matrices

//Basics
var nombre = "Davis Berrios";
var nombres =['Victor','Matias','Ernesto','Davis'];
var lenguajes = new Array("Php",'JS','Go','JavaScript');


console.log(typeof lenguajes);
console.log(typeof nombres);

//
/*
console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if(elemento >= nombres.length){
  alert("Introduce el numero correcto menor que " + nombres.length);
}else {
  alert("El usuario seleccionado es : "+ nombres[elemento]);
}
*/

document.write("<h1> lenguajes de programacion del 2018</h1>");

for (var i = 0;i<= lenguajes.length;i++){
  document.write("<li>" + lenguajes[i] + "</li>");
}
