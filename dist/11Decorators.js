"use strict";
// é uma declaração que pode ser anexada eu uma classe, propriedade, metodo, prametro ou acessor
// vai trabalhar em cima dessas partes anotadas, para add coisas novas, vigiando essas marcações, para poder add elemento novo ou validacção e etc
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Component
// @Selector
// @useState("asdasd")
// CLASS
// factory
function Logger(prefix) {
    return (constructor) => {
        console.log(`${prefix} - ${constructor}`);
    };
}
let Foo = class Foo {
};
Foo = __decorate([
    Logger('awesome')
], Foo);
function setAPIVersion(versionAPI) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = versionAPI;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setAPIVersion("2.0.0.0")
], API);
console.log(new API);
// PROPERTY
function minLenght(length) {
    return (target, key) => {
        console.log('target', target);
        console.log(key);
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
__decorate([
    minLenght(5)
], Movie.prototype, "title", void 0);
const movie = new Movie('Interestellar');
console.log("🚀 ~ file: 11Decorators.ts ~ line 50 ~ movie", movie);
// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Acessor decorator
