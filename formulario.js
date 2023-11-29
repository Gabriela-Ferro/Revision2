const formulario = document.querySelector('.formulario') //cambie var por const, y llame a la clase correcta con el .
//tambien cambie por comillas simples

formulario.onsubmit = function(e) {

  e.preventDefault ();
  
  const namePosition = formulario.elements[0];
  const agePosition = formulario.elements[1];
  const  nacionalityPosition = formulario.elements[2];

  const nombre = namePosition.value;
  const edad = agePosition.value;
  let indexNacionalidad = nacionalityPosition.selectedIndex;
  const valorNacionalidad = indexNacionalidad.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  /**en lo anterior modifique las variables que tenian nombres poco descriptivos, 
   * utilice elemnto + Position para designar la posicion dentro del arreglo, y el nombre de  los
   * elementos para asignaban el valor. Ademas aniadi ; y cambie el var
   */

  if (nombre.length === 0) {
    namePosition.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    agePosition.classList.add("error");
  }

if (nombre.length > 0 && (edad >= 18 && edad <= 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}
/**  cambie las variables por los nombres correctos asignados anteriormente, ademas aniadi
 * ; y ordene mejor el if de la linea 32 proque era poco legible.
*/
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
document.body.appendChild(document.createElement("br"));
document.body.appendChild(botonBorrar);

/**Aqui me parece que flatan parentesis y estaba incompleyo.  */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}