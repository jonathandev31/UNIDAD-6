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

const persona = {
    nom: "Jonathan",
    ap: "Fernandez",
    ed: 21,
    hablar: function () {
        msj = "hola! Mi nombre es " + this.nom;
        return msj;
    }
}

console.log( persona.hablar());
console.log(persona.nom);

class Animal {
    constructor (nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar () {
        msj = "hola! soy un animal y mi nombre es " + this.nombre;
        return msj;
    }
}

const perro =  new Animal("Dara", "Hembra");
console.log(perro);

class Gato extends Animal {
    constructor (nombre, genero, color) {
        super(nombre, genero);
        this.color = color;
        this.raza = null;
    }

    // Sobreescritura de metodod / Polimorfismo

    saludar () {
        msj = "hola! soy un gato y mi nombre es " + this.nombre + " y mi raza es " + this.raza;
        return msj;
    }
    get getRaza() { // Metodo GET accesor 
        return this.raza;
    }
    set setRaza(raza) {    // Metodo SET modificador
        this.raza = raza;
    }
}

const annie = new Gato ("Annie", "Hembra", "Cafe con negro");

console.log(annie);
console.log(annie.saludar());

annie.setRaza = "Carey";

console.log(annie.saludar());