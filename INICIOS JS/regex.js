// Se hara un ejemplo de una expresion regular

let miRegEx = /as?.a/;
let msg = ' as?.a';

let cadenas = [ 'casamentero', 'castaño', 'sabina', 'casualidad', 'asador', 'canasta', 'java' ];

for (i of cadenas) {
    sal = "¿Contiene " + i + " el patron" + msg + " : " + miRegEx.test(i);
    console.log(sal);
}

// Ejercicio de clase 

let miRegExDos = /^[A-C]\w+\ses\s\w+/;
let msgDos = ' ^[A-C]\w+\ses\w+';

let cadenasDos = [ 'Juan es guapo', 
                'Adriano no es feo', 
                'Adriano deja de ser guapo', 
                'Adriano ya es guapo', 
                'No es ahora', 
                'Ahora es no', 
                'Adriano es guapo' ];

for ( i of cadenasDos ) {
    salDos = "¿Contiene " + i + " el patron" + msgDos + "? : " + miRegExDos.test( i );
    console.log(salDos);
}
