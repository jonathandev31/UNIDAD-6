// Ejercicio 6
// Punto 1

console.log( document.getElementById( "descripcion" ) );

// Punto 2

console.log( document.querySelector( "#descripcion" ) );

// Punto 3

console.log( document.querySelectorAll( "li" ) );

// Punto 4

let $cantidadElementosLista = document.querySelectorAll( "li" );
console.log( "Hay " + $cantidadElementosLista.length + " elementos en la lista.");

// Punto 5

$cantidadElementosLista.forEach( (elemento) => console.log( elemento ) );

// Punto 6

let parrafo = `En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad de
Reading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programas
finalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seis
programas tuvieron que interactuar con los 12 jueces manteniendo una conversación
mediante un computador durante cinco minutos en donde se plantean una serie de preguntas
con el fin de determinar si es un computador o un humano. En la edición del 2008 ninguno
logré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programa
Elbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12
jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.`;

const $p = document.createElement("p");

$p.textContent = parrafo;

document.body.appendChild( $p );

// Punto 7

let $a = document.createElement( "a" );

$a.innerHTML = `<a href="#">Enlace principal</a>`;

document.querySelector( "ul" ).insertAdjacentElement( "afterbegin", $a );

// Punto 8
const meses = [ "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre",
    "Noviembre", 
    "Diciembre" ],
    $ul = document.createElement("ul");

document.write( "<h3>Meses del año</h3>" );
document.body.appendChild($ul);

meses.forEach( ( mes ) => { //Por cada elemento del arreglo agregar un li para agregarlo dentro del ul
  const $li = document.createElement("li");
  $li.textContent = mes; //el contenido de texto de la etiqueta li va a ser el elemento del arreglo
  $ul.appendChild( $li ); //Agregar los li al elemento ul
});
