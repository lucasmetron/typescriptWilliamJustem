"use strict";
// type alias = Atalho ou apelido.
function logInfo(uid, user) {
    console.log(`um produto com ${uid} tem o titulo${user}`);
}
logInfo(123, "lucas");
logInfo("123", "lucas");
function plataform(plataform) {
    return plataform;
}
plataform("mac os");
// number | string o Union e unir dois tipos para tipar alguma variável, quando eu sei q o valor pode ser number mas tambem pode ser string
function logDetails(uid, item) {
    console.log(`um produto com ${uid} tem o titulo${item}`);
}
logDetails(5, "geladeira");
logDetails("50", "porta");
