
const  contenedorPro = document.getElementById("contenedorPro")

const  carritoContenedor = document.getElementById("carrito-contenedor")

const  totalCarrito = document.getElementById("total")


const cantidadCarrito = document.getElementById("contador-carrito")

let carrito = [ ]

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")){
      carrito = JSON.parse(localStorage.getItem("carrito")) 
      actCarrito()
    }
})

  producto.forEach(productos => {
    const div = document.createElement("div")
    div.classList.add("card")
    div.innerHTML += ` <div class="card">
                                     <img src="${productos.img}" class="card-img-top" alt="alimento-mascotas">
                                    <div class="card-body">
                                    <h5 class="card-title">${productos.nombre}</h5>
                                    <p class="card-text">${productos.descripcion}</p>
                                    <p class="card-text">Precio $: ${productos.precio}</p>
                                    <a href="#" class="btn btn-primary" id=comprar${productos.id}>Comprar</a>
                                    </div>
                                    </div>`
    
            contenedorPro.appendChild(div)

          


             const botonAgregar = document.getElementById(`comprar${productos.id}`)

            botonAgregar.addEventListener("click", ()=>{
                                    agregarAlCarrito(productos.id)
         })

    })

const  agregarAlCarrito = (prodId) =>{
    const   prods = producto.find((prod) => prod.id === prodId)
    carrito.push(prods)
    actCarrito()
    console.log(carrito)
}






const quitarDelCarrito = (prodId) =>{
  const  prods = carrito.find((prod) => prod.id === prodId)
  const indice = carrito.indexOf(prods)
  carrito.splice(indice, 1)
  actCarrito()
}

const actCarrito = ()=>{

    carritoContenedor.innerHTML=""

    carrito.forEach((producto) =>{
        const div = document.createElement("div")
        div.className = ("enCarrito")
        div.innerHTML =`<h6>${producto.nombre}</h6>
                                    <p>${producto.descripcion}</p>
                                    <p>${producto.precio}</p>
                                    <p>Cantidad: <span>${producto.cantidad}</span></p>
                                    <button onclick = "quitarDelCarrito(${producto.id})" class="boton_eliminar"><i class="fa-solid fa-trash-can"></i></button>`


                                     carritoContenedor.appendChild(div)

                                    localStorage.setItem("carrito", JSON.stringify(carrito))

         })

         cantidadCarrito.innerText = carrito.length
         
         totalCarrito.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0)
         

         
}
