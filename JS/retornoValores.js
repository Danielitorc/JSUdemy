//retorno de valores

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.10 * total;
}

//Asignamos valores a la variable total que enviara a la funcion agregarCarrito
total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);
total = agregarCarrito(2000);

//Llamo a la funcion agregarCarrito que me devuelve la suma de todo lo que se sumo
console.log(total);

//Creo nueva variable para asignar el costo total a pagar
const totalAPagar = calcularImpuesto(total);//calcularImpuesto es la funcion que trabajara para calcular el impuesto y sumar el total, para devolver el valor total a pagar, este valor se almacenara en la varable totalAPagar
console.log(totalAPagar);
