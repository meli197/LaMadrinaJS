/* Formulario  */




function Producto(id, nombre, precio, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.stockTotal = function (cantidad) {
        this.stock += cantidad
    }
}




const producto1 = new Producto(1, "Lemon pie", 600, 10)
const producto2 = new Producto(2, "Torta mani", 800, 8)
const producto3 = new Producto(3, "Tosa de chocolate", 900, 7)

const calcularPrecio = (a, b) => a * b;


console.log(producto1.nombre.toLowerCase())
producto1.stockTotal(5)
console.log(producto1.stock)

const listaDeProductos = [producto1, producto2, producto3]


for (const producto of listaDeProductos) {
    console.log(producto)
}

const listadeProductos = [];
listaDeProductos.push(new Producto(4, "Red velvet", 750, 6))
listaDeProductos.push(new Producto(5, "Selva negra", 675, 9))

for (const producto of listaDeProductos) {
    console.log(producto)
}


const economicos = listaDeProductos.filter(listaDeProductos => listaDeProductos.precio < 700)

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}

function verStock() {
    let grilla = document.getElementById("grilla")


    for (const producto of listaDeProductos) {
        let card = document.createElement("div")
        card.innerHTML = `<h2> ${producto.nombre} </h2>
                      <p> Precio: ${producto.precio} </p>
                      <p> Stock disponible: ${producto.stock} </p> `


        grilla.appendChild(card)
    }
}

let verStockButton = document.getElementById("verStockButton");

verStockButton.addEventListener("click", verStock)

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaDeProductos", JSON.stringify(productos));

const almacenados = JSON.parse(localStorage.getItem("listaDeProductos"));
const productos = [];

function cargarLista() {
    let listaDeProductos = JSON.parse(localStorage.getItem("Lista de productos"))

}