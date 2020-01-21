"use strict"

/*
	Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
	PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir.
*/


	var num1= parseInt(prompt("Ingrese el primer numero",0));
	var num2 = parseInt(prompt("Ingrese el segundo numero", 0));


	while(num1<=0 || num2 <=0 || isNaN(num1) || isNaN(num2) ){
		num1= parseInt(prompt("Ingrese el primer numero",0));
		num2 = parseInt(prompt("Ingrese el segundo numero", 0));
	}
		
	
	if(num1 == "" && num2 == ""){
		alert("No se ejecutara el resultado debido a que usted no ha puesto ningun campo");

	}else if(num1>num2){
		alert("Numero mayor : " + num1);
		alert("Numero menor : " + num2);
		if(num1==num2){
			alert("Numeros iguales : Yes");
		}else{
			alert("No son iguales");
		}
	}else{
		alert("Numero mayor : " + num2);
		alert("Numero menor : " + num1);
		if(num1==num2){
			alert("Numeros iguales : Yes");
		}else{
			alert("No son iguales");
		}
	}

//victor robles

/*var numero1 = parseInt(prompt("Introduce el primer numero ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero ", 0));

console.log(numero1,numero2);

if(numero1 == numero2){
	alert("los numeros son iguales");

}else if (numero1 > numero2){
	alert("El numero mayor es : " + numero1);
	alert("El numero menor es : " + numero2);
}else if (numero2 > numero1){
	alert("El numero mayor es : " + numero2);
	alert("El numero menor es : " + numero1);
}else{
	alert("Introduce numeros correctos");
	
}*/