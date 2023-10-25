//La desustruración de arreglos en JS es una característica que te permite extraer valores de un arreglo
//y asignarlos a variables/constantes individuales de una manera más conveniente. 

//Asignación de valores a variables individuales:
const arreglo = [1, 2, 3]

//Desestructuración:
let [primerValor, segundoValor, tercerValor] = arreglo
console.log(tercerValor)

// ---------------------------- Ejemplo 2 ---------------------------------------
//Omitir valores no deseados.

const arregloDos = [1, 2, 3, 4, 5, 6, 7]

//Desestructuración con elementos no deseados:
let [valorUno, valorDos, valorTres, , , , valorSiete] = arregloDos
console.log(valorDos);


