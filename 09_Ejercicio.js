/*Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor*/

const persona={ //Definición del objeto persona
    //Definición de las propiedades
    nombre:"Beatriz",
    apellido:"Colón",
    edad:39,
    soltera:true,
    //Se pueden agregar objetos dentro de objetos
    contacto:{
        email:"beatriz@example.com",
        tel:"+57 1234567890"
    },
    //Se pueden agregar funciones dentro de los objetos
    saludar: function(){
        console.log("Hola! :)")
    },
    llamar: function(){
        //this nos permite hacer referencia a la instancia actual
        console.log(`llamame al ${this.contacto.tel}`)
    }
}

/*Para acceder a una propiedad del objeto se hace de la siguiente manera
nombreObjeto.nombrePropiedad*/

console.log(`Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}, mi correo electronico es ${persona.contacto.email}`);

//Para llamar la función dentro del objeto utilizamos el . tambien
persona.llamar();

/*Se pueden recorrer las propiedades de un objeto utilizando el ciclo for*/

console.log("-----------------Recorrer un objeto----------------------")

//For in: loop que permite recorrer las propiedades de un objeto

const mario={ //Objeto mario
    //Propiedades
    nombre:"Mario",
    apellido:"Mendoza",
    edad:42       
}

//Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
    console.log(`Llave: ${key}, Valor: ${mario[key]}`)
}

// Ejercicio

// Punto 4

const carro = {
    marca: "Ford",
    modelo: "Mustang",
    año: 2019,
    color: "Blanco",
    saludo: function () {
        let msj = `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} ${this.año} y mi color es ${this.color}`;
        return msj;
    }
}

console.log(carro.saludo());

// Punto 5

for (const key in carro)
{
    console.log(`${key}: ${carro[key]}`)
}