function saludar() {
  console.log("Hola Mundo con Typescript");
}

saludar();

//  >Definiciones de Variable

let saludo = "Hola mundo con Typescript2";

// saludo = 10; Aquí manda un error debido a que se está asignando un valor numérico a un string y choca
saludo = "Nuevo Saludo";

let numero: number;
numero = 10;

let cualquiera: any;
cualquiera = "cadena";
cualquiera = 10;

const PI_NUMERO = 3.14;

console.log(PI_NUMERO);

console.log(saludo);
