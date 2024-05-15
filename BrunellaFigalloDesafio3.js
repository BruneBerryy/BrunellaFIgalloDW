// DESAFIO 3
let nombreProducto = "gomitas acidas"
let precioUnitario = 1000
let cantidadDeseada = prompt("Ingrese la cantidad deseada")

if (cantidadDeseada >= 5) {
    let descuento = (cantidadDeseada * precioUnitario) * 0.10
    let precioSubFinal = cantidadDeseada * precioUnitario
    let precioFinal = precioSubFinal - descuento

    alert("Se realizo un descuento de " + descuento + "El precio final para la compra de su producto" + nombreProducto + "es $" + precioFinal)
}
else {
    alert("El precio final es" + precioFinal + "no se le aplico descuento ya que la cantidad que solicitó fue" + cantidadDeseada)
}