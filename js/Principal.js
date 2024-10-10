import Cl_Becado from "./Cl_Becado.js";

let becado1 = new Cl_Becado("Mary",132,10)
let salida = document.getElementById("salida");

salida.innerHTML = becado1.mostrarNombre() +" "+becado1.beca();