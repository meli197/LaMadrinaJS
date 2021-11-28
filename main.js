/* Formulario  */

let nombreIngresado   = prompt("¡Muchas gracias por elegirnos! Por favor ingresa tu nombre.");
let apellidoIngresado = prompt("Ingresa tu apellido.");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Recorda ingresar tu nombre y tu apellido.");
}

let torta1 = 15;
let torta2 = 8;
let torta3 = 17;
let torta4 = 9;
let torta5 = 12;
let torta6 = 5;
let torta7 = 25;

let cantidad = prompt("Hola" +" "+ nombreIngresado + " " + "por favor ingrese la cantidad de productos que desea.");

let stock = torta1 - cantidad;

alert ("¡Perfecto! Ahora para finalizar le pedimos que complete el formulario.")




