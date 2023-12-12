//eventos

//los eventos son la forma que tenemos en js de 
//ontrolar las acciones del usuario y definir el 
//comporamiento cuando se produzca

//como funcionan?

//usamos una herramienta llamada manejador de 
//enventos


//existen 3 formas de realizar la escucha de 
//un evento

//1era manera
//vincular btn con id

const BTN = document.getElementById('btn');
 
//vamos a utilizar un metodo => addEventListener
//el fin es registrar un controlador de eventos 
//en un objeto espoecifico

//sintaxis basica

//elemento.addEventListener(evento, function)
//se ejectuta sobre el elemento / va a ejercutar que quermios que pase el element

BTN.addEventListener('click', function(){
    alert('se hzo click en el boton')
})

/////////////

//segundo metodo
//utilizamos propiedades del nodo

const BTN_2 = document.getElementById("btn_2")

BTN_2.onclick = () => {
    alert("bababbabb")
}


/////////

//tercer metodo
//se escriben fn en js

function jsEnHtml(){
    console.log("estamos escribiendo una fn desde html")
}
 

/////////////////

//eventos de mouse 

const CAJA = document.getElementById("caja")

//onmouseover => el puntero se mueve sobre el elementi

// CAJA.onmouseover = () => {
//     console.log("el usuartio paso el mouse por aki")
// }


//mouseout => detecta cdo sale del elemento

// CAJA.onmouseout = () => {
//     console.log("mouse sale de la caja");
// }


//mousemove => movimiento del mouse sobre un element0

// CAJA.onmousemove= () =>{
//     console.log("paso el mouse por la caja")
// }


//mousedown / mouseup => detecta cdo aprieto y suelo el click

// CAJA.onmousedown = () =>{
//     console.log('mousedown')
// }

// CAJA.onmouseup = () =>{
//     console.log('mouseup')
// }


//////////////

//EVENTOS DE TECLADO

const CAMPO_TEXTO = document.getElementById("campoTexto")

//keyDown / keyUp => down aprieta, up suelta

// CAMPO_TEXTO.onkeydown = () =>{
//     console.log("tecla presionada")
// }

// CAMPO_TEXTO.onkeyup = () =>{
//     console.log("tecla soltada")
// }



//change => se activa cdo se detecta un cambio 
//en el valor de un elemento

// CAMPO_TEXTO.addEventListener("change", function(){
//     console.log('valor cambiado: ' + CAMPO_TEXTO.value)
// })



//input => ejecuta una funcion cada que el usuario
//ingresa texto en el campo

// CAMPO_TEXTO.addEventListener('input', ()=>{
//     console.log(CAMPO_TEXTO.value)
// })



//evento submit => se activa cuando un formulario es enviado.

class Cliente{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayClientes = [];

const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");


    //verificar por consola que capte los datos
    console.log("el nombre ingresado es:" + nombre.value);
    console.log("el apellido ingresado es: " + apellido.value);
    
    //creamos el objeto cliente
    
    const cliente = new Cliente (nombre.value, apellido.value);
    arrayClientes.push(cliente);
    
    //vericamos por consola  el array
    
    console.log (arrayClientes);

    formulario.reset();
})