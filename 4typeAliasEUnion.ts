// type alias = Atalho ou apelido.

// no exemplo abaixo, veja que podemos fazer isso com tipos
type Uid = number | string;

function logInfo(uid: Uid, user: string) {
  console.log(`um produto com ${uid} tem o titulo${user}`);
}

logInfo(123, "lucas");
logInfo("123", "lucas");

// mas tambem podemos fazer isso com qualquer coisa
type Platform = "windows" | "linux" | "mac os";

function plataform(plataform: Platform) {
  return plataform;
}

plataform("mac os");

// number | string o Union e unir dois tipos para tipar alguma variável, quando eu sei q o valor pode ser number mas tambem pode ser string
function logDetails(uid: number | string, item: string) {
  console.log(`um produto com ${uid} tem o titulo${item}`);
}

logDetails(5, "geladeira");
logDetails("50", "porta");
