'use strict'

/*
  indexOf
  lastIndexOf
  search
  match
  substr
  concat
  charAt
  startsWith
  endsWith
  includes


*/
var texto = "          Curso Davis Curso"
//lastIndexOf -- indexOf
var busqueda= texto.indexOf("Curso");
var busqueda2 = texto.lastIndexOf("Curso");
console.log(busqueda);
console.log(busqueda2);

//Metodo Search --> Primera posicion
var metodoSearch = texto.search("Curso");
console.log(metodoSearch);

//Metodo match
var metodoMatch= texto.match("Curso");
console.log(metodoMatch);

//Metodo substr
var rut = "199323458"
var metodoSubstr = texto.substr(3,5);
console.log(metodoSubstr);
//revisar
var metodoSubstrRut=rut.substr(0,2).concat("." + rut.substr(2,3)) +  "." + rut.substr(5,6) + "-" + rut.substr(-1);
console.log(metodoSubstrRut);

//metodo charAt
var metodoCharAt = texto.charAt(8);
console.log(metodoCharAt);

//metodo startsWith -> empieza al principio la busqueda
//meotodo endsWith
var metodoStartSwith = texto.startsWith("Curso");
console.log(metodoStartSwith);

//metodo includes
var metodoIncludes=texto.includes("Victor");
console.log(metodoIncludes);


//******************************************************************************
//metodo Replace
var contra = "Contrasenia";
console.log(contra);
var reemplazo = contra.replace(contra, "chelssea");
console.log(reemplazo);


//Metodo SLICE
var metodoSlice = texto.slice(4,7);
console.log(metodoSlice);

//metodo Slipt
var metodoSplit = texto.trim(texto).split(" ");
console.log(metodoSplit);

//metodo trim para dejar la cadena de texto en limpio
var metodoTrim = texto.trim(texto);
console.log(metodoTrim);
