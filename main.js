/* Formulario  */



let nombreIngresado   = prompt("¡Muchas gracias por elegirnos! Por favor ingresa tu nombre.");
let apellidoIngresado = prompt("Ingresa tu apellido.");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenido/a: "+nombreIngresado +" "+apellidoIngresado); 
}else{
    alert("Error: Recorda ingresar tu nombre y tu apellido.");
}

function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock  = stock
    this.stockTotal = function (cantidad){
        this.stock += cantidad
}}




const producto1 = new Producto ("lemon pie",600,10)
const producto2 = new Producto ("torta mani",800, 8)
const producto3 = new Producto ("rosa de chocolate", 900, 7)

const multiplicar  = (a,b) => a * b;


let cantidad = prompt("Hola" +" "+ nombreIngresado + " " + "por favor ingrese la cantidad de productos que desea.");

for(let i = 1; i < 50; i++) {


   if (cantidad <= producto1.stock) {
       producto1.stock -=cantidad;
       console.log(producto1.stock)
       let precioTotal = (multiplicar (producto1.precio,cantidad));
   
     
   if(precioTotal > 300) {
           precioTotal = (multiplicar (precioTotal, 1));
          
     alert ("¡Perfecto! su importe a abonar es "+"$"+ precioTotal+"\nAhora para finalizar le pedimos que complete el formulario.") 
     
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
listaDeProductos.push (new Producto ("red velvet", 750, 6))
listaDeProductos.push (new Producto ("selva negra", 675, 9))

for (const producto of listaDeProductos){
    console.log(producto)
}

const encontrado = listaDeProductos.find(elemento => elemento === producto3)