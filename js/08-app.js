// 8. Ejemplo con múltiples funciones que se pasan valores

function dividir(a, b) {
    return a / b;
}
const resultdividir = dividir(4, 2);// se debe asignar una variable para que pueda obtener el valor retornado
console.log(resultdividir);//2

// ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio) {//Parametro
    return total += precio;
}
function calcularImpuesto(totalImpuesto) {
    return totalImpuesto * 1.19;    
}
total = agregarCarrito(200);//Argumento
total = agregarCarrito(400);
total = agregarCarrito(400);

const totalaPagar = calcularImpuesto(total);
console.log(`El Total a Pagar es de: ${totalaPagar}`)
console.log(total);