//This es una palabra reservada de JS


//creo el objeto con una funcion
const reservacion = {
    nombre: "Daniel",
    apellido: "Rangel",
    totalPagar: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.totalPagar}`);
    }
}

reservacion.informacion();


//Si se utiliza un array function, no se imprimira el resultado en pantalla, mostrara que no esta definido, ya que array function se dirigira a las variables globales
const reservacion2 = {
    nombre: "Jaqueline",
    apellido: "Cruz",
    totalPagar: 6000,
    pagado: true,
    informacion: () =>{
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.totalPagar}`);
    }
}

reservacion2.informacion();
