//hof vienen ordientadas a los array

//for each => resumir los pasos de un ciclo

//array.forEach(function(elemento, indice){})

//RECORREDOR DE ARRAYS Y MULTIPLICADOR

const NUMEROS = [1,2,3,4,5,6,7,8,9,10]

NUMEROS.forEach(function(numero){
    const RESUELTO = numero *2
    console.log(RESUELTO)
})

////////////////

//find => encuentra el 1er valor que cumpla con la condicion dada

// let cadenas = [
//     {producto: "pikachu", precio: 25000},
//     {producto: "mew", precio: 15000},
//     {producto: "charizard", precio: 1200}
// ];

// let mayorPrecio = cadenas.find(function(cadena){
//     return cadena.precio > 1300;
// }) 

// console.log(mayorPrecio) 


///////////////////

//filter => metodo que cre aim array en base
//a uno existente que cumpla x condicion

// let precioMinimo = parseFloat(prompt("seco, cuanto podes"));

// if(isNaN(precioMinimo)){
//     console.log("ingresa cto te bancas, gil")
// }
// else{
//     let precioFiltrados = cadenas.filter(function(cadena){
//         return cadena.precio <= precioMinimo;
//     });

//     console.log("Los productos que podes comprar son: " + precioFiltrados);
// }


// let cadenas =[
//     {producto :"pikachu", precio: 25000},
//     {producto:"mewtoo", precio: 15000},
//     {producto:"mew", precio:1200},
//     {producto:"charizard", precio: 1200}    
// ];
    
//     let precioMinimo = parseFloat(prompt("cuanto podes gastar"));

// if(isNaN(precioMinimo)){
//     console.log("por favor ingresa numeros")
// } else{

//     let precioFiltrados = cadenas.filter(function(cadena){
//         return cadenas.precio <= precioMinimo;
//     });

//     console.log("los productos que podes comprar son:", precioFiltrados)
// }


////////////

//map => metodo para declarar nuevos arrays sin joder el base

//variable = arrayOriginal.map(function(elementos, indice, arrayOriginal))

// let numeros = [1,2,3,4,5];

// let numerosNuevos = numeros.map(indicesDeNumeros => indicesDeNumeros*2)

// console.log(numeros);
// console.log(numerosNuevos);


let cadenas =[
    {producto :"pikachu", precio: 25000},
    {producto:"mewtoo", precio: 15000},
    {producto:"mew", precio:1200},
    {producto:"charizard", precio: 1200}    
];

let productosEnMayus = cadenas.map(objetoCadenas =>{
    return {producto: objetoCadenas.producto.toUpperCase()}
})

console.log(cadenas)
console.log(productosEnMayus)
