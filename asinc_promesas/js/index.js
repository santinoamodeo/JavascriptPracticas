//programacion sincronica

//es la ejecucion de las ejecuciones dentro de un probrama en orden
//SECUENCIAL, una desp de la otra, es de tipo
//BLOQUEANTE, por lo que, si hay algun error,
//la ejecucion frena y deja de funcionar

// console.log("inicio de operacion")

// function operacionSincronica(){
//     for (let i = 0; i < 3; i++)
//     console.log("paso " + (i + 1))
// }

// operacionSincronica()
// console.log("fin de operacion")


///////////////
//programacion asincrona

//las operaciones que ejecuta no son 
//bloqueanesm al hilo principal de la ejecucion
//nos permite que mas operaciones continuen
//mientras esperamos que algo suceda


/////////////////

//setTimeout

//funcion con fin de programar la ejecucion desp de
//un tiempo

//setTimeout(function, tiemp en MILISEGUNDOS)

// console.log("inicio de programa")

// setTimeout(function(){
//     console.log("operacion asincotrnica")
// }, 2000)

// console.log('finn de programa')


//////
//how to change word

function changeContentd(){
    document.getElementById("miElemento").innerHTML = 
    "Soy desarrollador web"
}

console.log("iniciar programa")

setTimeout(changeContentd, 3000)

console.log("fin")


