const contenedorPro = document.getElementById("contenedorPro");

const carritoContenedor = document.getElementById("carrito-contenedor");

const totalCarrito = document.getElementById("total");

const botonBuscarProductos = document.querySelector("#buscarPro");

const formularioBuscar = document.querySelector("#buscando");

const cantidadCarrito = document.getElementById("contador-carrito");

const encontrado = document.querySelector("#encontrado");

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actCarrito();
  }
});

producto.forEach((productos) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML += `  <div>
                                     <img src="${productos.img}" class="card-img-top" alt="alimento-mascotas">
                                    <div class="card-body">
                                    <h5 class="card-title">${productos.nombre}</h5>
                                    <p  class="card-text">${productos.descripcion}</p>
                                    <p class="card-text">Precio: ${productos.precio}</p>
                                    <a href="#" class="btn btn-primary" id=comprar${productos.id}>Comprar</a>
                                    </div>
                                    </div>`;

  contenedorPro.appendChild(div);

  const botonAgregar = document.getElementById(`comprar${productos.id}`);

  botonAgregar.addEventListener("click", () => {
    agregarAlCarrito(productos.id);
  });
});

const agregarAlCarrito = (prodId) => {
  const estaEnCarrito = carrito.some((prod) => prod.id === prodId);

  if (estaEnCarrito) {
    const prods = carrito.map((prod) => {
      if (prod.id === prodId) {
        prod.cantidad++;
      }
    });
  } else {
    const prods = producto.find((prod) => prod.id === prodId);
    carrito.push(prods);
  }
  actCarrito();
};

spinnerCarrito = () => {
  return `
      <div class="spinner-border text-info" role="status">
 <span class="sr-only"></span>
</div>`;
};

const filtrarProductos = () => {
  const animacion = document.querySelector("#spinner");
  animacion.innerHTML = spinnerCarrito();
  setTimeout(() => {
    encontrado.innerHTML = "";
    const buscando = formularioBuscar.value.toLowerCase();
    for (let productos of producto) {
      let item = productos.nombre.toLowerCase();
      if (item.indexOf(buscando) !== -1) {
        encontrado.innerHTML += `<li><p> ${productos.nombre} ${productos.descripcion}</p></li>`;
      }
    }
    if (encontrado.innerHTML === "") {
      encontrado.innerHTML += ` <li>No se encuentra el producto</li>
    `;
    }
    animacion.innerHTML = "";
  }, 1500);
};

// botonBuscarProductos.addEventListener("click", filtrarProductos)
formularioBuscar.addEventListener("keyup", filtrarProductos);

//filtrarProductos()

const quitarDelCarrito = (prodId) => {
  const prods = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(prods);
  carrito.splice(indice, 1);
  actCarrito();
  sweetAlert(`${prods.nombre} ${prods.descripcion} Se elimino del carrito`);
};

const sweetAlert = (nombre, descripcion) => {
  Swal.fire({
    title: nombre,
    text: descripcion,
    icon: "warning",
    toast: true,
    timer: 4000,
    position: "top",
  });
};

const vaciarCarrito = document.getElementById("vaciar");

vaciarCarrito.addEventListener("click", () => {
  carrito.length = 0;
  alertVacio("Tu carrito esta vacio");
  actCarrito();
});

const alertVacio = (hecho) => {
  Swal.fire({
    title: hecho,
    icon: "info",
    toast: true,
    timer: 3000,
    position: "top",
  });
};

const actCarrito = () => {
  carritoContenedor.innerHTML = "";

  carrito.forEach((producto) => {
    const div = document.createElement("div");
    div.className = "enCarrito";
    div.innerHTML = `<h6>${producto.nombre}</h6>
                                    <p>${producto.descripcion}</p>
                                    <p> Precio: ${producto.precio}</p>
                                    <p>Cantidad: <span>${producto.cantidad}</span></p>
                                    <button onclick = "quitarDelCarrito(${producto.id})" class="boton_eliminar"><i class="fa-solid fa-trash-can"></i></button>`;

    carritoContenedor.appendChild(div);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  });

  cantidadCarrito.innerText = carrito.length;

  totalCarrito.innerText = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );
};
