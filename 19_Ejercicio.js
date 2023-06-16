/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------")

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`) //Impresión del objeto

console.log("-----------Conversión de un Objeto a JSON----------------")

//Objeto persona
const persona = { 
    nombre: "Mariana",
    edad: 36,
    amigos: ["Juan", "Fernanda", "José"]
  };

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona) //Impresion del json

console.log ( typeof ( jsonPersona ) );

// Ejercicio 4 
// Punto a 

let usuarios = {
    datosPersonales : [
        {
            nombre: "Jonathan", 
            apellido: "Fernandez",
            correo: "jonathan.fernadez31@gmail.com", 
            telefono: "3245413064", 
            nacionalidad: "Colombia"
        },
        {
            nombre: "Andres", 
            apellido: "Otero",
            correo: "andres.otero03@gmail.com", 
            telefono: "39182738912", 
            nacionalidad: "Colombia"
        },
        {
            nombre: "Nicole", 
            apellido: "Moreno",
            correo: "nicolemoreno@gmail.com", 
            telefono: "3128391832", 
            nacionalidad: "Colombia"
        },
        {
            nombre: "Karen", 
            apellido: "Vargas",
            correo: "karenvargas@gmail.com", 
            telefono: "31977823874", 
            nacionalidad: "Colombia"
        },
        {
            nombre: "Yuli", 
            apellido: "Rengifo",
            correo: "yulirengifo@gmail.com", 
            telefono: "31308129881", 
            nacionalidad: "Colombia"
        }
    ]
}

const jsonUsuarios = JSON.stringify ( usuarios );

console.log ( usuarios );
console.log ( jsonUsuarios );
