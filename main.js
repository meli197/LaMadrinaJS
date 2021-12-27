/* Formulario  */



let nombreIngresado   = prompt("¡Muchas gracias por elegirnos! Por favor ingresa tu nombre.");
let apellidoIngresado = prompt("Ingresa tu apellido.");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenido/a: "+nombreIngresado +" "+apellidoIngresado); 
}else{
    alert("Error: Recorda ingresar tu nombre y tu apellido.");
}

function Producto(id, nombre, precio, stock){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock  = stock
    this.stockTotal = function (cantidad){
        this.stock += cantidad
}}




const producto1 = new Producto (1,"lemon pie",600,10)
const producto2 = new Producto (2,"torta mani",800, 8)
const producto3 = new Producto (3,"rosa de chocolate", 900, 7)

const calcularPrecio  = (a,b) => a * b;


let cantidad = prompt("Hola" +" "+ nombreIngresado + " " + "por favor ingrese la cantidad de productos que desea.");

for(let i = 1; i < 50; i++) {


   if (cantidad <= producto1.stock) {
       producto1.stock -=cantidad;
       console.log(producto1.stock)
       let precioTotal = (calcularPrecio (producto1.precio,cantidad));
       
   
     
   if(precioTotal > 300) {
           precioTotal = (calcularPrecio (precioTotal, 1));
          
     alert ("¡Perfecto! su importe a abonar es "+"$"+ precioTotal+"\nAhora para finalizar le pedimos que complete el formulario.") 
     break;
   }}

 }


console.log(producto1.nombre.toLowerCase())
producto1.stockTotal(5)
console.log(producto1.stock)

const listaDeProductos = [producto1, producto2, producto3]


for (const producto of listaDeProductos){
    console.log(producto)
}

const listadeProductos = [];
listaDeProductos.push (new Producto (4,"red velvet", 750, 6))
listaDeProductos.push (new Producto (5,"selva negra", 675, 9))

for (const producto of listaDeProductos){
    console.log(producto)
}


const economicos = listaDeProductos.filter(listaDeProductos => listaDeProductos.precio < 700)

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado"); }
    
let grilla = document.getElementById(grilla)


for (const producto of listaDeProductos){
    let card = document.createElement("div")
    card.innerHTML = `<h2> ${producto.nombre} </h2>
                      <p> Precio: ${producto.precio} </p>
                      <p> Stock disponible: ${producto.stock} </p> `


grilla.appendChild(card)                     
}


