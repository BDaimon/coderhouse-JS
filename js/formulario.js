

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("inputNombre");
const inputTelefono = document.getElementById("inputTelefono");
const inputEmail = document.getElementById("inputEmail");
const btnEnviar = document.querySelector("#btnEnviar");
const inp = document.querySelectorAll("input");



formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validaCampos();
  formulario.reset()
});
 

const validaCampos = () => {
  const userName = inputNombre.value.trim();
  const userPhone = inputTelefono.value.trim();
  const userEmail = inputEmail.value.trim(); 

  userName === "" ? campoVacio(inputNombre, "campo vacio"): campoOk(inputNombre)

  const er = "^[0-9]"

  userPhone === "" ? campoVacio(inputTelefono, "campo vacio"):
  userPhone.length != 9 ? campoVacio (inputTelefono, "ingresa un nro. valido de 9 digitos "):
  !userPhone.match (er)? campoVacio(inputTelefono, "debe tener solo numeros"): campoOk(inputTelefono)
 

  // if(userPhone === ""){
  //   campoVacio(inputTelefono, "campo vacio");
  // }else if (userPhone.length != 9){
  //   campoVacio(inputTelefono, "ingresa un valido de 9 digitos");
  // }else if (!userPhone.match(er)){
  //   campoVacio(inputTelefono, "debe tener solo numeros");
  // }else{
  //   campoOk(inputTelefono);
  // }

  if (userEmail === "") {
    campoVacio(inputEmail, "campo vacio");
  } else if (!okEmail (userEmail)) {
    campoVacio(inputEmail, "Email no valido");
  } else {
    campoOk(inputEmail);
  }

}

const okEmail = (inputEmail) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail);
};


const campoVacio = (input, mensaje) => {
  const aviso = input.parentElement
  const alerta = aviso.querySelector("p")
  alerta.innerText = mensaje

  aviso.className = "campoRed error";
}
const campoOk = (input) => {
  aviso = input.parentElement;
  aviso.className = "campoGreen ok";
};

 const alertInput = (hecho, mensaje) => {
  Swal.fire({
    title: hecho,
    text: mensaje, 
    icon: "success",
    toast: true,
    timer: 5000,
    position: "top",
  });
};

function saveDateUsr() {
  const dateUsr = {
    nombre: inputNombre.value,
    telefono: inputTelefono.value,
    email: inputEmail.value,
  };

  let aStr = JSON.stringify(dateUsr);
  localStorage.setItem("dateUsr", aStr);
}
function recuperarDatosUsr() {
  if (localStorage.getItem("dateUsr")) {
    const dateUsr = JSON.parse(localStorage.getItem("dateUsr"));
    inputNombre.value = dateUsr.nombre;
    inputApellido.value = dateUsr.apellido;
    inputEmail.value = dateUsr.email;
  }
}
