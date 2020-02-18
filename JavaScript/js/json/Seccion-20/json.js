/*'use strict'

window.addEventListener('load', () => {
  // Json
  var nombre = {
    nombre: 'ernesto',
    apellido:'berrios',
  }

  var  nombre2=[{nombre:'davis',apellido:'berrios'}, {nombre:'matias',apellido:'maldonado'}];
  console.log(typeof(nombre));

  // Array
  var seccion = document.querySelector('#miseccion');
  var index;
  for(index in nombre2){
    var p = document.createElement('p');
    p.append(nombre2[index].nombre);
    seccion.append(p);
    console.log(nombre2[index].nombre + '-' + nombre2[index].apellido);
    console.log(typeof(nombre2[index]));
  }
});
