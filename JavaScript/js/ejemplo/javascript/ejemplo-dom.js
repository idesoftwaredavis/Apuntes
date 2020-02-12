'use strict'
window.addEventListener("load", function() {
  console.log("DOM CARGADO!!");
  // extraer el id del formulario
  var formulario = document.querySelector("#formulario");
  var box_dashed= document.querySelector('.dashed');
  box_dashed.style.display="none";
  // crear el evento escucha de formulario tipo submit
  formulario.addEventListener('submit', function(e){
    console.log("Evento submit capturado");
    // creacion de variables para la extraccion de datos
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.querySelector('#edad').value;
    console.log(nombre, apellido, edad);


    /*// 1 forma
    // creacion de array con los datos del usuario
    var datos_usuario = [nombre,apellido,edad];
    // for in para recorrer y agregar (append) al parrafo 'p'
    var indice;
    for(indice in datos_usuario){
      // creacion de la etiqueta p
      var parrafo = document.createElement("p");
      // utilizacion del append para agregar contenido a 'p' segun iterador
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo);
    }*/


    // 2 forma
    /*// creacion de etiqueta p
    var parrafo = document.createElement("p");
    // añadir contenido con el metodo append a la etiqueta p
    parrafo.append(nombre);
    parrafo.append(apellido);
    parrafo.append(edad);
    // se añade a la clase dashed, el contenido del parrafo('p')
    box_dashed.append(parrafo);
    */

    // 3 forma
    var p_nombre = document.querySelector('#p_nombre span');
    var p_apellido = document.querySelector('#p_apellido span');
    var p_edad = document.querySelector('#p_edad span');
    var error =document.querySelector('#error_form');
    error.style.color="red";

    p_nombre.innerHTML =nombre;
      p_apellido.innerHTML =apellido;
        p_edad.innerHTML =edad;

        // validacion
        if(nombre.trim() == null || nombre.trim().length == 0){
          alert("El nombre no es valido");
          error.innerHTML="Campo Nombre vacio";
          e.preventDefault();
          return false;
        }else if(apellido.trim() == null || apellido.trim().length == 0){
          alert("El apellido no es valido");
          error.innerHTML="Campo Apellido vacio";
          e.preventDefault();
        }else if(edad == null || edad <= 0 || isNaN(edad)){
          alert("La edad no es valida");
          error.innerHTML="Campo Edad vacio";
          e.preventDefault();
        }else{
          error.innerHTML="";
          box_dashed.style.display='block';
        }
    e.preventDefault();
  });

});
