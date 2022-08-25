// são um conjunto de dados para descrever a estrutura de um objeto. Interface É UTILIZADA PARA DESCREVER OBJETOS

interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

let spiderMan: Game = {
  title: "Spider Man",
  description: "Melhor jogo do ano.",
  genre: "Ação",
  // platform: ["ps4", "ps5"],
  getSimilars: (title: string) => {
    console.log(`jogos similares a ${title}: ... ... ...`);
  },
};

if (spiderMan.getSimilars) { // Como a função getSimilars é opcional, é preciso usar dentro de if pq pode ser que ela não exista
  spiderMan.getSimilars(spiderMan.title);
}

console.log(spiderMan);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const WillsonFisk: DLC = {
  title: "Wilsson Fisk a solta",
  description: "Extensão",
  genre: "Açao",
  platform: ["ps4", "ps5"],
  originalGame: spiderMan,
  newContent: ["wilsson solto", "preso"],
};
console.log("🚀 ~ file: 7Interfaces.ts ~ line 42 ~ WillsonFisk", WillsonFisk);

interface DLC2 extends Game {
  // tem como extender se criar nada novo, mas não faz sentido. pq se for assim pq nao usar Game?
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(title: string, description: string, genre: string) {
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}
