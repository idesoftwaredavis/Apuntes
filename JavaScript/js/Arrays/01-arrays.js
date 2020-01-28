'use strict'

// Arrays, arreglos, Matrices, Busquedas, Callbacks, Funcion con flecha, some.

// Basics
var nombre = "Davis Berrios";
var nombres =['Victor','Matias','Ernesto','Davis'];
var lenguajes = new Array("Php",'JS','Go','JavaScript');


console.log(typeof lenguajes);
console.log(typeof nombres);

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

for (var i = 0;i< lenguajes.length;i++){
  document.write("<li>" + lenguajes[i] + "</li>");
}


// forEach
lenguajes.forEach((elemento, index, data) =>{
  document.write("<li>"+ index +elemento + data[5] + "</li>");
});


// PARA RECORRER UN Array
for(let lenguaje in lenguajes){
  document.write("<li>"+ "erneesto" +lenguajes[lenguaje] + "</li>");
}

// Busquedas
var busqueda = lenguajes.find(function(lenguaje){
  return lenguaje == "Php";
})

// Con funcion de flecha

var busqueda2 = lenguajes.find(lenguaje => lenguaje == "Php");
var busquedaIndice = lenguajes.findIndex(lenguaje => lenguaje == "Php");
console.log(busqueda);
console.log(busqueda2);
console.log(busquedaIndice);

var precios = [10, 20, 50, 80, 12];
var busquedaPrecio= precios.some(precio => precio >= 50);
console.log(busquedaPrecio);


// MOZILLA FIREFOX
var myVar = "Prueba de una matriz multidimensional";
var nb = 4;
var a = new Array(nb); // crea una matriz de longitud 4
for (var i = 0; i < nb; i++) {
   a[i] = new Array(nb); // define cada elemento como una matriz de longitud 4
   for (var j = 0; j < nb; j++) {
      a[i][j] = "[" + i + "," + j + "]"; // asigna a cada elemento de la matriz bidimensional
                                         // los valores de i y j
                                         console.log(a[i][j]);
   }
}

for (var i = 0; i < nb; i++) {
   var str = "Fila " + i + ":";
   for (var j = 0; j < nb; j++) {
      str += a[i][j]; // añade a la cadena el contenido de la matriz bidimensional
   }
   myVar += str + "; "; // añade a la cadena original el resultado obtenido por cada iteración
   console.log(myVar);
}
