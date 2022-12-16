//Función arrow o implícitas
let nombre = prompt("Ingresar nombre");

const saludar = nombre=> { alert (`Te damos la bienvenida ${nombre}`) };

saludar(nombre);