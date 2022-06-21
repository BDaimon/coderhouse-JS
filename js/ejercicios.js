

/*function ventaAlimentos() {

    let nombre = prompt("Venta de alimentos para mascotas.  Ingresa tu nombre: ")
    let seleccion = prompt("Hola " + nombre + " Elige un Producto:  \nmaster dog \$ 1000  \nmaster cat \$ 2000   \npro plan \$ 3000")
    let saco = parseInt(prompt(" La compra es desde 5 sacos, cuantos sacos necesitas de " + seleccion + " ?"))

    if (saco >= 5) {
        alert("Buena eleccion " + nombre + " en la consola veras el total de tu boleta.")
    } else {
        seleccion =    prompt(nombre + " vuelve a intentarlo recuerda que  la compra es apartir de 5 sacos")

        alert("Gracias por tu compra! " + nombre + " en la consola veras el total de tu boleta.")
    }


    let total = calculo(seleccion, saco)
    console.log(nombre + " El total de tu compra es: " + total)
}
function calculo(seleccion, saco) {
    switch (seleccion) {
        case "master dog":
            return (1000) * (saco)

        case "master cat":
            return (2000) * (saco)

        case "pro plan":
            return (2000) * (saco)

        default:
            "debes seleccionar otro producto"
            break;
    }
}
ventaAlimentos()
calculo()*/

//OBJETOS
// const nombre = "Master Dog"
// const precio = 1000
// const formato = "saco 10 kl."

// //OBJETO LITERAL
// const producto1 = {
//     nombre : "Master Cat",
//     precio : 1000,
//     formato : "saco 10 kl."
// }

// const producto2 = {
//     nombre : "Master Dog",
//     precio : 2000,
//     formato : "saco 10 kl."
// }

// const producto3 = {
//     nombre : "Cat Chow",
//     precio : 2000,
//     formato : "saco 10 kl."
// }

// const producto4 = {
//     nombre : "Cat Chow",
//     precio : 2000,
//     stock : 32
// }

// function muestra() {
//     console.log(producto1.nombre, "es un alimento de calidad para el cuidado de tu mascota.")
// }

// function cambiarProducto() {
//     //let nName = prompt ("Cambiar nombre:")
//     producto1.nombre =  prompt ("Cambiar nombre:")
// }

// CONSTRUCTOR DE OBJETOS

//  class Alimento {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre
//         this.precio = precio
//         this.stock = stock
//         this.formato = "saco 10 kl."
//         this.impuesto = 1.19
//     }
//     precioConImpuesto() {
//         let total = this.precio * this.impuesto
//         return total
//     }
//     descontarStock(cantidad){
//         this.stock -= cantidad
//         return this.stock
//     }

// }

//  const producto1 = new Alimento("Master Cat", 1000, 156)
//  const producto2 = new Alimento("Master Dog", 2000, 324)
//  const producto3 = new Alimento("Cat Chow", 3000, 234)
//  const producto4 = new Alimento("Dog Chow", 4000, 67)

//ARRAYS

//const  alimentos = ["Comida Perro", "Comida Gato", "Comida Conejo", "Comida Tortuga", "Comida Loro", "Comida Pollo", "Comida Vaca"]
//                                          0                          1                        2                               3                             4                     5                       6



//function recorerArray (){
    //debugger
    //console.table(alimento)
     //for ( let i = 0; i < alimentos.length; i ++){
         //console.log(alimentos [i])
     //}
//}

//function listarAlimentos (){
//    console.table(alimentos)
//}
                                                                                                                    //METODOS
//function agregarAlimento (){                                                          //push  agrega al final del array
 //   let nuevoAlimento = prompt ("Ingresa nuevo alimento:")        //unshift  agrega al inicio
        //alimentos.push(nuevoAlimento)
        //alimentos.unshift(nuevoAlimento)
        //console.clear()
        //console.table(alimentos)
//}

//function quitarAlimento (){
    //let alimentoAquitar =  prompt ("Ingresa alimento a quitar")
    //let indice = alimentos.indexOf(alimentoAquitar)
      //  let resultado= alimentos.splice(indice, 1)
        //alert("se elimino: " + resultado)

    //let quitandoPrimero = alimentos.shift()                      //shift elimina el primer elemento
    //let quitandoUltimo = alimentos.pop()                          //pop elimina el ultimo elemento
        //alimentos.splice(1, 4 )
                                                                                               //splice elimina del prametro 1 desde donde esta, hasta donde con parametro 2
        //let todos = alimentos.join("--")                                //join genera un string de todos los elemntos, separador por el valor que se pase por parametro
            //alert ("Se elimino " + quitandoPrimero)
            //alert ("Se elimino " + quitandoUltimo)
//}

