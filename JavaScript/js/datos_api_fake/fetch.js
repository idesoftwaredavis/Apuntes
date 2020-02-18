'use strict'
console.log('DOM listo!');
window.addEventListener('load', () => {
  //  Fetch (Sustituto de ajax - Peticiones asincronas a un servidor) y peticiones a servicios / apis rest
  var div_usuarios = document.querySelector('#usuarios');
  var usuarios = [];
  // Primero, se accede a un servicio remoto
  // Hace la peticion y se queda a la espera de que cuando recibamos los datos, se conviertan a json.

  // Captura de datos con el .then
  // Le pasamos una funcion callback en donde data se transforma a un json javascript usable

  // En el segundo data, ya se tiene los datos y se realiza un segundo .then para listar los usuarios
  fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json())
  .then(data => {
    usuarios = data;
    console.log(usuarios);

    // Map con funcion callback
    usuarios.map((data, i) => {

      var nombre = document.createElement('h2');
      nombre.innerHTML = "indice "+ i + " - " + data.name + " | " + data.email;
      div_usuarios.append(nombre);
      document.querySelector('.loading').style.display = 'none';
    });
  });
});
