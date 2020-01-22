"use strict"

//condicional IF

/*	
	Mayor : >
	Menor : <
	Mayor o igual : >= 
	Menor o igual : <=
	igual : ==
	Distinto : !=
*/

var edad = 18;
var nombre = "Davis Suarez";

if(edad >18){
	console.log("hola :" + nombre + " Tu eres mayor a 18");
}else if (edad != 18){
	console.log ("hola :" + nombre + " Tu no posees una edad mayor a 18");
}else if (edad == 18){
	console.log("hola :" + nombre + " Tu tinees exactamente 18 años");
}else{
	console.log("hola :" + nombre + " Tu tienes una edad menor a 18")
}