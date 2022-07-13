const formulario = document.querySelector("#formulario");
const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const inputEmail = document.querySelector("#inputEmail");
const btnEnviar = document.querySelector("#btnEnviar");
const inp = document.querySelectorAll("input");

const focoEnInput = () => {
  const inp = document.querySelectorAll("input");
  for (let inpFondo of inp) {
    if (inpFondo.type != "submit") {
      inpFondo.addEventListener(
        "focus",
        () => (inpFondo.className = "inputColor")
      );
      inpFondo.addEventListener("blur", () => (inpFondo.className = ""));
    }
  }
};

document.addEventListener("submit", (e) => {
  e.preventDefault();
  saveDateUsr();
  alertInput("Datos guardados");
});

const alertInput = (hecho) => {
  Swal.fire({
    title: hecho,
    icon: "success",
    toast: true,
    timer: 1000,
    position: "top",
  });
};

function saveDateUsr() {
  const dateUsr = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
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
