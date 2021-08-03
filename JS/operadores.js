//numeros

const numero1 = 100;
const numero2 = 200;
const numero3 = 34.6;

console.log(numero1);
console.log(numero2);
console.log(numero3);


//Se pueden realizar operaciones y mostrar de manera directa
console.log(numero3 * numero1);
console.log(numero2 - numero1);
console.log(numero3 + numero3);
console.log(numero2 / numero3);
console.log(numero2 % numero3);


//Clase Math
let resultado;

resultado = Math.PI;//3.1416
resultado = Math.round(2.4);//Redondea un mumero, del .4 es hacia abajo y del .5 es hacia arriba
resultado = Math.ceil(2.1);//Redondea un numero hacia arriba sin importar el valor de su decimal, puede ser desde el .1
resultado = Math.floor(2.9);//Redondea un numero hacia abajo sin importar el valor de su decimal
resultado = Math.sqrt(144);//Raiz cuadrada
resultado = Math.abs(-100);//Convierte un numero en positivo
resultado = Math.min(1,5,7,3);//Imprime o elije el valor mas pequeño
resultado = Math.max(100,203,1,2);//Imprime o elije el valor mas grande
resultado = Math.random();//Genera un numero aleatoreo pero no pasa de 1
//Para generar un numero aleatoreo entre 0 y el numero que se desee
resultado = Math.ceil(Math.random() * 1000);//para elejir un numero se utiliza * seguido del numero maximo para que se genere el aleatoreo


console.log(resultado);