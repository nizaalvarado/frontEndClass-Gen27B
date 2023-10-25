//La estructura MAP se suele utilizar para crear un nuevo arreglo a partir de otro, aplicando una 
//función a cada elemento del arreglo original. 

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero =>{
    //Otros códigos... 
    return numero * 2
})

//El map se utiliza para mapearlo y crear un arreglo nuevo. 

console.log("Arreglo original", numeros)
console.log("Números duplicados", numerosDuplicados );


// ------------------------------- Ejemplo 2 ------------------------------------//
//Convertir un arreglo de nombres, en un arreglo de saludos. 

const nombres = ["Juan", "Norma", "Yahir"]
const saludos = nombres.map(nombre =>{
    return "Hola " + nombre
})

console.log(saludos);