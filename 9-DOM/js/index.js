//clase DOM

//template literals

// let nombre = "Juana";
// let edadd = 33;

// console.log("su nombre es: " + nombre);
// console.log(`hola gente soy ${nombre} y tengo ${edadd} anios`)

////////////////
//acceder al DOM 5

//document como base

//ID => getElementById("nombre del id") = metodo con ID en el nodo
const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO)

//CLASES => getElementByClassName("clase");

const NOMBRES = document.getElementsByClassName("nombres")
console.log(NOMBRES)

//ETIQUETA => getElementsByTagName("etiqueta")
let etiqueta = document.getElementsByTagName("li")
console.log(etiqueta)

//querySelector => nos permite seleccionar nodos con la misma sintrasxis que css
//pero trae solo el primero, no como class

let queryNames = document.querySelector(".nombres")
console.log(queryNames)

//querySelectorAll => lo mismo pero devuelve
//completo

let querySelectorAll = document.querySelectorAll(".nombres")
console.log(querySelectorAll)

/////

//modificar nodos

//innerText => propiedad en la que accedemos a textos
//visibles dentro de un elemento omitiendo cualq contnido

TITULO.innerText = "estoy jugando soloaoaoaoa"

///innerHTML => obtener-establecer contenido interno
//de un elemento, incluye todas las etiquetas,
//lo cual permite agregar HTML desde JS

const DIV_NUEVO = document.getElementById("divContenedor")
DIV_NUEVO.innerHTML =
`
<div>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque sequi dolore dolores velit magni aut odio voluptates, commodi alias quam dicta possimus fugiat consectetur iure animi incidunt non voluptatum?
</p>
<ul>
    <li>s</li>
    <li>s</li>
    <li>s</li>
    <li>s</li>
    <li>s</li>
</ul>
</div>
`

1.20