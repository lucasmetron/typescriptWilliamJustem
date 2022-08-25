"use strict";
// são um conjunto de dados para descrever a estrutura de um objeto. Interface É UTILIZADA PARA DESCREVER OBJETOS
let spiderMan = {
    title: "Spider Man",
    description: "Melhor jogo do ano.",
    genre: "Ação",
    // platform: ["ps4", "ps5"],
    getSimilars: (title) => {
        console.log(`jogos similares a ${title}: ... ... ...`);
    },
};
if (spiderMan.getSimilars) { // Como a função getSimilars é opcional, é preciso usar dentro de if pq pode ser que ela não exista
    spiderMan.getSimilars(spiderMan.title);
}
console.log(spiderMan);
const WillsonFisk = {
    title: "Wilsson Fisk a solta",
    description: "Extensão",
    genre: "Açao",
    platform: ["ps4", "ps5"],
    originalGame: spiderMan,
    newContent: ["wilsson solto", "preso"],
};
console.log("🚀 ~ file: 7Interfaces.ts ~ line 42 ~ WillsonFisk", WillsonFisk);
class CreateGame {
    constructor(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}