// function buscarAlimento(){
//     debugger
//     let  alimentoAbuscar = prompt("Alimento a buscar:")
//     let resultado = alimentos.includes(alimentoAbuscar)
//     if (resultado){
//         console.log("El Alimento  esta disponible")
//     }else{
//         console.warn(alimentoAbuscar, "No disponible")
//     }
// }
// buscarAlimento()

//alimentoDomestico = alimentos.slice(1, 3)                                //slice hace una copia de una parte del array dentro de un nuevo array
                                                                                                     // desde el inicio hasta el fin, fin no incluido, el array original  no se modificara

//const  alimentoDomestico = ["Comida Perro", "Comida Gato", "Comida Conejo", "Comida Tortuga", "Comida Loro"]
//const alimentosGranja = ["Comida Pollo", "Comida Vaca", "Caballo", "Cordero"]
//const alimentos = alimentoDomestico.concat(alimentosGranja)

//alimentoDomestico.concat(alimentosGranja) //Altera el primer array

//const dosTiposAlimentos = alimentoDomestico.concat(alimentosGranja)                 //concatena  dos arrays en uno

//                      ARRAY DE OBJETOS

 class Alimento {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.formato = "saco 10 kl."
        this.impuesto = 1.19
    }
    precioConImpuesto() {
     this.precio * this.impuesto
     return total
    }
    descontarStock(cantidad){
        this.stock -= cantidad
        return this.stock
    }

}




// function agregarAlimento() {
//     let nombre = prompt ("Ingresa el nombre del producto:")
//     let precio = parseInt(prompt("Ingres el precio del producto:"))
//     let = stock = parseInt(prompt("ingresa numero de stock:"))
//         producto.push(new Alimento(nombre, precio, stock ))
// }

                    // FUNCIONES DE ORDEN SUPERIOR

function listarAlimentos() {

    producto.forEach( (prod) => { // ALTERNATIVA A FOR ...OF  O AL FOR CONVENCIONAL
        console.table(prod)
    })
}
listarAlimentos()

// function buscarAlimento(){
//     //let aBuscar = prompt("ingresa el nombre del producto a buscar:").toUpperCase()
//         debugger
//         let resultado = producto.find( (prod) => prod.precio  === parseInt( aBuscar )) // NUMERICO
//         let resultado2 = producto.find( (prod) => prod.nombre === ( aBuscar )) // TEXTO EXCATO
//         let resultado3 = producto.find( (prod) => prod.nombre.includes( aBuscar )) // TEXTO PARCIAL
//         if (resultado != undefined){
//             console.clear()
//             console.table(resultado)// MUESTRA EL RESULTADO EN PANTALLA
//         }
// }

// function filtrarAimentos(){
//     let aBuscar = prompt("ingresa el nombre del producto a buscar:").toUpperCase()
//     let conclusion = producto.filter( (prod) => prod.nombre.includes( aBuscar )) 
//     if (conclusion != undefined) {
//         console.clear()
//         console.table(conclusion)
//     }
// }

// function existeAlimento(){
//     let aBuscar = prompt("ingresa el nombre del producto a buscar:")
// debugger
//     let resultado = producto.some( (prod) => prod.precio === parseInt( aBuscar ))

//     if (resultado) {
//         console.log("Precio encontrado")
//     }else{
//         console.error("el precio no esta disponible")
//     }
// }


// function proyectarIncremento (porc){
//     debugger
//     let agregar = producto.map ( (prod) =>{
//         return {
//             nombre: prod.nombre,
//             precio: prod.precio,
//             stock: prod.stock,
//             agregar: (prod.precio * porc)
//         }
//     })
//     console.table(agregar)
// }
//proyectarIncremento(1.19)

function calcularCarrito() {
    debugger
    let  total = carrito.reduce( ( acc, productos) => acc + productos.precio, 0)
    console.table("el total del carrito es:",  total)
}




function generadorCarrito(){
    carrito.push(new Alimento("MORE CAT", 1500, 255))
    carrito.push(new Alimento("MORE DOG", 2500, 180))
    carrito.push(new Alimento("GATO CHOW", 3500, 357))
    carrito.push(new Alimento("PERRO CHOW", 4500, 400))
    carrito.push(new Alimento("PRO MIX", 5000, 670))
}
generadorCarrito()
calcularCarrito()

// function generadorAutomatico(){
//     producto.push(new Alimento("MASTER CAT", 1000, 230))
//     producto.push(new Alimento("MASTER DOG", 2000, 125))
//     producto.push(new Alimento("CAT CHOW", 3000, 334))
//     producto.push(new Alimento("DOG CHOW", 4000, 200))
//     producto.push(new Alimento("DELI MIX", 5000, 330))
// }
// generadorAutomatico()






// function iterarArray(){
//     for(  recorerArray of producto)
//     console.table(recorerArray)
//    recorerArray.descontarStock()



