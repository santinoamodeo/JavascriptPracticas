//template literal => es mas moderna 
//la vamos a utilizar pq es mas legible y facil

// let nombre = "juan";
// let edada = 33;

// console.log("su nombre es: " + nombre + "y tiene " + edada);

// console.log(`hoal gente spoy ${nombre}, TENGO ${edada}`);


//hay varias formas de acceder al DOM, pero utilizamos estas 5


//ID =getElementById("ID"); => metodo de DFOM para seleccionar y recuperar un elemento del HTML
const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO);



//CLASES = getElementsByClassName("");  => metodo ara captar elementos html content CLASES
const NOMBRES = document.getElementsByClassName("nombre");
console.log(NOMBRES);



//TAG = getElementsByTagName("") => metodo para captar etiquetas
let etiqueta = document.getElementsByTagName("li");
console.log(etiqueta);


//querySelector => nos permite seleccionar nodos con la misma sintaxis que css

let queryNombre = document.querySelector(".nombres");
console.log(queryNombre);

//querySelectorAll => lo mismo qur querySelector, pero trae TODO

let queryNombreAll = document.querySelectorAll (".nombres");
console.log(queryNombreAll)


//modificar nodos

//innerText -> propiedad en la que accedemos al texto visible dentro de un elemento, 
//omitiendo cualquier contenido de html

TITULO.innerText = "MODIFICAMOS COMO PUTAS SE NOS CANTEEEE";
console.log(TITULO);


//innerHTML -> par obtener/establecer contenido html interno de un elemento
//innerHtml incluye todas las etiquetas de html
//lo cual nos permite agregar html desde js

const DIV__NUEVO = document.getElementById("divContenedor")

DIV__NUEVO.innerHTML = `
    <div class="pepe">
        <p>pradact</p>
        <p>prais</p>
        <button>blalbla</button>
    </div>
`;



///agregar nodos

//createElement(""); => creamos elementos directos desde JS

//variable = document.createElement(nombre del elemento);

let parrafo = document.createElement("p");

parrafo.textContent = "hola este parrafo lo cree desde JSSSSSS";

document.body.appendChild(parrafo);


let h3 = document.createElement("h3");
h3.textContent = "este ews terr8ible h3"
document.body.appendChild(h3);







///creanding objetos dinamicos

class Producto{
    constructor(nombre, precio, img){
        this.marca = marca;
        this.precio = precio;
        this.img = img;
    }
}

const MOTHER = new Producto("Asus", 30000, "asus.jpg")
const MOUSE = new Producto("Logitech", 5000, "asus.jpg")
const TECLADO = new Producto("HyperX", 12000, "asus.jpg")

const ArrayProductos = [MOTHER, MOUSE, TECLADO];

ArrayProductos.forEach(producto =>{
    let DIV = document.createElement("div");
    DIV.className = "card";
    DIV.innerHTML = `
        
        
    <p>Nombre: ${Producto.marca}</p>
    <p>Precio: ${Producto.precio}</p>
    <img src= "${Producto.img}"> </img>
    <button>Agregar a carrito</button>
    `;

    contenedorProductos = appendChild(DIV); 
})


image.png 