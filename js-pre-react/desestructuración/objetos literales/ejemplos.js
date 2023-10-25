//La desustruración de objetos literales en JS te permite extraer propiedades de un objeto y asignarlas
//a variables/constantes individuales de manera más consciente. 

const persona = {
    nombre: "Nizaye",
    edad: 25,
    ciudad: "Gdl"
}
//Desustruración:
let  {nombre, edad, ciudad}= persona 
console.log(nombre, ciudad, edad);

// ---------------------------- ejemplo 2 -----------------------------------//
//Ejemplo para darle un alías a las propiedades que se destructuran cuando ya existe una igual. 

const animal ={
    especie: "perro",
    nombre: "Venus",
    raza: "golden retriever",
    tamaño: "grande"
}
//destructuración:
let {nombre: nombreAnimal} = animal

console.log(nombreAnimal);

//---------------------------- ejemplo 3 -----------------------------------//
//Definir valores por defecto. 

const materias ={
    materia: "español",
    duración: "2 horas",
    maestra: undefined
}

let {materia, duración, maestra = "Ms. Iva"} = materias

console.log(materia, duración, maestra);

// ---------------------------- ejemplo 4 -----------------------------------//
//Desestructuración anidada. 

const persona2 ={
    nombre: undefined,
    edad: 19,
    ciudad: "CDMX",
    dirección: {
        calle: "Calle inventada 123",
        colonia: "Colonia Homs"
    } 
}

let {nombre: nombreDos = "Norma", ciudad: ciudad2, dirección} = persona2

console.log(nombreDos, ciudad2, dirección);

// ---------------------------------- ejemplo 5 -------------------------------------//
//Desestructuración de objetos como párametros de funciones (PROPS)

function printInfo ({codigo, carrera}) {
    console.log(`Alumno No.: ${codigo}, Carrera: ${carrera} `)
}

const alumnos = {
    codigo: "2345",
    carrera: "Psicología",
    grado: "sexto semestre"
}

console.log(printInfo());