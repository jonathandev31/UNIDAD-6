try {
    console.log("Inicio");
    let suma = 15 + 13;
    console.log("El resultado es " + suma);
} catch (error) {
    console.log("Se ignora el catch porque no hay errores"); 
}

try {
    console.log("Inicio");
    let suma = 15 + 13;
    console.log("El resultado es " + resultado);
} catch (error) {
    console.log("Hay un error! " + error); 
}

try {
    let numeroUsuario = 9;
    if ( isNaN ( numeroUsuario ) || numeroUsuario < 1 || numeroUsuario > 9 ) {
        throw new Error ( "Numero introducido no valido" );
    } else {
        console.log( "Sin problemas" );
    }
} catch ( error ) {
    console.log( " Se ha producido un error! " + error );
}