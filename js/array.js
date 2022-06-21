
 const productos = ["master cat", "master dog", "cat chow", "dog chow", "deli mix"]
 const carrito = [ ]

 const listaProductos = document.getElementById("listadoProd")

 const listaCarrito = document.getElementById("listadoCarrito")

function cargarProductos(){
   debugger
    listadoProd.innerHTML = ""
        for (const items of productos) {
            const li = document.createElement("li")
            li.className = "list-group-item text-primary"
            li.innerText = items
            li.id = items + "Prod"
            listadoProd.append(li)

            //listadoProd.innerHTML  +=  "<li>" + items +  "</li>"
        }
}



