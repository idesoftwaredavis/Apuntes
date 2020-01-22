"use strict"

/*
  Utilizando un bucle, mostrar la media y la suma de los resultados.
  Al momento que el usuario introduzca un numero negativo,
  se muestran los resultados.
*/

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo", 0))

  if(isNaN(numero)){
    numero = 0;
  }else if(numero >= 0){
    suma = suma + numero;
    //suma+= numero;
    contador++;
  }
  console.log("la suma ", suma);
  console.log("el contador : ", contador);

} while (numero >= 0);

alert("La suma es : "  + suma);

alert("La media es : " + suma/contador);
