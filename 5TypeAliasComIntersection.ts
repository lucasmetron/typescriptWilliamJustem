// accountInfo - tipo da conta
// charInfo - carateristicas do personagem
// conjunto de accountInfo e charinfo

type Id = string | number;

type AccountInfo = {
  id: Id;
  name: string;
  email?: string; // com ?, essa chave fica como opcional
};

const account: AccountInfo = {
  id: 123,
  name: "lucas",
  email: "lucas@gmail.com",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "lucasmetron",
  level: 5,
};

// intersection uni os dois tipos que ja foram declarados, parecido com o Union
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "dfsf5!#$",
  name: "lucas",
  // não precisei passa o email pq ele nao esta como obrigatório
  nickname: "lucasmetron",
  level: 6
};


