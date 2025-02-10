// Crear elementos en el DOM
const app = document.getElementById("app");

// Formulario para preguntar nombre
const nombreInput = document.createElement("input");
nombreInput.placeholder = "¿Cuál es tu nombre?";
const nombreBtn = document.createElement("button");
nombreBtn.textContent = "Ingresar";
const bienvenida = document.createElement("p");

// Evento para mostrar bienvenida
nombreBtn.addEventListener("click", () => {
    bienvenida.textContent = `Bienvenido, ${nombreInput.value}`;
});

// Formulario para elegir ropa
tipoDeRopaInput = document.createElement("input");
tipoDeRopaInput.placeholder = "¿Qué estás buscando?";
tallaInput = document.createElement("input");
tallaInput.placeholder = "¿Qué talle eres?";
const ropaBtn = document.createElement("button");
ropaBtn.textContent = "Buscar";
const recomendacion = document.createElement("p");

ropaBtn.addEventListener("click", () => {
    let tipoDeRopa = tipoDeRopaInput.value.toLowerCase();
    let talla = tallaInput.value.toUpperCase();
    let precio = Math.floor(Math.random() * 50) + 20; // Genera un precio aleatorio entre 20 y 70
    let mensaje;
    
    if (tipoDeRopa === "camisa" && talla === "S") {
        mensaje = `Te recomiendo la camisa de manga corta de color azul - Precio: $${precio}`;
    } else if (tipoDeRopa === "camisa" && talla === "M") {
        mensaje = `Te recomiendo la camisa de manga larga de color rojo - Precio: $${precio}`;
    } else if (tipoDeRopa === "camisa" && talla === "L") {
        mensaje = `Te recomiendo la camisa de manga corta de color verde - Precio: $${precio}`;
    } else if (tipoDeRopa === "pantalon" && talla === "S") {
        mensaje = `Te recomendamos el pantalón negro - Precio: $${precio}`;
    } else if (tipoDeRopa === "pantalon" && talla === "M") {
        mensaje = `Te recomendamos el pantalón gris - Precio: $${precio}`;
    } else if (tipoDeRopa === "pantalon" && talla === "L") {
        mensaje = `Te recomendamos el pantalón azul - Precio: $${precio}`;
    } else {
        mensaje = "No tenemos lo que buscas";
    }
    recomendacion.textContent = mensaje;
});

// Carrito de compras con LocalStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoContainer = document.getElementById("carrito") || document.createElement("div");
    carritoContainer.id = "carrito";
    carritoContainer.innerHTML = "<h2>Carrito de Compras</h2>";
    
    let total = 0;
    if (carrito.length === 0) {
        carritoContainer.innerHTML += "<p>El carrito está vacío.</p>";
    } else {
        carrito.forEach((producto, index) => {
            total += producto.precio;
            const item = document.createElement("p");
            item.textContent = `${producto.tipo} - Talla: ${producto.talla} - Precio: $${producto.precio}`;
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Eliminar";
            removeBtn.addEventListener("click", () => eliminarDelCarrito(index));
            item.appendChild(removeBtn);
            carritoContainer.appendChild(item);
        });
        const totalElement = document.createElement("p");
        totalElement.textContent = `Total: $${total}`;
        carritoContainer.appendChild(totalElement);
    }
    app.appendChild(carritoContainer);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Ejemplo de agregar un producto
ropaBtn.addEventListener("click", () => {
    let producto = { 
        tipo: tipoDeRopaInput.value, 
        talla: tallaInput.value, 
        precio: Math.floor(Math.random() * 50) + 20 
    };
    agregarAlCarrito(producto);
});

// Agregar elementos al DOM
app.appendChild(nombreInput);
app.appendChild(nombreBtn);
app.appendChild(bienvenida);
app.appendChild(tipoDeRopaInput);
app.appendChild(tallaInput);
app.appendChild(ropaBtn);
app.appendChild(recomendacion);

// Mostrar carrito al cargar la página
mostrarCarrito();
