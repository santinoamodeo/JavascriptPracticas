// ARRAYS

//estructura


//declaracion literal
//se declara una variable y se abren corchetes
// let producto = ["iphone 11", "iphone 12 ", "iphone 13", "iphone 14", "iphone 15"];
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let booleans = [true, false, true];
// let variedadDeDatos = ["sillon", 2, true];// pueden ser mixtos

// console.log(producto); //asi accedemos de manera gral

// console.log(producto[1]) //asi llamamos especifico a uno


// for(let i = 0; i<4; i++) {
//    console.log(producto[i]);    //recorredor de datos
// }


//constructor de objetos de arrays



const pokemones = [
    {
        pokemon: "pikachu",
        nrosPokemomon: 1
    }, 
    {
        pokemon: "charmander",
        nrosPokemomon: 2
    }
]


////////////////////////////////

//METODOS Y PROPIEDADES

// length = sirve para saber el largo de un array, ctos elementos tiene

const miArray = [1, "Marcus Aurelius", true, "stoicism"];
let largoArray = miArray.length; //me va devolver 4
console.log("El largo del array es: " + largoArray); 
console.log(miArray);

// aplicado a cadenas de texto

const texto = "Hola chicos";
const longitudTexto = texto.length;
console.log(longitudTexto);

////////////////////////////////

//push = agregar uno o mas elementos al final de un array

let numeros = [1, 2, 3, 4];
numeros.push(5); //entre () el num a agregar
numeros.push("no soy un num ni ahi");

console.log(numeros);

////////////////////////////////

//pop = elimina el ultimo elemento del array

let namba = [1, 3, 55, 255, 256];
let chauchaNamba = namba.pop(); //elimina el ultimo dato
console.log(namba); //nombra el array sin 256
console.log("elemento eliminado: " + chauchaNamba); //nombra el dato eliminado, 256

//////

//shift = elimina el primer elemento del array

let fila = ['primero', 'segundo', 'tercero'];
let elementoEliminado = fila.shift();

console.log(fila);
console.log('el elemento eliminado es el: ' + elementoEliminado);


///////////////

//splice 

let colores = ["rojo", 'verde', 'azul', 'amarillo', 'tararin']

colores.splice(1,1, "violeta"); //desde donde, cuantos, nuevo valor
console.log(colores)

/////////

//join = hago un array con los elementos para hacer una oracion y los une utilizando un separador especifico

let plabrerio = ['primero', 'segundo', 'tercero'];
let oracion = plabrerio.join(", ");
console.log(oracion);


////////////

//split = convierte un string en un array


const cadena = "chicos estan aburridos";
console.log(cadena);
const cadena2 = "263-487-8731";
console.log(cadena2);
let array = cadena.split(""); //sin espacio, guarda 1elemento por caracter
let array23 = cadena.split(" ") //con espacio, guarda 1elemento por palabra
let array25 = cadena2.split("-") //con -, guarda 1elemento por caracteres separados por -

console.log(array);
console.log(array23);
console.log(array25);

////////////////////////////////

//concat = concatena dos arrays en uno

const perros = ["florencio", "varela"];
const gatos = ["roberto", "mesera"];
const mascotas = perros.concat(gatos);
console.log(mascotas);

//////////  

//slice = genera un subconjunto de elementos de un array que ya existe

let original = [1, 2, 3, 4, 5];
let copia = original.slice(3,4)// copia ENTRE 3 y 4 

console.log(copia);

////////////////////////////////

//indexOf = nos dice el indice del elemento, en que lugar se encuentra

let frutas = ["123", "banana", "naranja", "kiwi"];

let indice = frutas.indexOf("kiwi");
console.log("el indice de la fruta es: " + indice);

/////// 

//includes  = con booleanos nos dice si un elemento nombrado por parametros existe en el array o no

const bernam = [1, 2, 4, 6];

console.log(bernam.includes(2)); //true
console.log(bernam.includes(3)); //false

//////      

//reverse = invierte el array

frutas.reverse();
console.log(frutas);


///////////////     

//ARRAYS CON OBJETOS

const personas = [
    {
        nombre: "maxi",
        edad: 30
    },
    {
        nombre: "pedro",
        edad: 16
    }
]

//FOR ..... OF 


let frutasForOf = ["manzana", 'frutills', 'pera']

for (const frutaForOf of frutasForOf){
    console.log(frutaForOf);
}

// prductos y precios

const CARRITO =[
    {
        producto: 'camiseta',
        precio: 10
    }, 
    {
        producto: 'zapatilla',
        precio: 20
    },
    {
        producto: 'chaleco',
        precio: 30
    }
]

//variable de precio
let precioTotal = 0;

for(const item of CARRITO){
    precioTotal += item.precio;
}

console.log("el pecio total del carrito es: " + precioTotal);