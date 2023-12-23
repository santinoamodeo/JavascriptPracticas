//storage 

//nos permite guardar datos en el navegador

//2 maneras de almacenarlos
//sessionStorage y localStorage

//localStorage =>  guarda los datos, permanecen 
//despues de estar cerradas las pestanias

/////////////////

//sessinStorage => almacena los datos de forma
//temporal, al cerrar el navegador perdemos todo


////////////

//LOCAL

//setItem => metodo con fines de almacenar los
//datos de manera local, SETEAR DATOS


// localStorage.setItem("saludo", "hola chicos")
//se define una key y el valor 

// localStorage.setItem("chorra", "CFK");

// localStorage.setItem("boolean", "true");

// localStorage.setItem("pass","49585")

//como recuperamos lo que seteamos?

//getItem => metodo para recuperar los valores
//de las key ya almacenadas

//let valor = localStorage.getItem('key')

// let valor = localStorage.getItem('saludo')

// console.log(valor) 

// let clave = localStorage.getItem('pass')

// console.log(clave)

//////

//ALMACENAR UN NUMERO COMO UNA CADENA NUMERICA
//EN EL LOCALSTORAGE

// localStorage.setItem('nro', 1234)


// let nroString = localStorage.getItem('nro')
// console.log(nroString)


// let nroCadenaNrica = parseInt(nroString)
// console.log(nroCadenaNrica)



////////////////////

//sessionStorage = mismo funcionamiento que 
//el localStorage 

// sessionStorage.setItem('nombre', 'emilio')

// let nombreDos = sessionStorage.getItem('nombre')

// console.log(nombreDos)


////////

//removeItem = metodo para eliminar un valor

// localStorage.setItem('eliminar','gracias, gracias marcelo')

// let valorEliminado = localStorage.getItem('eliminar')

// localStorage.removeItem('eliminar')

////////

//clear() => elimina todos los datos, limpia

// localStorage.clear();


/////

//recorrer el localStorage

// localStorage.setItem('nombre', 'juan')
// localStorage.setItem('edad', 25)
// localStorage.setItem("ciudad", "mar del plata")

// let todasLasClaves = Object.keys(localStorage);
// //con el objet keys obtenemos todas las keys

// for( let i = 0; i<todasLasClaves.length ; i++ ){
//     let clave = todasLasClaves[i];
//     let valor = localStorage.getItem(clave)
    
//     console.log(clave, valor);
// }







/////////////////


//JSON SENIORRRRRRRRRRRRRRRRRRS

// es un formato de intercambio de datos, ligero
//y facil de leer


//objeto de persona

// let persona ={
//     nombre: 'juan',
//     edad: 22,
//     ciudad: 'mar del plata'
// }

//stringify = convierte cualq objeto a una cadena
//de json

// let jsonPersona = JSON.stringify(persona)
// console.log(jsonPersona)


/////////

//modo oscuro - claro

//1 - crear boton que cambie el metodo
//2 - almacenar el modo seleccionado en el storage
//3- al recargar la pagina, que el localStorage haga la suya
//4- cambiamos el modo de la pag

const botonModo = document.getElementById('botonModo')
botonModo.addEventListener('click', () =>{
    document.body.classList.toggle('dark')

    if(document.body.classList.contains('dark')){
        localStorage.setItem('modo', 'dark')
    }
    else{
        localStorage.setItem("modo", "claro")
    }
})



///////

//carrito de compras

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;

    }
}

const product1 = new Producto ("camisa", 500); 
const product2 = new Producto ("jean", 300); 
const product3 = new Producto ("remera", 400);

const carrito = [];

carrito.push(product1);
carrito.push(product2);
carrito.push(product3);

console.log(carrito);

const carritoJSON = JSON.stringify(carrito);

//almacenando el carrito en el localStorage

localStorage.setItem("carrito", carritoJSON);

//recuperamos el carrito de LocalStorage

const carritoRecuperado = localStorage.getItem("carrito");

//convertir el json en un objeto

const carritoObjeto = JSON.parse(carritoRecuperado);

//imprimir todo en HTML

const contenedorCarrito = document.getElementById("contenedorCarrito");

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p> ${producto.nombre} - ${producto.precio} </p>
    `;

});