'use strict'

window.addEventListener('load', () =>{
  // Extraer formulario
  var form= document.querySelector('#formulario');

  form.addEventListener('submit', function(e){
    var titulo = document.querySelector('#addPelicula').value;
    if(titulo.length >=1){
      localStorage.setItem(titulo,titulo);
      e.preventDefault();
    }else{
      alert('ingrese una clave');
    }
    var lista = document.querySelector('#peliculas-list');
    for(var i in localStorage){
      // Estructura condicional para comprobar si es un string
      if(typeof localStorage[i] == 'string'){
        // Creacion de etiqueta li
        var li = document.createElement('li');
        // Metodo append para agregar elementos a li
        li.append(localStorage[i]);
        lista.append(li);
      }
    }
  });


});
