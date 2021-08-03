//POO

/* Object literal */
const producto ={
    nombre: "Tablet",
    precio: 500
}

/* Object constructor */
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

//Crear funciones que solo se utilizan en un objeto especifico
Cliente.prototype.formatearCliente = function(){//para formatear un objeto (dar un formato de texto diferente, que no se imprima como un objeto)
    return `El cliente ${this.nombre} ${this.apellido}`;
}

Producto.prototype.formatearProducto = function(){//para formatear un objeto (dar un formato de texto diferente, que no se imprima como un objeto)
    return `Producto: ${this.nombre} ${this.precio}`;
}

//Instancio las clases para poder ejecutarlas
const producto2 = new Producto("Monitor curvo", 300);
const cliente = new Cliente("Daniel", "Rangel")


//Para ejecutar la clase habra que mandar a llamarla con un . seguido del nombre de la clase y () al finalizar el nombre
console.log(producto2.formatearProducto());
console.log(cliente.formatearCliente());


console.log("------------------------");

//Si no llamo las clases como se muestra arriba se imprimira el objeto de forma normal
console.log(producto2);
console.log(cliente);

