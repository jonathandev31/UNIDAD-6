console.log("----------------------Asignación---------------------------");
let x = 12;
let z = 16;

console.log(`El valor de x es ${x} y el valor de z es ${z}`);

console.log("-------------------Incremento y decremento---------------------");
x++; //Incremento en una unidad al valor de x
z--; //Decremento en una unidad al valor de z
console.log(`El valor de x incrementado es ${x} y de z con decremento es ${z}`);

console.log("------------------Operadores lógicos-----------------------");

let valorUno = true;
let valorDos = false;

console.log("Negación.", !valorDos);

console.log("AND.", (valorUno && valorDos));

console.log("OR.", (valorUno || valorDos));

console.log("-----------------Operadores mátematicos----------------------")

let a=9, b=56;

let suma = a + b, 
    resta = a - b,
    multiplicacion = a * b,
    division = a / b

console.log(`El valor de la suma es ${suma}
El valor de la resta es ${resta}
El valor de la multipliacion es ${multiplicacion}
El valor de la división es ${division}`);

console.log("-----------------Operadores comparación----------------------");

let mayor = a > b,
    menor = a < b,
    mayorIgual = a >= b,
    menorIgual = a <= b,
    igual = a == b,
    distinto = a != b

console.log(`La variable ${a} es mayor que ${b}: ${mayor}
La variable ${a} es menor que ${b}: ${menor}
La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
La variable ${a} es menor o igual que ${b}: ${menorIgual}
La variable ${a} es igual que ${b}: ${igual}
La variable ${a} es distinta que ${b}: ${distinto}`);

// Ejercicio
// 1.
let a1 = 10,
    b1 = 20,
    c1 = 30

let resultadoUno = ( a1 * b1 ) / c1,
    resultadoDos = (b1 + c1 ) * a1,
    resultadotres = ( a1 / b1 ) - ( a1 + c1 )

console.log ( `El resultado de la operacion uno es ${resultadoUno}
El resultado de la operacion dos es ${resultadoDos}
El resultado de la operacion tres es ${resultadotres}`)

// 2.

let resultadoCuatro = ( a1 % 3 ) / c1;
console.log ( `El resultado de la operacion cuatro es ${resultadoCuatro}`)

// 3.
let d1 = 15;
d1 += 3; 

console.log("El resultado de incrementar en 3 a la variable d1 es:", d1);

// 4.
let p = true,
    q = false

console.log  (`| P | | Q | | P && Q |`);                
console.log  (`| ${p} | | ${!q} || ${ p && !q } |`);  
console.log  (`| ${p} | | ${q} || ${ p && q } |`);    
console.log  (`| ${!p} | | ${!q} || ${ !p && !q } |`);
console.log  (`| ${!p} | | ${q} || ${ !p && q } |`);  

console.log  (`| P | | Q | | P || Q |`);                
console.log  (`| ${p} | | ${!q} || ${ p || !q } |`);  
console.log  (`| ${p} | | ${q} || ${ p || q } |`);    
console.log  (`| ${!p} | | ${!q} || ${ !p || !q } |`);
console.log  (`| ${!p} | | ${q} || ${ !p || q } |`);  



