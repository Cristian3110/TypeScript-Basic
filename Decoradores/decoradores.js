/*****************************
 * Decoradores en Typescript
 *****************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Usando los decoradores
function Saludar(target) {
    target.prototype.saludos = function () {
        console.log("Hola desde decoradores");
    };
}
{ }
var Hola = /** @class */ (function () {
    function Hola() {
    }
    Hola = __decorate([
        Saludar
    ], Hola);
    return Hola;
}());
var Hola1 = new Hola();
Hola1.saludos();
