//Arrow Functions

//estructura basica de un arrow function
const aprendiendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);
//Mando a llamar la funcion
aprendiendo("JavaScript");


const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(10, 5);


const meses = ["enero","febrero","marzo","abril"];

const carrito = [
    {nombre: "Monitor 20 pg", precio: 300},
    {nombre: "Monitor curvo", precio: 600},
    {nombre:"Tablet", precio: 450},
    {nombre:"Mouse", precio: 150},
    {nombre:"Teclado", precio: 200},
];

//forEach
meses.forEach( mes =>{
    if(mes == "Marzo" || "marzo"){
        console.log("Marzo si existe");
    }
});

//Para verificar si un objeto existe en un arreglo en arrow function no es necesario el return
resultado = carrito.some( producto => producto.nombre === "Tablet");
console.log(resultado);

//reduce este metodo puede servir para realizar sumas de los objetos
resultado1 = carrito.reduce( (total, producto) => total + producto.precio, 0);//el 0 indicas el valor inicial
console.log(resultado1);


//para filtrar criterios con respecto a una condicion usamos el comando filter
resultado1 = carrito.filter( producto => producto.precio > 400);
console.log(resultado1);