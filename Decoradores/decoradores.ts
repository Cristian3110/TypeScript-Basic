/*****************************
 * Decoradores en Typescript
 *****************************/

// Usando los decoradores
function Saludar(target: Function):void {
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}{}

@Saludar
class Hola{
    constructor(){}
}

let Hola1 = new Hola();
Hola1.saludos();