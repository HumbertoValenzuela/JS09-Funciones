// 7. Como se Comunican las funciones
iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');  
    usuarioAutenticado('Humberto');//Argumento  
}

function usuarioAutenticado(usuario) {//Parametro
    console.log('Autenticación usuario ... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}

