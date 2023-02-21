//Saludo

function saludoGenerico() {
    alert("Bienvenido a Zasa Arte");
}

saludoGenerico();

//Saludo especifico

let nombreUsuario = prompt("Cual es su nombre?")
alert(`${nombreUsuario},elija una de las siguientes opciones:`)

let categorias=[{
	codigo:1,
	nombre:"Impresión",
	subcategorias:null
},
{
	codigo:2,
	nombre:"Ilustración",
	subcategorias:null
},
{
	codigo:3,
	nombre:"Técnica Artística",
	subcategorias:[{codigo:1, nombre:"Óleo sobre lienzo"},{codigo:2, nombre:"Acrilico"},{codigo:3, nombre:"Acuarela"}]
}]


function preguntar(){
	var codigo=parseInt(prompt(`Escriba el numero de la tecnica que quiera elegir: 1)Impresion , 2)Ilustración y 3)Técnica Artística`))
	if ((codigo == 1) || (codigo==2) || (codigo==3)){
		let categoria = categorias.filter(function(element){
return element.codigo == codigo;
		});
		console.log(categoria)
		alert(`usted ha elegido ${categoria[0].codigo} : ${categoria[0].nombre}`)

		if(categoria[0].subcategorias){
			let tecnica = parseInt(prompt("Escriba el numero de la tecnica que quiera elegir: 1)Óleo sobre lienzo, 2) Acrilico ó 3) Acuarela"))
			const subcategoria = categoria[0].subcategorias.filter(function(element){
return element.codigo == tecnica;
			});
console.log(subcategoria)
			alert(`Usted ha elegido la técnica artística ${subcategoria[0].codigo}: ${subcategoria[0].nombre}`)
		}
		
	}else{
		alert("Ingrese un valor VÁLIDO")
		preguntar()
	}

}

preguntar()

//Elija dimensiones

let dimensionesProducto = prompt("Escriba la dimensión para producto elegido, por ejemplo: 50 x 70 cm")
		alert (`Las dimensiones de producto, sera de ${dimensionesProducto}`)
		console.log (dimensionesProducto);

class Producto{
	constructor (nombre, dimesiones,cantidad,precio){
		this.nombre=nombre;
		this.dimesiones=dimesiones;
		this.cantidad=cantidad;
		this.precio=precio;
	}
}

const nombre = new Producto ();
const dimensiones = new Producto (`${dimensionesProducto}`);
const cantidad = new cantidad ();
const precio = new precio ();

const arrayProductos = [nombre, dimensiones, cantidad, precio];

const contenedorProductos = document.getElementById("contenedorProductos")

arrayProductos.forEach(producto => {
	const div = document.createElement("div");
	div.innerHTML= `<p> Nombre: ${producto.nombre}</p>
					<p> Dimensiones: ${producto.dimensiones}</p>
					<p> Cantidad: ${producto.cantidad}</p>
					<p> Precio: ${producto.precio}</p>
					<button> Agregar al carrito </button>`;
					contenedorProductos.appendChild(div);
})



/* function compraProducto(funcion()){

}

function compraProducto(){
	return funcion()
} */
	
/* for (let i = 1; i <1; i++){

} */







