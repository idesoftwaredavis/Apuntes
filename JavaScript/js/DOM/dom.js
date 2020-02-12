"use strict";

// DOM - Document Object Model
// Obtengo valores de id o clases con getElementById
var caja = document.getElementById("micaja");
var seccion = document.getElementById("miseccion");
console.log(caja, seccion);

// Modificar texto de algun bloque desde javaScript con innerHTML
caja.innerHTML = "Hola!, Este Texto fue cambiado en JavaScript";

// Cambiar los estilos en JavaScript con "Style.[Modificacion]"
var cambiaBackground = (caja.style.background = "black");
var cambiaPadding = (caja.style.padding = "20px");
var cambiaColor = (caja.style.color = "orange");
var addClass = (caja.className = "claseJS clase2JS");

console.log(cambiaBackground, cambiaPadding, cambiaColor);

// Con funciones
var colorUsuario = prompt("Ingresa un color a cambiar");
function colorFunction(color) {
  caja.style.background = color;
}
colorFunction(colorUsuario);

// Utilizando QuerySelector
var cajaQuerySelector = document.querySelector("#miseccion");
console.log("Query Selector : " + cajaQuerySelector);

// Utilizando getElementByTagName
var tagName = document.getElementsByTagName("div");

// Recorriendo el array de Nodos DOM
for (var i = 0; i < tagName.length; i++) {
  console.log("Contenido Numero " + i + "Del DOM ");
  console.log(tagName[i]);
}

// Utilizando getElementByName
var nombre = document.getElementsByName("nombre");
var apellido = document.getElementsByName("apellido");
var rut = document.getElementsByName("rut");

console.log(nombre, apellido, rut);

// Otro Ejemplo
var todosLosDivs = document.getElementsByTagName("div");

var valor;
for (valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
  }
}

// Cambiar color presionando un color
var botonHTML = document.getElementById("boton");

function colorBoton(){
  caja.style.color = "red"; 
}

botonHTML.onclick = colorBoton;

