// 
// operadaores relacionales

// == opertador de igualdad  x == y (solo se fija si los valores son iguales)
// === operador de igualdad estricto x === y  (se fija si los valores y los TIPOS DE DATOS son iguales)

/*/ != opertador de diferencia x!= y (solo se fija si los valores son distintos)
/ !== operador de diferencia estricta x!== y (se fija si los valores y los TIPOS DE DATOS son distintos)

// > mayor que 
// >= mayor o igual que

// < menor que
// <= menor o igual que

*/

let a, b, c, d, e;

a = 10;

b = 11;

c = 'sabado';

d = 'me voy par el';

xd = 12332133;

if (a == 10){
    console.log("blablalba0");
}

if (b === 10){
    console.log("blablalba1");
}

if(xd != 123321){
    console.log(c + " " + d + " baile");
}


//if ... else

let nro1 = 1;

let nro2 = 2;

if (nro1 !== nro2) {
    console.log("son nros distintosperrroooooootitutitiopit")
} else {
    console.log("son mas parecidos que iguales negro");
}

//else if 

let miNumero = -10;

if (miNumero > 0){
    console.log("el valor es positivo")
} 
else if (miNumero < 0){
    console.log("el valor es negativo");
}
else{
    console.log("el valor es putamente 0")};


//EDAD para conducir
//pedir el dato
const EDAD = 25;

//convertir la entrada a un numero
const EDAD_nro = parseInt(EDAD);

//verificar la edad

if(isNaN(EDAD)){
    console.log("NO es un numero bro, dale again");
}

else if(EDAD >= 18){
    console.log("sabado, con 18 nos fuimos pal baile");
}
else{
    console.log("sos terrible minor de edad");
}


// operadores logicos

//operadorr && and Y

let edadJoven = 25;
let tieneLicencia = 0;

if(edadJoven >= 18 && tieneLicencia){
    console.log("Podes butakear");
}
else{
    console.log("NO podes butakear un choyo");
}

//operador || or 

let tieneAzul = true;

if(tieneLicencia || tieneAzul){
    console.log("Podes manyare");
}
else{
    console.log("No podes manyare un choto");
}


//operador no !

let verano = 1;

if(!verano){
    console.log("No es verano");
}

else{
    console.log("es verano");
}

// ejemplos 3

// let iniciarSesion = 1;

// if(!iniciarSesion){
//     console.log("inicia sesion pelotufo");
// }

// else{
//     console.log("Gracias por inicia sesion");
// }

const iniciarSesion = prompt("Iniciaste sesion pa? mecheate un si-no");

if(iniciarSesion === "no"){
    console.log("please, log in");
}

else{
    console.log("GRACIAS POR INICIAR PERROOOOPO");
}  