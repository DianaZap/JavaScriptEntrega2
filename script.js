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

const producto0 = new Producto(0, 'CuadroÓleo', 2000, 1, 'CuadroÓleo.png')
const producto1 = new Producto(1, 'CuadroAcrilico', 1500, 1, 'CuadroAcrilico.png');
const producto2 = new Producto(2, 'Ilustración', 1000, 1, 'Ilustración.png');
const producto3 = new Producto(3, 'Impresión', 500, 100, 'Impresion.png');

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
cardComun(productos)

