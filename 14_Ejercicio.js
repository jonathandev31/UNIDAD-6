/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const {nombre, apellido, edad}=persona; // Deben tener el mismo nombre del la llave del objeto

console.log(nombre,apellido,edad)

// Ejercicio

// Punto 4

let diasSemana = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ];

let [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiete] = diasSemana;

console.log(diaUno,diaDos,diaTres,diaCuatro,diaCinco,diaSeis,diaSiete);

// Punto 5

const mascota  = {
    nombre1: "Mamífero",
    edad1: 20,
    tamaño: 60, // tamaño en cm
    color: "cafe"
}

const {nombre1, edad1, tamaño, color}=mascota;

console.log(nombre1,edad1,tamaño,color);
