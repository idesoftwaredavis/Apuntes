'use strict'

// parametros REST y SPREAD

//USO DE REST
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
  console.log("fruta 1: ", fruta1);
  console.log("fruta 2: ", fruta2);
  console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melon", "Coco");


//Uso de SPREAD
var frutas=["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia","pera","Melon");
