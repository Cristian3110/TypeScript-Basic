/**
 * Generics: Utilizar un arreglo y especificar los tipos de datos que va a utilizar dicho arreglo
 */

let arregloNumeros: Array<number>;

arregloNumeros = [1, 2, 3, 4];
//arregloNumeros = ['hola','mundo']
/**
 * en este caso daría error ya que se está especificando que solo se puede colocar valores númericos
 * en nuestro array
 */

console.log(arregloNumeros);
console.log(arregloNumeros[0]);

let arregloFrutas: Array<string> = ["manzana", "pera", "mango", "mandarina"];

console.log(arregloFrutas);
console.log(arregloFrutas[2]);

let arregloRespuestas: Array<boolean>;
arregloRespuestas=[true,false,true];
console.log(arregloRespuestas);
console.log(`La 1era respuesta correcta es: ${arregloRespuestas[0]} `)
