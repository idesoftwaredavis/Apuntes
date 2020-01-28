'use strict'
/*
    1. Pida 6 numeros por pantalla y los meta en un array
    2. Mostrar el array entero (todos sus elementos)
    en el cuerpo de la pagina y en la consola
    3. Ordenarlo y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Mostrar cuantos elementos tiene el array
    6. Busqueda de un valor introducido por el usuario, que nos diga si lo
    encuentra y su indice.
*/
//var arreglo= new Array();
var arreglo = [];
var i = 0;
while(i<=5){
  var numeros = parseInt(prompt("Ingrese 6 numeros por pantalla"));
    arreglo.push(numeros);

  i+=1;
}

//var busqueda = arreglo.find(elemento => elemento == "NaN");
//var elemento = "NaN";
/*
for (var i = 0; i<= arreglo.length; i++){
  if(busqueda==arreglo[i]){
    arreglo[i].splice(i,0,'ernesto');
  }
}*/
console.log("Lista de elementos : "+arreglo);
//Recorrido con funcion callbacks
arreglo.forEach((elemento, indice) => {
  document.write("<li>"+indice + ": " +elemento + "</li>");
})
console.log("Ordenamiento : "+ arreglo.sort());
console.log("Invertido :"+ arreglo.reverse());
console.log("Elementos del Array :"+ arreglo.length);

alert("Bienvenido al sistema de busqueda de la web");

var busqueda = parseInt(prompt("Busca un numero"));
var posicion =numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
  console.log(posicion);
}
