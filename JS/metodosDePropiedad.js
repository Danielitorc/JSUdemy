//Creo un objeto
const reproductor = {
    //  Creo funciondes dentro del objeto
    reproducir: function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la PlayList: ${nombre}`);
    },
    reproducirPlaylis: function(nombre){
        console.log(`Reproducinedo la PlayList: ${nombre}`);
    }
}


reproductor.borrarCancion = function(id){
    console.log(`Eliminando Canción ${id}`);
}



//Paso valores y mando a llamar a las funciones
reproductor.crearPlaylist('Banda');
reproductor.reproducir(3098);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.reproducirPlaylis('Banda');
