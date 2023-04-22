/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(false) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)

// Ejercicio

// Puton 4
const limite = 100;
let numeros = [];
for (let i = 1 ; i <= limite ; i++) {
    console.log(numeros.push(i));
}
// Punto 5
const limite1 = 100;
let numeros1 = [];
for (let i = 2 ; i <= limite1 ; i += 2) {
    numeros1.push(i);
}
console.log (numeros1)

// Punto 6

let numeros2 = [7,2,3];


