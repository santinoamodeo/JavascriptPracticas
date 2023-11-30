//declarar funciones

// function saludar (){
//     console.log("hey body...");
// };

// saludar ();
// saludar ();
// saludar ();


//----------------------------------------------------------------

// function sumar (){
//     let num1 = parseFloat(prompt("ingresar nro 1"));
//     let num2 = parseFloat(prompt("ingresar nro 2"));
//     let suma = num1 + num2;
//     console.log("la suma es" + " " + suma);
// }

// sumar();


// function pedirNombre (){
//     let ingresaNombre = prompt("tu nombre es:");
//     console.log("tu nombre es: " + ingresaNombre);
// };

// pedirNombre();


// let numero = 0;

// while (numero < 3){
//     pedirNombre()
//     numero ++
// };

// pedirNombre();


//parametros

// let nombreIngresado = prompt("Ingresar nombre");

// function saludar(nombre){
//     console.log("Bienvenidos " + nombre);
// };

// saludar (nombreIngresado);

// function sumar() {
//     let num1 = parseFloat(prompt("ingresa el primer numero"));
//     let num2 = parseFloat(prompt("ingresa el segundo numero"));
//     let suma = num1 + num2;
//     console.log("la suma es: " + suma);
// }

// sumar();

// let ingresaNombre = prompt("Ingresar nombre");
// console.log("Tu nombres es " + ingresaNombre);


///PARAMETROSSSS

// let nombreIngresado = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresa apellido");

// function saludar(nombre, apellido) { //parametros
//     console.log("bienvenido " + nombre + " " + apellidoIngresado);
// }

// saludar(nombreIngresado, apellidoIngresado); //argumentos


// let numTotal = parseFloat(prompt("Ingresa el numero total"));
// let numDesc = parseFloat(prompt("Ingresar el numero desc"));

// function calculadoraDescuento(total, descuento) {
//     let desc = (total*descuento)/100;
//     let totalCDesc = total - desc;

//     return totalCDesc;
// }

// let totalCDesc = calculadoraDescuento(numTotal, numDesc);
// console.log("el total con el descuienco es de " + totalCDesc);


////////////////////////////////////////////////////////////////
//FUNCIONES FLECHA

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;

// const iva = x => x * 0.21;
// let precioProducto = 500;
// let descuento = 50;

// let nuevoPrecio = resta(suma(precioProducto + iva(precioProducto)), descuento);

// console.log('El precio del producto, con iva y con decuento es: ' + nuevoPrecio);


//AREA DE UN RECTANGULO 

// const CALCULAR_AREA_RECTANGULO = (base, altura) => base * altura;

// const AREA = CALCULAR_AREA_RECTANGULO (4.3);

// console.log('El area del rectangulo es ' + AREA);



// const suma = (a, b) => {return a + b};

// const resta = (a, b) => a - b;

// console.log(suma(15, 20));


//GLOBAL

let resultado = 0;

function suma(a, b){
    resultado = a + b;
}

suma(15, 20);

console.log(resultado);

////////////

//LOCAL

function restar(primero, segundo){
    let resto = primero - segundo;
    console.log(resto);
}

restar(5, 2);