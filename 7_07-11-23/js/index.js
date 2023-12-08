//FUNCIONES DE ORDEN SUPERIOR 1

//definir funcion que sume dos nros
function sumar (nro1, nro2){
    return nro1 + nro2;
}

//usarla

let resultado = sumar(1, 2);
console.log(resultado);

///////////////////////////////////////////////////


//definir una clase animal

// class Animal{
//     constructor(nombre, tipo){
//         this.nombre = nombre;
//         this.tipo = tipo;
//     }

//     //metodo para obtener la informcion de un animal
//     obtenerInformacion(){
//         return `El nombre es: ${this.nombre}, y es un ${this.tipo}`;
//     }
// }

//creacion de instancias

// let perro = new Animal("MaxWell", "perro");
// let gato = new Animal("Felix", "gato");

// console.log(perro.obtenerInformacion());
// console.log(gato.obtenerInformacion())

//HOF funcion que retorna una funcion

// function mayorQye(x){
//     return (num) => num > x
// }

// const MAYOR_QUE_DIEZ = mayorQye(10)// el parametro aplica a mayorQue

// console.log(MAYOR_QUE_DIEZ(9))// el parametro aplica a MAYOR_QUE_DIEZ



//EJEMPLO SUMAR Y RESTAR

// function asignarOperacion(operacion){
//     if(operacion === 'sumar'){
//         return function(nro1, nro2){
//             return nro1 + nro2;
//         }
//     }
//     else if(operacion === 'restar'){
//         return (nro1, nro2) => nro1 - nro2;
//     }
// }


// let suma = asignarOperacion('sumar')

// console.log(sumar(4, 6))     

/////////////////////////////////

//recibir funciones por parametro

// function porCadaUno(arr,fn){
//     for(const elemento of arr){
//         fn(elemento)
//     }
// }

// const NUMEROS = [0,1,2,3,4,5,6];

// porCadaUno(NUMEROS, alert)

/////////// * * * * * * * * * * * * * * * *
//metodos

//forEach = itera sobre cada elemento del array

// const NUMEROS = [1,2,3,4,5];

// NUMEROS.forEach(function(numero){
//     const RESULTADO = numero *2
//     console.log(RESULTADO)
// })


//array estudiantes

// const ESTUDIANTES=[
//     {
//         nombre: 'ana',
//         edad: 20
//     },
//     {
//         nombre: 'pepe',
//         edad: 30
//     },
//     {
//         nombre: 'juan',
//         edad: 10
//     },
// ]

// function saludarEstudiante(estudiante){
//     console.log(`hola ${estudiante.nombre}, tu edad es de ${estudiante.edad}`)
// }

// ESTUDIANTES.forEach(saludarEstudiante);

//productos

// const PRODUCTOS =[
//     {
//         articulo: 'iphone 11', precio: 600
//     },
//     {
//         articulo: 'iphone 12', precio: 800
//     },
//     {
//         articulo: 'iphone 13', precio: 1000
//     },
// ]

// function aplicarDescuento(producto){
//     const DESCUENTO = 0.1
//     const PRECIO_CON_DESC = producto.precio *(1-DESCUENTO)
//     console.log(`EL producto es un ${producto.articulo}, su precio es de ${PRECIO_CON_DESC}`)
// }

// PRODUCTOS.forEach(aplicarDescuento)


//metodo FIND = encuentra el PRIMER elementp de un arrayh qie cumpla cpn una condicion

// const ESTUDIANTES = [
//     {
//         nombre: 'ana', 
//         edad: 20
//     },
//     {
//         nombre: 'pepe',
//         edad: 30
//     },
//     {
//         nombre: 'gina',
//         edad: 40
//     }
// ]

// const USUARIO_MAYOR_EDAD = ESTUDIANTES.find(function(estudiante){
//     return estudiante.edad > 25;
// })

// console.log(USUARIO_MAYOR_EDAD)

//////////////////////////

//metodo FILTER = crea un nuevo array con todos los elementos que cumplan una condicion determinada//

// const PRODUCTOS =[
//     {
//         articulo: 'iphone 11', precio: 600
//     },
//     {
//         articulo: 'iphone 12', precio: 800
//     },
//     {
//         articulo: 'iphone 13', precio: 1000
//     },
//     {   
//         articulo: 'iphone 14', precio: 1200
//     }
// ]


//solicitarle al usuario un precio minimo

// const PRECIO_MINIMO_USUARIO =parseFloat(prompt('ingrse el precio minimo'));

// if(isNaN(PRECIO_MINIMO_USUARIO)){
//     console.log("porfa ingresa un nro");
// } else{
//     const PRODUCTOS_FILTRADOS = PRODUCTOS.filter(function(producto){
//         return producto.precio >= PRECIO_MINIMO_USUARIO;
//     });
//     console.log('productos que cumpolan con La dcondicion: '+ PRODUCTOS_FILTRADOS)
// }

//////////////////////

//metodo SOME = verifica si al menos un elemento del array cumple

const NUMEROS = [1,2,3,4];

let hayNumerosMatoresA10 = NUMEROS.some(function(numero){
    return numero > 10;
});

console.log(hayNumerosMatoresA10)

//metodo MAP = crea un array nuevo con la modificacion que querramos

//array de productos

const PRODUCTOS =[
    {
        articulo: 'iphone 11', precio: 600
    },
    {
        articulo: 'iphone 12', precio: 800
    },
    {
        articulo: 'iphone 13', precio: 1000
    },
    {   
        articulo: 'iphone 14', precio: 1200
    }
]

// let nameMayus = PRODUCTOS.map(function(producto){
//     return producto.articulo.toUpperCase();
// })

// console.log(nameMayus);

let aumento = 0.5

let precioAumentado = PRODUCTOS.map(function(producto){
    return{
        articulo: producto.articulo,
        precio: producto.precio * (1 + aumento)
    }
})

console.log(precioAumentado);