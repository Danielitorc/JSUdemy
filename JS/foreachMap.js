const carrito = [
    {nombre: "Monitor 20 pg", precio: 300},
    {nombre: "Monitor curvo", precio: 600},
    {nombre:"Tablet", precio: 450},
    {nombre:"Mouse", precio: 150},
    {nombre:"Teclado", precio: 200},
];

//forEach
//para imprimir todo el objeto
carrito.forEach(producto => console.log(producto));


//para imprimir solo las variables nombre
carrito.forEach(producto1 => console.log(producto1.nombre));


//para imprimir solo las variables precio
carrito.forEach(producto2 => console.log(producto2.precio));


//map
carrito.map(producto2 => console.log(producto2.nombre));

//Diferencia entre map y foreach
//map es utilizado para poder cerar un nuevo arreglo, por ejemplo

const arreglo1 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo1);
//Se le dio un nuevo formato que al arreglo original