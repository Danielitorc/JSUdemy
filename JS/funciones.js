//Declaracion de la funcion se utiliza la palabra 
//reservada function seguido del nombre de la funcion

function suma(){
    console.log(10 + 10);
}
suma();//hay que mandarla a llamar para que se ejecute

//Las siguientes estructuras de funciones no las recomiendo mucho, esto debido a que son mas utilizadas para proteger las varibles y que no se mezclen con otro archivo


//Expresion de la funcion, es mas detectada como una variable
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();//hay que mandarla a llamar para que se ejecute

//funcion llamada IIFE
(function(){
    console.log("Funcion IIFE");
})();//Se manda a llamar sola