// Cadenas de texto o strings

const producto ="Monitor HD";
const producto2 = "Monitor Curvo";

console.log(producto);
console.log(producto2);

//.lenght para contar las letras escritas y lo imprima en pantalla, comienza a contar desde cero
console.log(producto.length)
console.log(producto.length);

//.indexOf para que el sistema encuentre una letra e imprima la posicion
console.log(producto.indexOf("o"));

//.includes retornara true o false segun la peticion de la letra o texto a encontrar
console.log(producto.includes("HD"));//true
console.log(producto2.includes("liviano"));//false



//Concatenacion
const nombre = "Daniel Rangel";
const correo = "drangel@gmail.com";

console.log("Nombre Cliente: " + nombre + " E-mail: " + correo);

//Templete de strings o String literals
console.log(`Nombre Cliente: ${nombre} E-mail: ${correo}`);