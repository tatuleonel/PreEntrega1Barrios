
// Preguntamos nombre y damos bienvenida
let nombre = prompt("¿cuál es tu nombre?");
console.log("Bienvenido, " + nombre);


// Preguntamos que está buscando y el talle
let tipoDeRopa = prompt("Que estás buscando?");
let talla = prompt("que talle eres?"); 

// Cumplimos las funciones que nos pide el cliente 
if (tipoDeRopa == "camisa" && talla == "S") {
    console.log("Te recomiendo la camisa de manga corta de color azul")
} else if (tipoDeRopa == "camisa" && talla == "M"){
    console.log("Te recomiendo la camisade manga larga de color rojo")
} else if (tipoDeRopa == "camisa" && talla == "L") {
    console.log("Te recomiendo la camisa de manga corta de color verde")
} else if (tipoDeRopa == "pantalon" && talla == "S") {
    console.log("Te recomendamos el pantalón negro");
} else if (tipoDeRopa == "pantalon" && talla == "M") {
    console.log("Te recomendamos el pantalón gris");
} else if (tipoDeRopa == "pantalon" && talla == "L") {
    console.log("Te recomendamos el pantalón azul");
} 
else {
    console.log("No tenemos lo que buscas");
}


// Pedimos al usuario que ingrese las cantidades vendidas de cada modelo
let zapatillasModelo1 = parseFloat(prompt("Ingrese la cantidad vendida del modelo 1:"));
let zapatillasModelo2 = parseFloat(prompt("Ingrese la cantidad vendida del modelo 2:"));
let zapatillasModelo3 = parseFloat(prompt("Ingrese la cantidad vendida del modelo 3:"));

// Preguntamos al usuario si desea incluir un descuento en el cálculo
let aplicarDescuento = confirm("¿Desea aplicar un descuento a las ventas? (Ok para sí, Cancelar para no)");

// Función para calcular el promedio de ventas, opcionalmente con descuento
function calcularPromedioVentas(modelo1, modelo2, modelo3, descuento) {
let totalVentas = modelo1 + modelo2 + modelo3;
if (descuento) {
    totalVentas *= 0.9; // Aplica un descuento del 10%
}
let promedioVentas = totalVentas / 3;
return promedioVentas;
}

// Llamamos a la función y mostramos el resultado
let promedio = calcularPromedioVentas(zapatillasModelo1, zapatillasModelo2, zapatillasModelo3, aplicarDescuento);
console.log("El promedio de ventas", (aplicarDescuento ? "con descuento" : ""), "es:", promedio, "zapatillas.");


// Definimos los nombres de mis productos, talles y precios
let productos = [
    { nombre: "Jeans", tallas: ["S", "M", "L"], colores: ["azul", "negro"], estilos: ["slim", "regular"] },
    { nombre: "Zapatillas Nike Air Max", precio: 120, tallas: [38, 39, 40], colores: ["negro", "blanco"] },
    { nombre: "Camiseta algodón orgánico", precio: 25, tallas: ["S", "M", "L", "XL"], colores: ["blanco", "gris", "azul"] },
];

// Función para encontrar una recomendación basada en múltiples criterios
function recomendar(tipoDeRopa, talla, estilo) {
    for (let producto of productos) {
        if (producto.nombre === tipoDeRopa && producto.tallas.includes(talla) && (estilo ? producto.estilos.includes(estilo) : true)) {
        return producto;
        }
    }
    return "No tenemos lo que buscas";
}
let recomendacion = recomendar("Jeans", "M", "slim");
console.log(recomendacion);

let nombresProductos = ["Zapatillas Nike Air Max", "Camiseta algodón orgánico"];

let carrito = [
    { producto: productos[0], cantidad: 2 },
    { producto: productos[1], cantidad: 1 },
];

for (let i = 0; i < productos.length; i++) {
    console.log("Producto:", productos[i].nombre);
    console.log("Precio:", productos[i].precio);
    console.log("Tallas disponibles:", productos[i].tallas);
    console.log("Colores disponibles:", productos[i].colores);
}

function calcularPrecioTotalProducto(producto, cantidad) {
    return producto.precio * cantidad;
}
let total = 0;
for (let item of carrito) {
    total += calcularPrecioTotalProducto(item.producto, item.cantidad);
}
console.log("El total de tu compra es:", total);




