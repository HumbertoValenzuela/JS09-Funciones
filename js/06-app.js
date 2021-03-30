// 6. Parametros por default

function saludando(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);     
}
saludando('Humberto', 'Valenzuela');

// Por Default, y le falta un argumento
function saludando1(nombre, apellido = 'Sin Apellido') {
    console.log(`Hola ${nombre} ${apellido}`);     
}
saludando1('Humberto'); // Hola Humberto Sin Apellido

// Por Default, con argumento
function saludando2(nombre, apellido = 'Sin Apellido') {
    console.log(`Hola ${nombre} ${apellido}`);     
}
saludando2('Humberto', 'valen'); // Hola Humberto valen
