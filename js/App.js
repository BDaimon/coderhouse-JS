
function ventaAlimentos() {

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
calculo()






