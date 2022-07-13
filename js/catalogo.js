
const contenidoCatalogo = document.querySelector("#contenidoCatalogo")

const preloader = document.querySelector("#preloader")



// const URL = `http:localhost:2020/catalogo/` //prueba de error
const URL = `catalogo.json`

const cardProductos = (contenido) =>{

const {poster, titulo, kilos , descripcion, tipo } = contenido



    return` <div class="card"  style="width: 13rem;">
    <img class="card-img-top" src="${poster}"  alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-primary"> ${titulo}</h5>
      <p class="card-text">Peso: ${kilos} Kg</p>
      <h6 class="card-text"> ${descripcion}</h6>
      <p class="card-text"> Tipo: ${tipo}</p>
    </div>
  </div>`
}

const cardError = () => {
  return`<div class="text-center">  <h5>Contenido no dispinible</h5>
  <br>
  <i class="fa-regular fa-face-frown cara"></i>
  </div>`
}

function traerContenido(URL) {

  let contenidoAmostrar = ""

  fetch(URL)
    .then((response) => response.json())
    .then((dato) => {
      //console.table(dato)
      for (contenido of dato)
        contenidoAmostrar += cardProductos(contenido)

      contenidoCatalogo.innerHTML = contenidoAmostrar
      
   
    })

    .catch((error) => contenidoCatalogo.innerHTML = cardError())
    .finally(() => preloader.innerHTML = "")


}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    traerContenido(URL)
  }, 2500)
})


