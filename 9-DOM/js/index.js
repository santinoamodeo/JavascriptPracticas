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
    `<div class="pepe">
            <p>hola</p>
    </div>`


/////

//agregar nodos desde JS

//createElement("") 

//var = document.createElement(nombre del elemento)

let parrafo = document.createElement("p")

parrafo.textContent = "Hola estew parafo tyiene js ca;ooooksmmsmsms" 
//le da el contenido

document.body.appendChild(parrafo);
//appemdChild agrega el nodo, hijo de body

//////////////
//objetos dinamicos

class Producto{
    constructor(nombre,precio,img){
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
}


const MOTHER = new Producto("Asus", 1200, "./assets/img/asus.jpg") //img toma la ruta como si estuviera en HTML
const MOUSE = new Producto("Logi Silent", 200, "./assets/img/logi.jpg")
const TECLADO = new Producto("Logitech", 800, "./assets/img/logitech.jpg")

const ArrayProductos = [MOTHER, MOUSE, TECLADO];

ArrayProductos.forEach(Producto=>{
    let div = document.createElement("div");
    div.className = "card";//aplica clases al div
    // div.innerHTML = `   
    //     <p>Nombre: ${Producto.nombre} </p>
    //     <p>Precio: ${Producto.precio} </p>
    //     <img src="${Producto.img}" alt="producto"> 
    //     <button>Agregar a carrito</button>
    // `
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${Producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${Producto.nombre}</h5>
      <p class="card-text">${Producto.precio}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `

    contenedorProductos.appendChild(div);
})

