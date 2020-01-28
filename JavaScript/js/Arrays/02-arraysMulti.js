'use strict'

/*
  push -- Agrega al ultimo elemento
  pop -- Elimina al final
  unshift -- Añade al inicio
  shift -- elimina al principio
  join
  indexOf -- Encontrar un indice de un elemento
  SORT -- Ordena los elementos de una matriz unidimensional.
  REVERSE
  split
  splice
  slice = Copiar un array
  findIndex
*/
var unidimensionalLongitud = new Array(3);
unidimensionalLongitud[0] = "Tame impala";
unidimensionalLongitud[1] = "Explosion";
unidimensionalLongitud[2] ="Ex";
unidimensionalLongitud[3] = "kdf";
unidimensionalLongitud[4]="kjsds";
console.log(unidimensionalLongitud);
var categorias = ['Accion','Terror','Suspenso'];
var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

var cine =[categorias,peliculas];

console.log(cine[0][2]);

//OPERADORES CON Arrays
var elemento ="";

do{
  elemento = prompt("Introduce tu pelicula");
  peliculas.push(elemento);
}while (elemento != "ACABAR");

//eliminar el ultimo elemento de un array
peliculas.pop();
console.log(peliculas);

//undefined
peliculas[0]= undefined;

//Eliminar especifico
var indice= peliculas.indexOf("La verdad duele");
if (indice > -1){
  peliculas.splice(indice,1);
}

//join
var string_peliculas = peliculas.join()
console.log(string_peliculas);

//Convertir String en un Array
//Metodo split: Convierte a Array un string.
var cadena = "texto1, texto2, texto3";
var cadena_string = cadena.split(", ");
console.log(cadena_string);


//Ordenar Arrays
//METODOS SORT /  REVERSE
//ORDENAMIENTO
peliculas.sort();
console.log(peliculas);
peliculas.reverse();
console.log(peliculas);


//slice
var copiaArray = peliculas.slice();
console.log("La copia con array : "+ copiaArray);
