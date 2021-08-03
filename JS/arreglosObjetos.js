const meses = ["enero","febrero","marzo","abril"];

const carrito = [
    {nombre: "Monitor 20 pg", precio: 300},
    {nombre: "Monitor curvo", precio: 600},
    {nombre:"Tablet", precio: 450},
    {nombre:"Mouse", precio: 150},
    {nombre:"Teclado", precio: 200},
];

//forEach
meses.forEach(function(mes){
    if(mes == "Marzo" || "marzo"){
        console.log("Marzo si existe");
    }
});


//Verificar si un elemento del arreglo existe, solo para arreglos plasnos
let resultado1 = meses.includes("Diciembre");
console.log(resultado1);

//Para verificar si un objeto existe en un arreglo
resultado = carrito.some(function(producto){
    return producto.nombre === "Tablet";
});
console.log(resultado);

//reduce este metodo puede servir para realizar sumas de los objetos
resultado1 = carrito.reduce(function(total, producto){
    return total + producto.precio;
}, 0);//el 0 indicas el valor inicial
console.log(resultado1);


//para filtrar criterios con respecto a una condicion usamos el comando filter
resultado1 = carrito.filter(function(producto){
    return producto.precio > 400;
});
console.log(resultado1);