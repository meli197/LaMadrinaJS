/* Formulario  */

let nombreIngresado   = prompt("¡Muchas gracias por elegirnos! Por favor ingresa tu nombre.");
let apellidoIngresado = prompt("Ingresa tu apellido.");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenido/a: "+nombreIngresado +" "+apellidoIngresado); 
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
for(let torta1 = 1; torta1 < 150; torta1++) {
    
if (torta1 == 15) {
   break;
}

alert ("¡Perfecto!" + " " +nombreIngresado +" "+" Ahora para finalizar le pedimos que complete el formulario."+ " " + "Le informamos que el stock disponible es" +" "+torta1)
}
let stock = torta1 - cantidad;


