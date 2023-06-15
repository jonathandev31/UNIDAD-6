// Se hara un ejemplo de una expresion regular

let miRegEx = /as?.a/;
let msg = 'as?.a';

let cadenas = [ 'casamentero', 'castaño', 'sabina', 'casualidad' ];

for (i of cadenas) {
    sal = "¿Contiene " + i + " el patron" + msg + " : " + miRegEx.test(i);
    console.log(sal);
}
