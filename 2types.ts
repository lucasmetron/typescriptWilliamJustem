// boolean (true/false) segue exemplos:
let isOpen: boolean;

isOpen = false;
isOpen = true;

// string ('foo', "foo", `foo`) segue exemplos:
let message: string;

message = "foo";
message = "foo";
message = `foo`;

// number (int, float, hexadecimal, binario) segue exemplos:
let total: number;

total = 5;
total = 5.25;
total = 0xff0; // hexadecimal

// array
let itemsNumber: number[];
itemsNumber = [1, 5, 6, 1];

let itemsString: string[];
itemsString = ["teste", "lucas"];

let itemsDiferente: Array<number>; // ou poderia ser Array<string>
itemsDiferente = [1, 5, 6, 1];

// tuple ou tupla (quando sabemos que a array possui uma quantidade de items determinado e tambem sabemos os tipos desses items)
// a quantidade de tipos que for colocado na tupla, será obrigatório inserir.
let title: [number, string];
title = [1, "capitulo"];

let pessoa: [number, string, string];
pessoa = [26, "lucas", "rosa"];

// enum
// Enums são uma funcionalidade adicionada ao JavaScript pelo TypeScript
// na qual facilita o manuseio de grupos de constantes nomeadas.
enum Colors {
  white = "#fff",
  black = "#000",
}

enum entradaGamePad {
    Cima = "UP",
    Baixo = "DOWN",
    Esquerda = "LEFT",
    Direita = "RIGHT",
  }

// any - permite ser colocado qualquer coisa NÃO É LEGAL
let coisa: any;

coisa = 4;
coisa = "sddd";
coisa = [1];
coisa = {};

// void (retorna vazio)
function logger(): void {
  console.log("foo");
//   return 'oi' NÃO PERMITE RETORNAR NADA
}

// null | undefined
type Bla = string | undefined


// never (quando vamos jogar um erro na tela)
function error():never{
    throw new Error("error")
}

// object
let cart:object

cart = {name: 'relampago marquinhos'}


