console.log("------------------------if/else---------------------------");
let edad = 26;

if ( edad >= 18 ) { //Inicio de la condicion
    console.log ("Eres mayor de edad, preparate:)"); //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida:)"); //Instruccion si no se cumple.
}

console.log("-----------------Condicional anidada----------------------");

let hora = 2545;

if ( hora >= 0 && hora <= 5 ) { //Primera condición
    console.log("Dejen dormir!");
} else if ( hora >= 6 && hora <= 11 ){ //Segunda condición
    console.log("Buenos días!");
} else if( hora >= 12 && hora <= 18 ){ //Tercera condición
    console.log("Buenas tardes!");
} else if( hora >= 19 && hora <= 23 ){
    console.log("Buenas noches!");//Instruccion si no se cumple ninguna condición
} else {
    console.log("Hora invalida");
}

console.log("-----------------Operador ternario----------------------")

let a=8,
    b=3

let esMayor = ( a > b ) ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`
console.log(esMayor);

console.log("-----------------switch/case----------------------")

let dia=3

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día es sabado")
        break;

    default:
        console.log("el día no existe")
        break;
}

// Ejercicio

// Punto 1

let numeroUno = 1,
    numeroDos = 3,
    numeroTres = 2

if ( numeroUno < numeroDos && numeroDos < numeroTres) {
    console.log (numeroUno, numeroDos, numeroTres);
} else if ( numeroDos > numeroUno  && numeroDos > numeroTres && numeroUno < numeroTres ) {
        console.log (numeroUno, numeroTres, numeroDos);
} else if ( numeroUno > numeroDos  && numeroUno > numeroTres && numeroDos > numeroTres ) {
    console.log (numeroTres, numeroDos, numeroUno);
} else if ( numeroUno > numeroDos  && numeroUno < numeroTres && numeroDos < numeroUno ) {
    console.log (numeroDos, numeroUno, numeroTres);
} else if ( numeroUno < numeroDos  && numeroUno > numeroTres && numeroDos > numeroTres ) {
    console.log (numeroTres, numeroUno, numeroDos);
} else if ( numeroUno > numeroDos  && numeroUno > numeroTres && numeroDos < numeroTres ) {
    console.log (numeroDos, numeroTres, numeroUno);
}

// Punto 2

let numero = 1;

if ( numero % 2 == 0 ){
    console.log ( "El numero", numero, "es par.");
} else console.log  ( "El numero", numero, "es impar.");

// Punto 3

let cantidadDocenas = 1,
    valorDocena = 60000,
    valorCompra = valorDocena * cantidadDocenas,
    descuento

if ( cantidadDocenas >= 0 ){
    if ( cantidadDocenas >= 10 ){
        descuento = valorCompra * 0.2;
    } else if ( cantidadDocenas >= 5) {
        descuento = valorCompra * 0.15;
    } else if ( cantidadDocenas > 1) {
        descuento = valorCompra * 0.1;
    } else descuento = 0;

    let valorFinal = valorCompra - descuento;
    
    console.log(`Cantidad de decenas: ${cantidadDocenas}`);
    console.log(`Valor de cada docena: ${valorDocena}`);
    console.log(`Valor de la compra: ${valorCompra}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Valor final de la compra: ${valorFinal}`);

} else console.log("Error");



