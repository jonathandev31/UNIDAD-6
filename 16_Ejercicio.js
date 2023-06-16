/*Expresiones regulares.
Ayudan a encontrar texto utilizando patrones representados mediante cadenas de textos en los cuales cada símbolo tiene un significados.
En el siguiente ejemplo se busca dentro del arreglo las palabras que cumpla las siguientes condiciones:
    -Que empiece por las letras O y G.
    -Que termine por la letra S.
*/

//Array que recibe el texto a evaluar.
const palabras = ["Osos", "Arroz", "Gatos", "Guitarra", "Orca", "Cama"];

// Ejercicio sin usar expresiones regulares

console.log("-----------Ejemplo sin expresiones regulares----------------")
palabras.forEach(function(palabra) { //Se recorre el arreglo
    //Con el metodo at(0) se obtiene la primera letra de la palabra y at(-1) obtiene la ultima letra
    //Con el método toLowerCase() se pasa la letra a minuscula y así sea mas sencillo hacer las comparaciones.
    let primeraLetra = palabra.at(0).toLowerCase(); 
    let ultimaLetra = palabra.at(-1).toLowerCase();
  
    //Comparación de las letras obtenidas y así establecer si cumple o no las condiciones.
    if ((primeraLetra === "o" || primeraLetra === "g") && (ultimaLetra === "s")) {
      console.log(`La palabra "${palabra}" cumple las condiciones.`);
    } else {
      console.log(`La palabra "${palabra}" no cumple las condiciones`)
    }
  });

// Ejercicio usando expresiones regulares

console.log("-----------Ejemplo con expresiones regulares----------------")
palabras.forEach(function(palabra) { //Recorre el arreglo.
    //Usando las barras // se define la expresión regular. Fuera de las barras va la bandera de la expresion regular.
    let expReg = /^(o|g).+(s)$/i;
  
    if (expReg.test(palabra)) { //El método test() devuelve verdadero si cumple la expresion regular.
      console.log(`La palabra "${palabra}" cumple las condiciones.`);
    } else {
      console.log(`La palabra "${palabra}" no cumple las condiciones`)
    }
  });

// Ejercicio utilizando el constructor RegExp()

console.log("-----------Ejemplo 2 con expresiones regulares----------------")

let cadena="lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus nulla corrupti cumque modi, quae eligendi velit perspiciatis maiores labore vel ipsum, quod pariatur quisquam esse? Neque iste ipsum hic."

let expReg= new RegExp("ipsum","i");
console.log(expReg.test(cadena)) //devuelve un false o un true dependiendo si se cumple la expresión regular
console.log(expReg.exec(cadena)) //devuelve un arreglo con más informacion sobre la expresion

// Ejercicio 4

let palabrasExpReg = [ 
    'edificio', 
    'perla', 
    'estrella', 
    'pescado', 
    'salero', 
    'biblioteca', 
    'guitarra', 
    'dinero', 
    'música' ];

let expresionRegular = /^\w+(A)$/i;

for ( i of palabrasExpReg ) {
    if ( expresionRegular.test( i ) ) console.log( "La palabra " + i + " es un sustantivo femenino" );
    else console.log( "La palabra " + i + " es un sustantivo masculino" );

}

// Ejercicio 5

let correoExpReg = /^\w+[.-_]?\w+@\w+(.com|.es|.co)$/i;

let email = "jonathan.fernadez31@gmail.com";

if ( correoExpReg.test(email) ) console.log( "El email " + email + " es correcto");
else console.log( "El email " + email + " no es corecto" );

// Ejercicio 6

let validadorContraseñas = /()/;
let contraseña = "Yuli3119";

if ( correoExpReg.test(contraseña) ) console.log( "La contraseña " + contraseña + " es correcta");
else console.log( "La contraseña " + contraseña + " no es corecta" );