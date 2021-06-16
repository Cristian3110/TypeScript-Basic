/**
 * Creación de interfaces en Typescript
 */

interface Usuario {
  nombre: string;
  password: string;
  confirmarPassword?: string;
}

let usuario1: Usuario = {
  nombre: "Juan",
  password: "1234",
  
};

console.log(usuario1);
console.log(usuario1.nombre);
console.log(usuario1.password)


interface abordar{
        abordarTRansporte():void;
}

let avion:abordar ={
    abordarTRansporte: function(){
        console.log('abordando');
    }
}

avion.abordarTRansporte();