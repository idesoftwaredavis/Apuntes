"use strict"

/*
  tabla de multiplicar introduci por pantalla
*/

var numero = parseInt(prompt("Introducir un numero para saber su tabla de multiplicacion"));

var i ;
var j;
for (i=1;i<=10;i++){
  var resultado = numero*i;
  console.log(numero + "X" + i + " = "+ resultado);
}


for (i = 1;i<=10;i++){
  document.write("<h3> La tabla del " + i + "</h3>");
    for(j= 1; j<=10; j++){
      var resultado = j*i;
      document.write( j + " x " + i + "="+resultado + "<br/>");
    }

  }
