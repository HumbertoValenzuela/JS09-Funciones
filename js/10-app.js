// 10. Arrow Functions
const aprendiendoArrow = function () {
    console.log('Aprendiendo JavaScript');
}
aprendiendoArrow();

// ArrowFunction Función Flecha
const aprendiendoArrow1 = () => {
    console.log('Aprendiendo JavaScript');
}
aprendiendoArrow1();

//Un ArrowFunction con una línea se puede quitar los parentesis
const learnArrow = () => console.log('JavaScript');
learnArrow();

// ArrowFunction de una línea, da por implicito un return, se puede quitar el console.log
const returnArrow = () => 'JS';
console.log( returnArrow() );//llamar la función()