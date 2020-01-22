'use strict'
//No es necesario escribirlos cuando lo invocamos en la funcion

function calculadora(num1,num2, mostrar = false){

  if(mostrar == false){
    console.log("+: " + (num1+num2));
    console.log("-: " + (num1-num2));
    console.log("*: " + (num1*num2));
    console.log("/: " + (num1/num2));

  }else{
    document.write("+: " + (num1+num2) + "<br/>");
    document.write("-: " + (num1-num2)+ "<br/>");
    document.write("*: " + (num1*num2)+  "<br/>");
    document.write("/: " + (num1/num2)+  "<br/>");
  }
}

//Funciones dentro de otras
function porConsole(num1,num2){
  console.log("+: " + (num1+num2));
  console.log("-: " + (num1-num2));
  console.log("*: " + (num1*num2));
  console.log("/: " + (num1/num2));
}

function porBody(num1,num2){
  document.write("+: " + (num1+num2) + "<br/>");
  document.write("-: " + (num1-num2)+ "<br/>");
  document.write("*: " + (num1*num2)+  "<br/>");
  document.write("/: " + (num1/num2)+  "<br/>");
}
function calculadora(num1,num2, mostrar = false){

  if(mostrar == false){
    porConsole(num1,num2)

  }else{
    porBody(num1,num2)
    return true
  }
}

calculadora(5,2)
calculadora(10,2,true)
