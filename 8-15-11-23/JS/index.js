//reduce => metodo de array que se encarga de reducir datos de un array
//a un unico dato

//variable = array.reduce(function(acumulador, arrayRecorridos) {
//          return acumulador + arrayRecorridos  
//}, valorInicialAcumulador);


let numeros = [1,2,3,4,5,6,7,8,9]

let suma = numeros.reduce(function(acumulador, numero) 
{
    return acumulador + numero
}, 0);

console.log(suma);