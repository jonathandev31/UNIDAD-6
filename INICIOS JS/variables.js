var nombre = "Jonathan";
console.log(nombre);

let apellido = "Fernandez";
console.log(apellido);

console.log("Este es el nombre completo",nombre,apellido);

const edad = 21;
console.log(edad);

// lenguaje debilmente tipado

let a=1, b=2 , c;

c = a + b;
console.log(c);

b = "2";
c = a + b;
console.log(c); // lo toma como suma de caracteres

// tipo de dato: String

var hola = "Hola mundo";
console.log( typeof hola);

// tipo de dato: Númerico

var numero = 12;
console.log( typeof numero);

// tipo de dato: Booleano

var BANDERA = true;
console.log( typeof BANDERA);

// tipo de dato: Symbol

var simbolo = Symbol ("Esto es un simbolo");
console.log( typeof simbolo);

// tipo de dato: undefined

var dato = undefined;
console.log( typeof dato);

// OBJETOS

// tipo de dato: obejto - object
var objeto = {
    nombre1 : "Jonathan",
    apellido1 : "Fernandez",
    telefono: 3245413061
}
console.log(objeto);
console.log( typeof objeto);

// array 
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log( typeof autos);

// Nulo
var y = null

// funcion

function myfuncion (){

}
console.log(myfuncion);
console.log( typeof myfuncion);

// tipo de dato: clase, tambien son clases

class Persona {
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log( Persona);
console.log(typeof Persona);