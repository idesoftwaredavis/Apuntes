"use strict";
window.addEventListener("load", () => {
  var button = document.getElementById("boton");

  button.addEventListener("click", function() {
    alert("Me diste un click ");
  });

  button.addEventListener("mouseover", function() {
    alert("He detectado el mouse ");
  });

  button.addEventListener("mouseout", function() {
    alert("Adios raton ");
  });

  var botonSegundo = document.querySelector("#boton2");
  botonSegundo.style.background = "yellow";
  botonSegundo.style.padding = "20px";
  function choiceButton() {
    console.log("me has dado click");
    var bg = botonSegundo.style.background;
    if (bg == "yellow") {
      botonSegundo.style.background = "green";
    } else if (bg == "green") {
      botonSegundo.style.background = "black";
    } else if (bg == "black") {
      botonSegundo.style.background = "olive";
    } else if (bg == "olive") {
      botonSegundo.style.background = "yellow";
    }
  }

  botonSegundo.addEventListener("click", function() {
    choiceButton();
  });

  // Evento Focus
  var txtname = document.querySelector("#Nombre");
  txtname.addEventListener("focus", function() {
    console.log("Estas dentro del input, [Focus]");
  });
  // Evento Blur
  txtname.addEventListener("blur", function() {
    console.log("Estas fuera del input, [Blur]");
  });
  // Evento Keydown
  // La tecla se ha hundido
  txtname.addEventListener("keydown", function(event) {
    console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
  });
  // Evento Keypress
  // Solo sucede cuando la tecla ha sido hundida y soltada en el objeto que maneja el evento
  txtname.addEventListener("keypress", function(event) {
    console.log("tecla presionada : ", String.fromCharCode(event.keyCode));
  });
  // Evento Keyup
  // Acabas de levantar el dedo de la tecla
  txtname.addEventListener("keyup", function(event) {
    console.log("tecla soltada : ", String.fromCharCode(event.keyCode));
  });
});
