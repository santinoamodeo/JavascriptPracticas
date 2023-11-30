/*

let x = 5;
let y = x++
consol.log(y);

*/


/** ESTRUCTURA FOR */

/*
for(desde; hasta; actualizacion)
*/

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// const NUMERO = 6;

// for(let i = 1; i <= 10; i++){
//     const RESULTADO = NUMERO * i;
//     console.log(NUMERO + " X " + i + " = " + RESULTADO);
// }

//////////////////////

/*sentencia break y continue*/

/**
 break corta el bucle, la metes dentro de un if 


 continue saltea el bucle, la metes dentro de un if
 */

//  for(let a = 1; a < 16; a++){
//     if(a === 5){
//         continue; 
//     }
//     console.log(a); //el orden si importaaa
//  }


 ////////////////////////////////

/** WHILE */
/**
 while (true/false){
    
 }
 */

//  let contador = 1;

//  while(contador <= 5){
//     console.log("numero " + contador); 
//     contador++;
// }


//jueguito

// const PALABRA_SECRETA = "javascript";
// let intentos = 0;
// let adivinanza = " ";

// while(adivinanza !== PALABRA_SECRETA){
//     adivinanza = prompt("Adivinar la palabra secreta, es un lenguaje de programacion").toLocaleLowerCase();
//     intentos++;

//     if(adivinanza !== PALABRA_SECRETA){
//         alert("intenta de nuevo");
//     }
// }
// alert("felicidades adivinaste la palabra secreta" + intentos + " intentos");

/**DO WHILE */

// let suma = 0;
// let continuar;

// do{
     //se ejecuta si o si
// }
// while{
     //condicion 
// }

// do{
//     const NRO_SUMA = parseFloat(prompt("Ingresar un nro para sumar"));
//     if(!isNaN(NRO_SUMA)){
//         suma += NRO_SUMA;
//         continuar = prompt("quiere seguir? SI/NO").toLocaleLowerCase();
//     }
//     else{
//         alert("ingrese un numero valido");
//         continuar = "si";
//     }
// }
// while(continuar ===  "si");
// console.log("la suma es = " +suma);

/////////////   

//SWITCH 
/**
 
switch(expresion) {
    case valor1: 
        codigo de ejecucion
        break
    case valor2: 
        codigo de ejecucion
        break
    case valor3: 
        codigo de ejecucion
        break
    case valor4: 
        codigo de ejecucion
        break

    default:
        codigo a ejecutar en caso de que no se cumpla ningun case previo
}

 */

// const NRO_DIA = 1;

// switch(NRO_DIA){
//     case 1:
//         console.log("lunes");
//         break;
//     case 2:
//         console.log("martes");
//         break;
//     case 3:
//         console.log("miercoles");
//         break;
//     case 4: 
//         console.log("jueves");
//         break;

//     default:
//         console.log("dia no encontrado");
// }


// ACTIVIDAD 1

let continuar;

do{
    const num1 = parseFloat(prompt("ingresar el primer numero"));
    const num2 = parseFloat(prompt("ingresa el segundo numero"));
    const operacion = prompt("ingresar la operacion a realizar, + - * /");

    let resultado;
    
    switch(operacion) {
        case "+":
            resultado = num1 + num2; 
            break;
        
        case "-":
            resultado = num1 - num2;
             break
        
        case "*":
            resultado = num1 * num2;
            break;
        
        case "/":
            resultado = num1 / num2;
            break;  
        
        default:
            console.log("que chota pusiste");
            resultado = "undefined"
    }
    
    alert("RESULTADO: " + resultado);

    continuar = prompt("queres hacer otro calculo? si/no").toLowerCase();
}
while(continuar === "si")