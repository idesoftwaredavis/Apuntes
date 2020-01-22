'use strict'

var num1= parseInt(prompt("Ingrese el primer numero",0));
var num2 = parseInt(prompt("Ingrese el segundo numero", 0));

function calculadora(num1,num2){

  console.log("+: " + (num1+num2));
  console.log("-: " + (num1-num2));
  console.log("*: " + (num1*num2));
  console.log("/: " + (num1/num2));

}

//Invocar
calculadora(num1,num2);
var i= 1;
/*while(i<=10){
  console.log(i);
  calculadora(i,8);
  i++;
}*/

/*do {
  console.log(i);
  calculadora(i,8);
  i++;
} while (i<=10);*/


for(i=1;i<=10;i++){
  console.log(i);
  calculadora(i,8);
}
