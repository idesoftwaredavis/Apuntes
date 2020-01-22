'use strict'

//Transformacion de textos

var numero = 555;
var texto1 ="Bienvenido a este texto";
var texto2="motivate y aprende";

var dato = numero.toString();
    dato = texto1.toLoverCase();
    dato = texto2.toUpperCase();

//calcular longitud
var nombre = "Davis B";

console.log(nombre.length);

//Concatenar
//var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat(" " + texto2);

console.log(textoTotal);
