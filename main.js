/* Formulario  */



let nombreIngresado   = prompt("¡Muchas gracias por elegirnos! Por favor ingresa tu nombre.");
let apellidoIngresado = prompt("Ingresa tu apellido.");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenido/a: "+nombreIngresado +" "+apellidoIngresado); 
}else{
    alert("Error: Recorda ingresar tu nombre y tu apellido.");
}


let torta1 = 10;
let precioTorta1 = 600;
let nombreTorta1 = "Lemon pie"

let torta2 = 8;
let precioTorta2 = 800;
let nombreTorta2 = "Budin marmolado"


const multiplicar  = (a,b) => a * b;


let cantidad = prompt("Hola" +" "+ nombreIngresado + " " + "por favor ingrese la cantidad de productos que desea.");


for(let i = 1; i < 1000; i++) {


   if (cantidad <= torta1) {
       torta1 -=cantidad;
       console.log(torta1)
       let precioTotal = (multiplicar (precioTorta1,cantidad));
   
     
   if(precioTotal > 300) {
           precioTotal = (multiplicar (precioTotal, 1));
          
     alert ("¡Perfecto! su importe a abonar es "+"$"+ precioTotal+"\nAhora para finalizar le pedimos que complete el formulario.") 
     
   }}

 }

let stocktorta1 = torta1 - cantidad;


