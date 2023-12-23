//CARRITO DE COMPRA COMO DIOS MANDA

//1 mostrar los productos dinamicamente
//2- agregar productos al carrito
//3- como evitar a cartga de productos repetidos
//4- mostrar los productos en HTML
//5- eliminar los productos

//////////////////////////

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; //cada vez que se crea un produco, nace con valor 1
    }
}

const BURGUER = new Producto(1, "Burguer", 3000, "./assets/img/burguesa.png")
const CHICKEN = new Producto(2, "Chicken", 2800, "./assets/img/chicken.png")
const PATATAS = new Producto(3, "Patatas", 1200, "./assets/img/patatas.png")
const PIZZA = new Producto(4, "Pizza", 3200, "./assets/img/pizza.png")


//creamos array que recibe productos

const PRODUCTOS = [BURGUER, CHICKEN, PATATAS, PIZZA];

//crear un array de carrito

let carrito = [];

console.log(PRODUCTOS)

//agregando DOM

const CONTENEDOR_PRODUCTOS = document.getElementById("contenedorProductos")

//crear una funciiion, que muestre los productos en stock

const MOSTRAR_PRODUCTOS = () =>{
    //iteramos sobre un foreach
    PRODUCTOS.forEach(producto =>{
        const card = document.createElement('div')
        //propiedades css
        card.classList.add("col-x;-3", "col-md-6", "col-sm-12")
        card.innerHTML=
        `
            <div class="card">
                <img src="${producto.img}"  class="card-img-tom imgProducto">
                <div class="card-body">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.precio}</p>
                </div>
                <button class="btn colorBoton" id="boton${producto.id}">Agregar al carrito</button>
            </div>
        `
        CONTENEDOR_PRODUCTOS.appendChild(card)

    })

    // const BOTON = document.getElementById(`boton${producto.id}`)
    // BOTON.addEventListener("click", () =>{
    //     agregarAlCarrito(producto.id)
    // })



}

MOSTRAR_PRODUCTOS();
