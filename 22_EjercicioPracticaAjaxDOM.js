
const ajax = new XMLHttpRequest(), //Variable ajax que instancia del objeto XMLHttpRequest
    $lista = document.getElementById("lista"), //variable que hace referencia al nodo ol del HTML id="lista"
    $fragmento = document.createDocumentFragment(); //Fragmento en donde se guardaran las listas

//Asignación de los eventos que se vayan a manipular en la petición
ajax.addEventListener("readystatechange", (e) => { 
    
    if (ajax.readyState !== 4) return; 

    if (ajax.status >= 200 && ajax.status < 300) { //Si la respuesta es satisfactoria
    
        let json = JSON.parse(ajax.responseText); //Convierte la respuesta Ajax en un objeto

        json.forEach( ( object ) => {
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = `${object.name} -- ${object.username} -- ${object.email}`; //Le asigna los valores del objeto al elemento li
            $fragmento.appendChild($li); 
            console.log(object.name, object.username, object.email);
        });
        /*
        for (const key in json) { //recorre el objeto
            console.log(`Llave: ${key}, Valor: ${json[key]}`)
            const $li = document.createElement("li"); //Crea el elemento li 
            $li.innerHTML = `${key}: ${json[key]}`; //Le asigna los valores del objeto al elemento li
            $fragmento.appendChild($li); //Agrega el elemento li al framento para luego insertarlo en el HTML
        }
        */
        $lista.appendChild($fragmento); //Cuando termina de recorrer el objeto agrega los elementos li guardados en el fragmento al elemento lista
    } else { //Si la respuesta no es satisfactoria manda un mensaje de error
        let message = ajax.statusText || "Ocurrió un error";
        $lista.innerHTML = `Error ${ajax.status}: ${message}`;
    }

    console.log ("--------------- Respuesta -----------------");

    console.log (ajax.responseText);

    console.log ("-------------- URL de la petición ------------------");

    console.log(`La URL de la peticion es: ${ajax.responseURL}`);

    console.log ("--------------- Estado de la peticion -----------------");

    console.log (`El estado de la peticion es: ${ajax.readyState}`);

    switch (ajax.readyState) {
        case 1:
        console.log("Cargando petición");
        break;
        case 2:
        console.log("Petición cargada");
        break;
        case 3:
        console.log("responseText tiene datos parciales");
        break;
        case 4:
        console.log("¡Completado!");
        break;
    }

    console.log ("---------------Estado del HTTP -----------------")

    console.log(`Estado de respuesta HTTP: ${ajax.status}`)

    switch (ajax.status) {
        case 200:
        console.log(`Status ${ajax.status}: respuesta correcta`);
        break;
        case 404:
        console.log(`Status ${ajax.status}: no encontardo`);
        break;
        case 500:
        console.log(`Status ${ajax.status}: Error interno del servidor`);
        break;
    }
});

/*Abre la petición con el método GET.*/
ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
/*envia la peticioN*/
ajax.send();