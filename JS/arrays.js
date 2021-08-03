//arreglos o arrays

const numeros = [10, 20, 30, 40, 50];
const meses = ["enero","febrero","marzo","abril"];


//Imprimir el arreglo en una tabla para un mejor entendimiento
// console.table(numeros);

//Imprimirlo a modo de arreglos
// console.log(numeros);

//acceder a un valor por la posicion del valor dentro del arreglo
// console.log(numeros[3]);
// console.log(numeros[0]);
// console.log(numeros[2]);

//imprimir el tamaño de la lista
// console.log("EL tamaño del arreglo es de: " + numeros.length);

//Imprimir el arreglo completo
// numeros.forEach(function(numero){
//     console.log(numero);
// })
// if(numeros.length > 0){
//     console.log("Continuar con tu compra");
// }

/*Agregar elemetos al arreglo*/
numeros.push(60, 70, 80)//Inserta al inicio del arreglo
numeros.unshift(-30,-20,-10,0)//Inserta al inicio del arreglo
console.log(numeros);

/*Eliminar elementos al arreglo*/
meses.pop();//elimina el ultimo elemento
meses.shift();//elimina el primer elemento

console.table(meses);


