"use strict";
// boolean (true/false) segue exemplos:
let isOpen;
isOpen = false;
isOpen = true;
// string ('foo', "foo", `foo`) segue exemplos:
let message;
message = "foo";
message = "foo";
message = `foo`;
// number (int, float, hexadecimal, binario) segue exemplos:
let total;
total = 5;
total = 5.25;
total = 0xff0; // hexadecimal
// array
let itemsNumber;
itemsNumber = [1, 5, 6, 1];
let itemsString;
itemsString = ["teste", "lucas"];
let itemsDiferente; // ou poderia ser Array<string>
itemsDiferente = [1, 5, 6, 1];
// tuple ou tupla (quando sabemos que a array possui uma quantidade de items determinado e tambem sabemos os tipos desses items)
// a quantidade de tipos que for colocado na tupla, será obrigatório inserir.
let title;
title = [1, "capitulo"];
let pessoa;
pessoa = [26, "lucas", "rosa"];
// enum
// Enums são uma funcionalidade adicionada ao JavaScript pelo TypeScript
// na qual facilita o manuseio de grupos de constantes nomeadas.
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
var entradaGamePad;
(function (entradaGamePad) {
    entradaGamePad["Cima"] = "UP";
    entradaGamePad["Baixo"] = "DOWN";
    entradaGamePad["Esquerda"] = "LEFT";
    entradaGamePad["Direita"] = "RIGHT";
})(entradaGamePad || (entradaGamePad = {}));
// any - permite ser colocado qualquer coisa NÃO É LEGAL
let coisa;
coisa = 4;
coisa = "sddd";
coisa = [1];
coisa = {};
// void (retorna vazio)
function logger() {
    console.log("foo");
    //   return 'oi' NÃO PERMITE RETORNAR NADA
}
// never (quando vamos jogar um erro na tela)
function error() {
    throw new Error("error");
}
// object
let cart;
cart = { name: 'relampago marquinhos' };
