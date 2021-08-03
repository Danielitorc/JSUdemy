//Objetos
const producto = {
    nombreProducto: "Monitor HD",
    precio: 300,
    disponible: true
}

/*Imprime todo el contenido del objeto*/
//console.log(producto);

/*Imprime la constante que se desee del objeto*/
//console.log(producto.nombreProducto);
//console.log(producto.precio);
//console.log(producto.disponible);

//Modificar objetos
// producto.precio = 350;

//agregar una constante al objeto
// producto.imagen = "Imagen agregada";
// console.log(producto);

//Elimimar una constante del objeto
// delete producto.disponible;
// console.log(producto);

//Extraer o convertir las constantes del objeto a variables metodo destructuring
const {precio, nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);