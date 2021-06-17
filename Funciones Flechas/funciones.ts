/***
 * Funciones flechas con typescript
 */

let suma = function(a:number, b:number){
    return a+b;
}

console.log(suma(5,3));


let resta = (a:number,b:number)=>{
    return a-b;
}

// También se puede reducir a esto: Se omiten las llaves y la palabra reservada return
let multiplicacion = (a:number,b:number)=> a*b

console.log(resta(8,6));
console.log(multiplicacion(5,7));

const nombre = function(nombre:string){
    console.log(`Mi nombre es: ${nombre}`)
}

const apellido = (apellido:string)=> console.log(`Mi apellido es: ${apellido}`);

nombre('Cristian');
apellido('Carrillo');
