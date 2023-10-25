// ------------------- Ejemplo 1: Foreach ----------------------//
//Se utiliza para iterar sobre elementos de un arreglo y ejecuta una función para cada elemento. 

//No devuelve un nuevo arreglo, trabaja sobre el original. 

const frutas = ["Manzana", "Pera", "Platano"]

frutas.forEach(frutas => {
    console.log(frutas);
})

//---------------------Ejemplo 2 -----------------------------//
//Cuando se tiene que modificar el arreglo original.

const numeros = [1, 2, 3, 4, 5]

//Cada forEach puede recibir 3 argumentos: elemento, índice y el arreglo completo. 
numeros.forEach((numero, índice, arreglo) => {
    console.log(`${numero}, ${índice}, ${arreglo}`);
})

//Utilizar el forEach para realizar una operación matemática con los valores de un arreglo. 
const valores = [10, 20, 30, 40, 50]

let suma = 0 

valores.forEach(valor =>{
    suma += valor
})

console.log(suma);