//POO

/* Object literal */
const producto ={
    nombre: "Tablet",
    precio: 500
}

/* Object constructor */
//Una clase es una manera de almacenar los datos de un objeto en especifico
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto("Monitor curvo", 300);
const producto3 = new Producto("Mouse", 300);

console.log(producto2);
console.log(producto3);

