/* 

Arrays -> Base de datos de nuestros productos // Carrito creado por el user
Funciones -> Mostrar productos en pantalla // El usuario agregue productos a su carrito
Objetos -> Productos que vendemos (Cafe, 100p, 20stock) // Productos agregados al carrito (Cafe, 1u )
Clases -> instanciar objetos

*/


//Class moldeador de objetos productos

class Producto{
    constructor(id, nombre, precio, stock, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen
    }
    restaStock(){
        this.stock = this.stock - 1
        console.log(`el stock de ${this.nombre} ha sido actualizado`)
    }
}

//Instanciar (Crear) productos objetos

const producto0 = new Producto(0, 'CuadroÓleo', 2000, 1, 'CuadroÓleo.jpg')
const producto1 = new Producto(1, 'CuadroAcrilico', 1500, 1, 'CuadroAcrilico.jpg');
const producto2 = new Producto(2, 'Ilustración', 1000, 1, 'Ilustración.jpg');
const producto3 = new Producto(3, 'Impresión', 250, 100, 'ImpresionVinilo.jpg');

const productos = [producto0, producto1, producto2]

//agregar un producto
productos.push(producto3)

//Funcion para insertar Cards con información en DOM
const cardComun = (listaStock) => {
    for (elem of listaStock){
        let card = document.createElement("div") //<div> </div>
        card.innerHTML = `<h2> Comprá ${elem.nombre} </h2> 
                    <input type="button" value="comprame" onclick="elem.restaStock()">`
        document.body.append(card)
    }
}
//cardComun(productos)

const cardBoostrap = (listaStock) => {
    for (arte of listaStock){
        let card = document.createElement("div")
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="./img/${arte.imagen}" class="card-img-top" alt="Acá va la imagen de ${arte.nombre}">
        <div class="card-body">
        <h5 class="card-title">${arte.nombre}</h5>
        <p class="card-text">Llevatelo por tan solo ${arte.precio}</p>
        <input type="button" onclick="agregaCarrito(${arte.id})" class="btn btn-primary" value="Compra ya, sólo quedan ${arte.stock}">
        </div>
    </div>`
        document.body.append(card)
    }
}

cardBoostrap(productos)


const arrayCarrito = []

class ObjCarrito{
    constructor(producto, cant) {
        this.producto = producto;
        this.cantidad = cant
    }
    sumaStock(){
        this.cantidad = this.cantidad + 1
    }
}
function agregaCarrito(prod){
    let existeEnCarrito = arrayCarrito.find(arte => arte.producto == prod)
    
    if (existeEnCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeEnCarrito.producto)
        arrayCarrito[posicion].sumaStock()
        console.table(arrayCarrito)

    } else { 
        const alCarrito = new ObjCarrito(prod, 1)
        arrayCarrito.push(alCarrito)
        console.table(arrayCarrito)
    }
}

function verCarrito() {
    document.body.innerHTML = ``

    for (item of arrayCarrito) {
        let card = document.createElement("div")
    } let datosProd = productos.find(elem => elem.id == item.producto)
    
    card.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="./img/${datosProd.imagen}" class="card-img-top" alt="Acá va la imagen de ${datosProd.nombre}">
            <div class="card-body">
            <h5 class="card-title">Llevas ${datosProd.nombre}</h5>
            <p class="card-text">Te llevas ${item.cantidad} unidades</p>
            </div>
            </div>`
        document.body.append(card)
        
    
}


