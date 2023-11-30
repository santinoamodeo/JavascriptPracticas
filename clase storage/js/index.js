// //LOCAL STORQAGE = guarda



// localStorage.setItem("saludo", "hola chicos");


// localStorage.setItem("numero", 123);
// let valor = localStorage.getItem("numero");

// console.log(valor);
// console.log(typeof valor);

// // localStorage.setItem("numero", 42);
// // let numeroCadena = localStorage.getItem("numero");
// // let numeroNumber = parseInt(numeroCadena);
// // console.log(numeroNumber);


// //session storage = no guarda ni aka

// sessionStorage.setItem("nombres", "emilio")

// let nombres2 = sessionStorage.getItem("nombres")
// console.log(nombres2);


// //removeItem = borra un item

// localStorage.setItem("eliminar", "frase a eliminar");

// let valorEliminado = localStorage.getItem("eliminar")

// //remove borra un solo item
// // clear borra todo a la vergaaaaaaaa  

// localStorage.clear();


// localStorage.setItem("numero", 42);
// let numeroCadena = localStorage.getItem("numero");
// let numeroNumber = parseInt(numeroCadena);
// console.log(numeroNumber);

// localStorage.removeItem("numero")


// ///recorrer localStorage

// localStorage.setItem("nombres", "nartin");
// localStorage.setItem("edad", 25)
// localStorage.setItem("ciudad", "mar del plata")

// //obtener todas las claves
// let todasLasClaves = Object.keys(localStorage);

// //recorrer con for

// for(let i = 0; i < todasLasClaves.lenght; i++){
//     let clave = todasLasClaves [i];
//     let valor = localStorage.getItem(va);
//     console.log(clave, valor)
// }

// console.log(clave, valor)



// //objeto de personas

// let persona = {
//     nombre: 'juan',
//     edad: 25,
//     ciudad: 'mar del plata'
// } 

//stringify => es una funcion quer convierte cualq objeto en uan cadena json

//toma un objeto como argumento, devolviendo una cadena de texto

// let jsonPersona = JSON.stringify(persona);
// console.log(jsonPersona)



// localStorage.setItem('nombreJs', maxiJs)

// const personaJSON = localStorage.getItem("nombreJs");
// const persona = JSON.parse(personaJSON);

// console.log(persona, typeof persona)


//modo oscuro - claro

//1 crear botoon que cambie el metodo de la pagina
//2 almacenar el modo seleccionado en el storage
//3 al recargar la pagina el modo se mantenga (localStorage)

// const botonModo  = document.getElementById('botonModo');

// botonModo.addEventListener("click", ()=>{
//     document.body.classList.toggle("dark");
//     if(document.body.classList.contains("dark")){
//         localStorage.setItem("modo","dark");
//     }else{

// const carritoJSON = JSON.stringify);
//         localStorage.setItem("modo", "claro")
//     }
// });

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const product1 = new Producto ("camisa", 500);
const product2 = new Producto ("jean", 500);
const product3 = new Producto ("remera", 500);

const carrito =[];

carrito.push(product1);
carrito.push(product2);
carrito.push(product3);

console.log(carrito)

const carritoJSON = JSON.stringify(carrito);
//almacenams el carrit en localStorage

localStorage.setItem("carrito", carritoJSON)

//recuperar la info del carrito en local stoage

const carritoRecuperado = localStorage.getItem("carrito");

//coinveritr el JSON en un objeto denuevo

const carritoObjeto = JSON.parse(carritoRecuperado);

//imprimir todo en html

const contenedorCarrito = document.getElementById("contedorCarrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p> ${producto.nombre} - ${producto.precio} </p>`
})








































