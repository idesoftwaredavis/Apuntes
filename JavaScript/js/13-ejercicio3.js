"use strict"

/*
  Hacer un programa que muestre todos los numeros entre dos numeros
  introducidos por el usuario
*/

//bucle para almacenar

  var numero1 = parseInt(prompt("Introduce el primer numero"));
  var numero2 = parseInt(prompt("Introduce el segundo numero"));

  document.write("<h1>Del "+numero1+ " a "+ numero2 + " Estan estos numeros: </h1>");
  for (var i = numero1; i<= numero2;i++){
    document.write(i + "<br/>");
  }
