// 9. Añadir Funciones en un Objeto

// Metodos de propiedad, es decir, son funciones con sintaxis
// que al utilizarlas es lo mismo que un método.
// es un objeto grande que contiene todas las funciones

const reproductor = {
    // se conoce como método de propiedad
    reproducir: function (id) {//propiedad de un objeto pero su valor es una función
    console.log(`Reproduciendo canción id: ${id}`);        
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlayList: function(listadoCanciones){
        console.log(`Creando PlayList de ...${listadoCanciones}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo la playList ${nombre}`)
    }
}
// para utilizar la función.
// el nombre del objeto.propiedad() como es función va el ()
reproductor.reproducir(30);//parametro
reproductor.reproducir(10);//parametro
reproductor.pausar();

// se puede agregar propiedad por fuera del objeto
// lo mismo con los métodos de propiedad 

reproductor.borrar = function(id){
    console.log(`Borrando...${id}`);
}
reproductor.borrar(30);
reproductor.crearPlayList('Tecno');
reproductor.reproducirPlayList('Electrónica');
