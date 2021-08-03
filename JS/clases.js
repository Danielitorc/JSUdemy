//Clases
//Creo la clase
class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `Producto: ${this.nombre} ${this.precio}`;
    }

    precioProducto(){
        return `Precio del producto: ${this.precio}`;
    }
}

//Instancio la clase
const producto2 = new Producto("Monitor curvo", 300);
const producto3 = new Producto("Monitor HD", 230);

console.log(producto2.formatearProducto());
console.log(producto3.precioProducto());
