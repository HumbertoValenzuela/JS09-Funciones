// 12. Arrow Functions en un forEach y un map
const misCompras = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

// si tiene un parametro se quita los parentesis.
// si tiene una línea de código, el return es implícito
const recorriendo = misCompras.map( producto => `${producto.nombre} - Precio: ${producto.precio}` );
 console.log(recorriendo);

misCompras.forEach( producto => console.log(`For Each ${producto.nombre} - Precio ${producto.precio}`) );




