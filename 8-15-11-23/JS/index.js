//clase higher order function terminando clase 1 

//////////////////////////

// metodo reduce => metodo para reducir los datos de un array a un unico valor

//variable = array.reduce( function(acumulador, arrayRecorrido){
// return acumulador + arrayRecorrido}, valorInicialAcumulador)

// let numeros = [1, 2, 3, 4, 5];

// let suma = numeros.reduce(function(acumulador, numero){
//     return acumulador + numero
// }, 0)

// alert(suma)

//ejemplo carron

// const CARRITO = [
//     {producto: 'camiseta', precio: 20},
//     {producto: 'pantalom', precio: 10},
//     {producto: 'Nike Jordan Low 7up', precio: 30}
// ]

// let precioTotal = CARRITO.reduce(function(acumulador, producto){
//     return acumulador + producto.precio;
// },0);

// console.log(`El precio total del carrito es de ${precioTotal} dolares afroamericaninos dominicubanos`)

/////////////////

//sort => ordena el array existente, NO CREA ARRAY

//variable sort = array.sort(function(comparableA, comparableB){
    //return comparableA - comparableB;
//})


//SI ES - ES CRECIENTE, SI ES + ES DECRECIENTE

// const CARRITO = [
//     {producto: 'camiseta', precio: 20},
//     {producto: 'pantalom', precio: 10},
//     {producto: 'Nike Jordan Low 7up', precio: 30}
// ]

// let productosOrdenados = CARRITO.slice().sort((a,b) => a.precio - b.precio)

// console.log(productosOrdenados)

// let array =['manzana', 'banana', 'peracotona', 'zzz'];

// array.sort();
// console.log(array)

//////////////////////////////////////////

//higher order functions ll

//objeto Math => proporciona propiedades y metodos 
//matematicos

//propiedades 

//sacar radio de un circulo

//metodo PI

// console.log(Math.PI)

// console.log(Math.PI.toFixed(2)) //toFixed pa redondear


//////////////
//metodos min y max

//Math.min => devuelve el nro mas pequeno

// let minimo = Math.min(75,545,1222252)

// console.log("el min es: " + minimo)

// let maximo = Math.max(75,545,1222252)

// console.log("el min es: " + maximo)

/////////////////////////

