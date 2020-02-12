'use strict'

// window load
window.addEventListener('load', () =>{
  // datos prueba
  var usernameReal = "acidsulfurico";
  var passReal = "prueba123";
  var bloqueo = 0;
  var registro =[];
  // extraccion de datos
  console.log("DOM LISTO !");

  var formulario = document.querySelector('#form');
  var errores = document.querySelector('#errors');
  errores.style.display='none';
  // zona javascript stylesheet
  errores.style.color="red";

  var parrafo = document.createElement('p');
  // crear elemento
  formulario.addEventListener('submit', function(e){
    var user = document.querySelector('#username').value;
    var pass = document.getElementById('password').value;
    var check = document.querySelector('#checkbox').checked;

    // creacion de array
    var data = [user,pass,check];
    do {
     if(user.trim() == null || user.trim() != usernameReal || pass.trim() == null ||    pass.trim() != passReal && errores.innerHTML!="CUENTA BLOQUEADA" ){
        errores.innerHTML="Campo usuario o contraseña incorrecta o vacia";
        errores.style.display='block';
        bloqueo = bloqueo +1;
        if(bloqueo==3){
         //location.reload();
          errores.innerHTML="CUENTA BLOQUEADA";
        }
        console.log(bloqueo);
      }else{
        // window.location.replace()
        // window.location.href
        window.location.href ="http://victorroblesweb.es";
      };
    } while (bloqueo==2);
    /*for(bloqueo in data){
      parrafo.append(data[bloqueo]);
      errores.append(parrafo);
    }*/
    e.preventDefault();
  });
});
