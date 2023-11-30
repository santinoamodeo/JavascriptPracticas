// const nombre = "coder";
// let edad = 8;
// let estudiante = true;

//OBJETOOOOOOOOOOOOOOOOOOOOOOOOOS
//DECLARARLOS


// let persona = {
//     nombre: "nombre",
//     edad: 6,
//     dominio: "belelelel.com.ar"
// }


// let persona = {
//     nombre: "samuel",
//     edad: 20,
//     dni: 16120133,
//     nacionalidad: "argentino"
// }


//LLAMARLOS

// console.log(persona); //asi se llaman de manera general, te caen en consola todos de una 
// console.log(persona.dni); //con el punto especifico a que propiedad quiero acceder
// console.log(persona["nombre"]) //nombro al objeto y entre corchetes, nombro como string a la propiedad a la que quiero acceder

// console.log(persona.nombre, persona.dni, persona.nacionalidad); //con una coma y llamando de nuevo logro tener varios llamados

// const CARGO ={       //se le suma informacion poniendo en consola
//     nombre:"",      // CARGO.nombre = "santino"
//     apellido:"",    
//     profesion: "",
//     ingreso: "",
// }


//OBJETOS CONSTRUCTORES
//funcion para crear objetos cada vez que sea necesario
//primero se crea la funcion, la primera letra en MAYUSCULAAA

// function Empleado(nombre, apellido, profesion, ingreso){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.profesion = profesion;
//     this.ingreso = ingreso;
// }

// const EMPLEADO1 = new Empleado("Nico", "Krein Werle", "Full stack", "100k lineal");
// const EMPLEADO2 = new Empleado("Maxi", "cardenas", "frontend", "2020usd per work");

// console.log(EMPLEADO1);
// console.log(EMPLEADO2.nombre, EMPLEADO2.apellido);


//METODOS

// let somaper = {
//     nombre: "juan",
//     edad: 30,
//     mostraInforacion: function(){
//         console.log("nombre: " + this.nombre) + ", edad: " + this.edad;
//     }
// }

// //llamar al metodo

// persona.mostraInforacion();


////////////////////////////////

//COTIZADOR DE IVA

// const IVA = 1.21;

// function Producto(nombre, precio, stock) {
//     this.nombre = nombre,
//     this.precio = precio,
//     this.stock = stock
//     this.precioIVA = function(){
//         let precioFinal = this.precio * IVA
//         return "$ " + precioFinal;
//     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// }

// let producto1 = new Producto("pepas", 100, 50);

// console.log(producto1);

// console.log(producto1.precioIVA());




////////////////////////////////////////////////////////////////
//CLASESSSSSSSSSSSSSSS

// class Persona{
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
//     saludar(){
//         console.log("Hola GENTE mi nombre es " + this.nombre + " y tengo: " + this.edad)
//     }
// }

// //

// const PERSONA1 = new Persona("juan", 30);

// console.log(PERSONA1.saludar());


// class Producto{
//     constructor(nombre, precio) {
//         this.nombre = nombre.toUpperCase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIVA(){
//         this.precio * 1.21;
//     }
//     vender(){
//         this.vendido = true;
//     }
// }

// const PRODUCTO1 = new Producto("arroz", 560);
// const PRODUCTO2 = new Producto("sal", 640);

// PRODUCTO1.sumaIVA();
// PRODUCTO1.vender();
// PRODUCTO2.sumaIVA();
// PRODUCTO2.vender();

// console.log(PRODUCTO1);
// console.log(PRODUCTO2);     



