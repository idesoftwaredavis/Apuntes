'use strict'

// LocalStorage
if (typeof(Storage) !== "undefined") {
    console.log('listo');
} else {
    // LocalStorage no soportado en este navegador
}

// Guardar
localStorage.setItem('titulo','Javascript');

// Recuperar Datos
console.log(localStorage.getItem('titulo'));

// Guardar Objetos en el LocalStorage
var usuario ={
  nombre:'davis',
  apellido:'berrios',
}
// Usando json String, para que sea guardado correctamente en localstorage
var userjs = localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar objetos desde el LocalStorage
// Se tiene que convertir en un objeto de Javascript JSON (Por default esta en string json)
console.log(JSON.parse(localStorage.getItem('usuario')));

/*
  Importante:
    JSON.parse() -> es para parsear o convertir algo a un objeto JSON usable por JavaScript.

    JSON.stringify() es para crear un JSON string de un objeto o un array.
*/

// Borrar o vaciar el LocalStorage
localStorage.removeItem('titulo');

// Eliminar todas las variables guardadas en el localStorage:
localStorage.clear();


localStorage.setItem('nombres','estudiar matematicas');
