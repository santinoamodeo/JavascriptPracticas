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

//ceil, flour, round => redondear nros 

//ceil =>  retorna el nro indicado redondeando arriba

// let decimal = Math.ceil(1.45)
// alert(decimal);


//floor => lo mismo nada mas que hacia abajo

// let decimal2 = Math.floor(1.45)
// alert(decimal);

//round => redondear al entero mas cercano

// let round = Math.round(1.5)
// alert(round)

//////////////////////

//metodos para raiz y potencia

//raiz => sqrt
// let raiz = Math.sqrt(9)

// console.log(raiz)


//potencia = pow(base, exponente)
// let pow = pow(2,4);
// console.log(pow)

//////////////////////

//metodo random => retorna un nro aleatorio entre
//  y 0 y 1

// let nroAleatorio = Math.random()
// console.log(nroAleatorio)

// console.log(Math.random()*10)
// console.log(Math.round(Math.random()*10))

//los nros entre 10 y 50

// console.log(Math.round(Math.random()*40+10)) //arranca en 10


//juego del dado

// console.log(Math.round(Math.random() * 5 +1))


////////CLASS DATE//////////////

//date => para trabajar con fechas y horas

let fechaActual = new Date();
// console.log(fechaActual)

//date info= ano, mes, dia, hora-min-seg

// let especifica = new Date(2023,11,15,03,00,15) //declaro la fecha
// console.log(especifica)

// let anio = especifica.getFullYear()
// console.log(anio)

// let mes = especifica.getMonth()
// console.log(mes)

// let dia = especifica.getDate()
// console.log(dia)

// let  hora = especifica.getHours()
// console.log(hora)


//setear- establecer componentes de fecha y hora

// fechaActual.setFullYear(2021)

// console.log(fechaActual)

////////////

//pedido de datos toDate

// console.log(fechaActual.toDateString())
// console.log(fechaActual.toLocaleString())
// console.log(fechaActual.toLocaleTimeString())

////////////

//alquilar peliculas

class Cliente{
    constructor(nombre, edad, membresia){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
    }
}

class Alquiler{
    constructor(pelicula, cliente, costo, fecha){
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date();
    }
}

class Pelicula{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
}

const cliente1 = new Cliente("emiliano", 20, "premium")
const cliente2 = new Cliente('sebastian', 30, 'free')

let pelicula1 = new Pelicula('50 sombras de grey', 'fantasia')
let pelicula2 = new Pelicula('Fast & Furious 7', 'accion')

let alquiler1 = new Alquiler(pelicula1, cliente1, 40.5)
let alquiler2 = new Alquiler(pelicula2, cliente2, new Date("june 6, 2023 10:00"))

function diasAlquilerMembresia(cliente){
    if(cliente.membresia == 'premium'){
        return 3;
    }
    else{
        return 2;
    }
}

function peliculaDevolverHoy(alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diasAlquiler = diasAlquilerMembresia(alquiler.cliente);

    fechaAlquiler.setDate(fechaAlquiler.getDate() + diasAlquiler)

    if(fechaAlquiler < fechaActual){
        return `la pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, el costo del alquiller es de ${alquiler.pelicula.precio} dolares`
    }
    else{
        return `la pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, el costo del alquiller es de ${alquiler.costo} dolares`
    }
}

console.log(peliculaDevolverHoy(alquiler1))
console.log(peliculaDevolverHoy(alquiler2))
