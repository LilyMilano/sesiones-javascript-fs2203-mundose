//alert('Bienvenidos');

//let numeroEntero = parseInt(17);
//let numeroDecimal = parseFloat(17.5);

let edad = parseInt(prompt('Ingrese edad'));

//console.log(edad);

let edadMinima = 16;
let edadMaxima = 18;

//Rango de edad para entrar al club, pero no al bar:

if((edad >= edadMinima) && (edad <= edadMaxima)){
    alert('Usted puede ingresar al club, pero no puede ingresar al bar');
}

//Si es menor de 16 no puede ingresar al club.
//Si es mayor de 18 puede ingresar al club y al bar.

if(edad < edadMinima){
    alert('Usted no puede ingresar al club');
} else if(edad > edadMaxima){
    alert('Bienvenido al club, hay 2x1 en el bar');
}



