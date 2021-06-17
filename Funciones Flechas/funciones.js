/***
 * Funciones flechas con typescript
 */
var suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
var resta = function (a, b) {
    return a - b;
};
// También se puede reducir a esto: Se omiten las llaves y la palabra reservada return
var multiplicacion = function (a, b) { return a * b; };
console.log(resta(8, 6));
console.log(multiplicacion(5, 7));
var nombre = function (nombre) {
    console.log("Mi nombre es: " + nombre);
};
var apellido = function (apellido) { return console.log("Mi apellido es: " + apellido); };
nombre('Cristian');
apellido('Carrillo');
