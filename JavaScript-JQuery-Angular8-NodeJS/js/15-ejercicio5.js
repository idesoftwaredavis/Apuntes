"use strict"

/*
Muestre todos los numeros divisores de un numero introducido en prompt
*/

var numero = parseInt(prompt("Mete un numero", 1));

for(var i = 1; i<= numero ; i++){
  //Si el numero dividido por si mismo da cero, se muestra por pantalla
  if(numero%i == 0){
    console.log("Divisor : " + i);
  }
}
