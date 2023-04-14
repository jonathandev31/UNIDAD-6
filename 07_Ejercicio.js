let num1 = 14,
    num2 = 4 

function sumar (a,b){
    return a + b;
}

let resultado = sumar ( num1, num2 );
console.log ( resultado );

// Funcion declarada

function saludar (){
    let mensaje = "Hola Mundo!";
    return mensaje;
}

console.log (saludar());

// Funcion expresada

const saludo = function (){
    msj = "Otro hola mundo!";
    return msj;
}

console.log ( saludo () );

/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------")

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones

function carrera(nombre="desconocido", carrera="desconocido"){
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Juan", "desarrollo de web")
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion

// Ejercicio

// Punto 4

function suma (numeroUno, nuemroDos){
    return numeroUno + nuemroDos;
}
function resta (numeroUno, nuemroDos){
    return numeroUno - nuemroDos;
}
function division (numeroUno, nuemroDos){
    return numeroUno / nuemroDos;
}
function multiplicacion (numeroUno, nuemroDos){
    return numeroUno * nuemroDos;
}

console.log (resta (4,7));
console.log (suma (4,7));
console.log (division (4,7));
console.log (multiplicacion (4,7))

// Punto 5

function convertirDolarAPesos (valorDolar) { 
    const pesos = 4423;
    let cantidadPesos = (valorDolar*pesos) / 1;
    return cantidadPesos;
}

console.log("La conversion de 30 solares a pesos colombianos", convertirDolarAPesos (30));

function convertirPesosADolar (valorPesos) { 
    const dolar = 1;
    let cantidadDolares = (valorPesos*dolar) / 4423;
    return cantidadDolares;
}

console.log("La conversion de 132690 pesos a dolares estadounidense", convertirPesosADolar (132690));

// Punto 6

function areaCuadrado ( lado ) {
    return lado**2;
}

function areaCirculo ( radio ) {
    const PI = 3.1416;
    return PI * radio**2;
}

function areaTriangulo ( base, altura ) {
    return ( base * altura ) / 2;
}

console.log (areaCuadrado(10));
console.log (areaCirculo(4));
console.log (areaTriangulo(2,4));


