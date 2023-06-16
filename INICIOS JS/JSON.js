// Primeros pasos en JSON 

let libros = { 
    "bookStore": [
    { "title lang":"2001",
    "author": "Arthur C. Clarke",
    "price": 30.0,
    "year": "1968"
    },
    {"title lang":"Story abaout a True Man",
    "author": "Boris Polevoy",
    "price": 20.0,
    "year": "1952"
    }
    ]
}

// Convertir JSON en Object

let data = `{ "empleados": [
    { "nombre": "Jonathan", "apellido": "Otero" },
    { "nombre": "Andres", "apellido": "Fernadez" }
    ]
}`

let processedData = JSON.parse( data );

console.log ( processedData.empleados[ 0 ] );

let _data = {
    empleados: [
        { nombre: "Jonathan",apellido: "Otero" },
        { nombre: "Andres",apellido: "Fernandez"}
    ]
}

let dataJson = JSON.stringify( _data );

console.log ( dataJson );