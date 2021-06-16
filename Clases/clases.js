"use strict";
class Personas {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Personas('cristian');
console.log(persona1.getNombre());
console.log(Personas.metodoEstatico());
