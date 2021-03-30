// 11. Las Ventajas de los Arrow Functions
const reproductor = (id) => {
    console.log(`Reproducir música...${id}`);
}
reproductor(40);

//Si ArrowFunction tiene un solo parametro se puede quitar los parentesis
const reproductor2 = id => {
    console.log(`Reproducir música...${id}`);
}
reproductor2(20);

//Si ArrowFunction tiene dos parametros, van los parentesis
const reproductor3 = (id, nombre) => {
    console.log(`Reproducir música...${id} ${nombre}`);
}
reproductor3(20,'Viviré');