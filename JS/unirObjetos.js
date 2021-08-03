//Unir Objetos, las buenas practicas indican que no hay que modificar los objetos cuando se unan

const producto = {
    nombreProducto: "Monitor HD",
    precio: 300,
    disponible: true
}

const medidas = {
    alto: "54cm",
    profundidad: "35cm",
    ancho: "45cm",
}

//Imprimo un objeto para mostrar diferencia en pantalla
console.log(producto);

//Para unir los objetos
const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);