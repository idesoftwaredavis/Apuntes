"use strict";

window.addEventListener("load", () => {
  // Timeout

  /*var timeout = setTimeout(function() {
    console.log("Set interval ejecutado");

    var encabezado = document.querySelector("div");
    if (encabezado.style.fontSize == "50px") {
      encabezado.style.fontSize = "30px";
    } else {
      encabezado.style.fontSize = "50px";
    }
  }, 2000);*/

  // stop
  var estop = document.querySelector("#parar");

 

  // start
  function intervalo(tiempo) {
    // Timers
    var tiempo = setInterval(function() {
      console.log("Set interval ejecutado");

      var encabezado = document.querySelector("p");
      if (encabezado.style.fontSize == "50px") {
        encabezado.style.fontSize = "30px";
      } else {
        encabezado.style.fontSize = "50px";
      }
    
    }, 5000);
    return tiempo;
  }


  estop.addEventListener("click", function() {
    alert("Has parado el intervalo en bucle");
    // Pasar por parametro
    var interval = intervalo(tiempo);
    console.log(clearInterval(interval));
  });

  var start = document.querySelector("#empezar");
  start.addEventListener('click', () => {
      alert("Empieza el intervalo de tiempo");
      intervalo();
  })
});
