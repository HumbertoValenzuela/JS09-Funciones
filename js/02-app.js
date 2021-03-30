// 2. La Diferencia entre Function expression y Declaration

// ¿porque funciona (Function Declaration) y no (Function Expression)? JS se ejecuta en dos vueltas.
//  Se conoce como hoisting. la primera vuelta escanea el documento y registra todas las funciones y
//  determina que variables va a crear. esta etapa se conoce como etapa de creación, es decir, 
//  toma las funciones y las registra. En la segunda vuelta que es cuando se ejecuta, sumar3 se puede ejecutar
//  porque esta registrada

// Declaracion de Función (Function Declaration)
sumar3();// Funciona
function sumar3() {
    console.log(2 + 2);    
}

// En este caso la función no esta declarada como tal, es mas bien una variable.
// Registra la variable, y en la segunda vuelta para ejecutar, quiere ejecutar una función pero solo registro la variable
// Indicando el error

// Expresión de Función (Function Expression)
sumar4();// Cannot access 'sumar4' before initialization
const sumar4 = function() {
    console.log(3 + 3);
}

