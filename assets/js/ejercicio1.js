document.getElementById("formulario").addEventListener("submit", function (e) {
  validarFormulario(e);
});

function validarFormulario(e) {
  //Evitamos la recarga de página
  e.preventDefault();

  //Declaramos los textbox y textos de error
  const nombre = document.querySelector("#nombre");
  const asunto = document.querySelector("#asunto");
  const mensaje = document.querySelector("#mensaje");

  const errorNombre = document.querySelector("#errorNombre");
  const errorAsunto = document.querySelector("#errorAsunto");
  const errorMensaje = document.querySelector("#errorMensaje");

  //Comprobamos que cada texto ingresado en el formulario tenga letras, de lo contrario obtendremos un false
  let nombreReg = /^[a-zA-Z]+$/.test(nombre.value);
  let asuntoReg = /^[a-zA-Z]+$/.test(asunto.value);
  let mensajeReg = /^[a-zA-Z]+$/.test(mensaje.value);

  //En los siguientes IF ocultaremos y mostraremos el mensaje de error según lo obtenido en las lineas anteriores
  //Si es TRUE entonces agregamos la clase CSS d-none, el cual oculta el mensaje de error
  //De lo contrario obtendremos un FALSE por lo que mostraremos el mensaje
  if (nombreReg == true) {
    errorNombre.classList.add("d-none");
  } else {
    errorNombre.classList.remove("d-none");
  }

  if (asuntoReg == true) {
    errorAsunto.classList.add("d-none");
  } else {
    errorAsunto.classList.remove("d-none");
  }

  if (mensajeReg == true) {
    errorMensaje.classList.add("d-none");
  } else {
    errorMensaje.classList.remove("d-none");
  }

  //Si todos son TRUE entonces mostraremos el mensaje de que todo esta OK (Cumpliendo con las condiciones)
  if (nombreReg == true && asuntoReg == true && mensajeReg == true) {
    alert("Esta todo OK");
  }
}
