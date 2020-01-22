'use strict'

function sumar(num1,num2, Multiplicacion, Division){
  var resultado = num1+num2;
  Multiplicacion(resultado);
  Division(resultado);
  return console.log("La suma es : " ,  resultado);
}


sumar(10,2, (dato) => {
  return console.log("La multiplicacion es : ", dato*2);

}, function (dato){
  return console.log("La division es : ", dato/2);
});
