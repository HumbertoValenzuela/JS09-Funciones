// 13. Arrow Functions en el Reproductor de Música
// 14 crear set y get en un objeto. llamar set y get en un objeto

const reproductor = {
    cancion: '',
    // se conoce como método de propiedad
    //propiedad de un objeto pero su valor es una función
    reproducir: id => console.log(`Reproduciendo canción id: ${id}`) ,
    pausar: () => console.log('Pausando...') ,
    crearPlayList: listadoCanciones => console.log(`Creando PlayList de ...${listadoCanciones}`) ,
    reproducirPlayList: nombre => console.log(`Reproduciendo la playList ${nombre}`),
   
    set nuevaCancion(canciones){
        this.cancion = canciones;
        console.log(`Añadiendo ${canciones}`)
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
// set se llama como un objeto
reproductor.nuevaCancion = 'Melaza';

// get no es necesario los parentesis reproductor.obtenerCancion()
// solamente se coloca parentesis cuando se declara así: pausar: () => console.log('Pausando...'). llamando reproductor.pausar();
reproductor.obtenerCancion;



// para utilizar la función.
// el nombre del objeto.propiedad() como es función va el ()
reproductor.reproducir(30);//parametro
reproductor.reproducir(10);//parametro
reproductor.pausar();

// se puede agregar propiedad por fuera del objeto
// lo mismo con los métodos de propiedad 

reproductor.borrar = id => console.log(`Borrando...${id}`);
reproductor.borrar(30);
reproductor.crearPlayList('Tecno');
reproductor.reproducirPlayList('Electrónica');
