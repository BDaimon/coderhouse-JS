
const contenedorModal = document.querySelector(".modal-container")

const abrirCarrito = document.getElementById("open")

const cerrarCarrito = document.getElementById("cerrar")

abrirCarrito.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active")
})
cerrarCarrito.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active")
})
