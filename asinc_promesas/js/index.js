//siempre hemos hecho programacion sincronica
//es la ejecucion de las operaciones en orden secuencial,
//una despues de la otra, es de tipo bloqueante. SI hay un error
//el programa frena y deja de ejecutarse

// console.log("Inicio de operacion")

// function operacionSincronica(){
//     for(let i = 0; i < 3; i++){
//         console.log("Paso" + (i + 1));      
//     }
// }

// operacionSincronica();
// console.log("Fin de prueba")

 ////////////////

 //provramacion asincrna
 //las oepraciones que ejecuta el programa NO son bloqueantes al 
 //hilo principal de la ejecucion, nos permite que se ejecuten unas
 //mientras se esperan a otras

 //setTimeout

 //funcion que utilizamos para programar la ejecucuinb de una funcion
 //despues de un tiempo determinado

 //setTimeout(function, tiempo en ms)

//  console.log("Inicio de programa")

//  setTimeout(function(){
//     console.log("Operacion Asincronica")
//  }, 2000)

//  console.log("Fin de programa")

 

 ///////////

 // como cambiar palabras

//  function cambiarContenido(){
//     document.getElementById("miElemento").innerHTML = "Soy desarrollador Web";
//  }

//  function cambiarContenido2(){
//     document.getElementById("miElemento").innerHTML = "De la tierra del Sol y del buen vino"
//  }

//  console.log("Iniciar programa")

//  setTimeout(cambiarContenido, 3000)
//  setTimeout(cambiarContenido2, 5000)

//  console.log("Fin de programa")


/////
// for(let letra of "Hola chicos"){
//     setTimeout(()=>{
//         console.log(letra)
//     },2000)
// }

// const mensaje = "Emiliano"
// const elementoDos = document.getElementById("elemento");
// let indice = 0;


//mostrando cada una de las letra pero dentro del dom

// function mostrarLetra(){
//     elementoDos.textContent += mensaje[i];
//     indice++;

//     if(indice < mensaje.length){
//         setTimeout(mostrarLetra, 1000)
//     }
// }

// setTimeout(mostrarLetra, 100)


//////
//setInterval
//ejecuta repetidamente una funcion o bloque de codigo, a intervalos
//especificos

//setInterval(function, intervalo en ms)

// let tiempoRestante = 10;

// function actualizarTemporizador(){
//     const temperizadorElemento = document.getElementById('temporizador');
    //mostrar el tiempo restante en HTML

    // temperizadorElemento.textContent = "tiempo restante: "+tiempoRestante;

    // tiempoRestante--;

    //cuando llegue a 0, el temporizador frena

//     if(tiempoRestante < 0){
//         clearInterval(intervaloID);
//         temperizadorElemento.textContent = "TIEMPO TERMINADO"
//     }
// }

// const intervaloID = setInterval(actualizarTemporizador, 1000)
//clear interval => detiene la ejecucion de un intervalo, previamente
//establecido


let segundos= 0;
let minutos = 0;
let intervaloId;


function actualizarCronometro(){
    segundos++;

    if(segundos === 60){
        segundos = 0;
        minutos++;
    }
    
    const cronometroElemento = document.getElementById("cronometro");
    cronometroElemento.textContent = `${minutos}:${segundos <10 ? '0' : ''} ${segundos}`;
    
}

function inciarCronometro(){
    intervaloId = setInterval(actualizarCronometro, 1000);
}

function detenerCronometro(){
    clearInterval(intervaloId);
}

function reiniciarCronometro(){
    segundos = 0
    minutos = 0
    const cronometroElemento = document.getElementById("cronometro")
    cronometroElemento.textContent = "0:00"
}


detenerCronometro();


///////
//promesas (y no sobre el bidet)

//promesas => objetoi que representa un suceso a futuro
//puede ser resuelta op rechazada

//pending => estado inicial de la promesa

//fullfilled => la promesa se ejecuta

//rejected => la promesa falla

    const falsaPromesa = ()=>{
        return new Promise((resolve, reject)=>{
            //resolve => la parte que se ejecuta si la promesa se cumple
            // reject => cuando la promesa n ose cumple
        })
    }

    console.log(falsaPromesa());

    class Usuario{
        constructor(user, password) {
            this.user = user;
            this.password = password;
        }
    }

    const usuario1 = new Usuario("santino", 1234)
    const usuario2 = new Usuario("marcos", 4321)
    const admin = new Usuario("admin", 49585)

    const usuarios = [usuario1, usuario2, admin]

    const solicitarUsuarios = (estado) =>{
        return new Promise((resultado, rechazado)=>{
            if(estado ==true){
                resultado(usuarios);
            } else{
                rechazado("gracias vuelva pronto");
            }
        })
    }

    console.log(solicitarUsuarios(false));