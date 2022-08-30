"use strict";
// São tipos que estende tipos existentes baseado em GENERICS
const todo = {
    title: "Assitir dark d novo",
    description: "relembrar os detalhes",
    completed: false
};
console.log(todo);
// todo.completed = true  o Readonly<Todo>  não irá permitir alterar o completed dessa forma
// para alterar o objeto é necessário criar um novo objeto como na função abaixo
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true }); // então com o partial, eu posso passar apenas o campo que eu quero atualizar, não preciso manda um objeto comleto
console.log(todo2);
const todo3 = {
    title: "Stray",
    description: "Jogo do gato"
};
const todo4 = {
    title: "Stray",
    completed: true,
};
