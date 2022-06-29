
const contenedorModal = document.querySelector(".modal-container")

const abrirCarrito = document.getElementById("open")

const cerrarCarrito = document.getElementById("cerrar")

abrirCarrito.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active")
})
cerrarCarrito.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active")
})








// export const enCarrito = (productoId) => {
//     const contenedorCarrito = document.getElementById("carrito-contenedor")

// const cargarCarrito =() => {
//         let productos = producto.find(producto => producto.id == productoId) 
//         carrito.push(productos)
//         console.log(carrito)
        
        

   
                
    
      
      
//         const div = document.createElement("div")
//         div.classList.add("card")
//         div.className = ("carrito-conenedor")
//         div.innerHTML = `  <h5>${productos.nombre}</h5>
//                                         <p>${productos.descripcion}</p>
//                                     <p id="cantidad${productos}">Cantidad: ${productos.cantidad}</p>
//                                     <p class="card-text">Precio: $ ${productos.precio}</p>
//                                     <button  id="eliminar(${productos.id})"><i class="fa-solid fa-trash-can "></i></button>`

//             contenedorCarrito.appendChild(div)
//     }
      
//      cargarCarrito()
// }




