console.log("-----------------Condicional while----------------------");

let cont = 0;

while(cont<10){
    console.log(`El while va en ${cont}`)
    cont++
}

console.log("-----------------Condicional for----------------------");

for (let i = 0; i < 3; i++) {
    console.log(`El for va en ${i}`);
}

// ejercicio
// punto 1
for (let i = 10; i = 1; i--) {
    console.log(`El numero es ${i}`);
}

// punto 2
for (let i = 1; i <= 10; i++ ) {
    if ( i % 2 == 0 ){
        console.log(`El numero es ${i}`);
    }
}

// Punto 3
let contador = 1,
    suma = 0

while ( contador <= 5 ) {
    suma += contador;
    contador++;
}
console.log ("El resultado de la suma es:", suma)

// Punto 4
let contador1 = 1,
    multip = 0;    

while ( contador1 <= 12 ) {
    multip = contador1 * 7;
    console.log (`El ${contador1} x 7 = ${multip}`)
    contador1++;
}


