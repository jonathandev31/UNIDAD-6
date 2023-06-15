/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------")

try {
    //Si no hay ningun error se ejecuta el bloque try
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${suma}`);
} catch (err) {
    //Si encuentra un error ejecuta el siguiente codigo
    console.log('Hay un error!');
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------")

try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (err) {
    console.log('Hay un error!');
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------")

try {
    console.log("En el try se agrega el codigo a evaluar")
    noExiste; //genera un error porque noExiste no esta definida
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error) //imprime el error
} finally {
    console.log("Finally se ejecuta siempre al final de un bloque try-catch")
}

//Personalizacion de mensajes de error

console.log("-----------------Personalización mensajes de error----------------------")

try {
    let numero= 4;
    if(isNaN(numero)){ //El metodo isNaN() evalua si la variable es de tipo numererico o no
        //Definición del nuevo mensaje de error  throw new Error()
        //console.log(isNaN(numero))
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}

// Ejercicio

// Punto 4

try {
    let numero1 = "7";
    if (isNaN(numero1)) throw new Error ("¡Cuidado! No se reciben datos no numéricos.");
    console.log ("La variable " + numero1 + " si es de un numero")
} catch (error) {
    console.log(error);
} finally {
    console.log("Análisis de datos terminado.")
}

// Punto 5

    function errorTipoNumerico (numeroUno, nuemroDos) {
        if ( isNaN (numeroUno) || isNaN (nuemroDos) ) throw new Error ("No se reciben datos no numéricos.");
    }

    function suma (numeroUno, nuemroDos){
        errorTipoNumerico (numeroUno, nuemroDos);
        return numeroUno + nuemroDos;

    }
    function resta (numeroUno, nuemroDos){
        errorTipoNumerico (numeroUno, nuemroDos);
        return numeroUno - nuemroDos;
    }

    function division (numeroUno, nuemroDos){
        errorTipoNumerico (numeroUno, nuemroDos);
        if ( nuemroDos == 0 ) throw new Error ("La division por cero no es posible."); 
        return numeroUno / nuemroDos;
    }

    function multiplicacion (numeroUno, nuemroDos){
        errorTipoNumerico (numeroUno, nuemroDos);
        return numeroUno * nuemroDos;
    }

    function potencia (numeroUno, nuemroDos) {
        errorTipoNumerico (numeroUno, nuemroDos);
        return numeroUno ** nuemroDos;
    }

    function raizCuadrada (numeroUno) {
        errorTipoNumerico (numeroUno, 0);
        if ( numeroUno < 0 ) throw new Error ("No es posible hacer la raiz cuadrada a numero negativos"); 
        return Math.sqrt( numeroUno )
    }

try {
    console.log (resta (4,"9"));
    console.log (suma (4,7));
    console.log (division (4,7));
    console.log (multiplicacion (4,7))
    console.log (potencia (4,7));
    console.log (raizCuadrada (-4));
} catch (error) {
    console.log (error);
}