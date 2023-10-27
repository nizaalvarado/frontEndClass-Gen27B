//El operador ternario es una forma conscisa de escribir una declaración condicional. 
//Asignar una función en cuestión de que se valore una constante. 

const edad = 16;

// Consta de 3 elementos: 

const mensaje = (edad >= 18) ? "Eres mayor de edad" : "No eres mayor de edad"

console.log(mensaje);

// Ejemplo 2:

//En base a una condición decir si un día es laboralble o no. Retornar "laborable" o "descanso";

const diaLaboral = true

const respuesta = diaLaboral ? "Tienes que venir a trabajar" : "Puedes descansar ese día"

console.log(respuesta);

// Ejemplo 3:

//En base a una condición retornar si un número es par o impar. 

function numeroPar (numero) {
    return numero %2 === 0 ? "Es par" : "Es impar"
    
}

console.log(numeroPar(34));