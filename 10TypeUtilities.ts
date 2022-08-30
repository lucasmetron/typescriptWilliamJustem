// São tipos que estende tipos existentes baseado em GENERICS

// Existem vários, mas aqui vamos listar os 4 Pricipais
// Readonly: vai fazer com que todas as chaves do tipo desejado, recebe o valor apenas 1 vez e não permiti ser alterado
// Partial: faz com que todas chaves do tipo desejado fiquem opcionais vc pode pegar partes 
/// Pick: meio que faz um extend de outro tipo para o atual com apenas os campos que você inserir
// Omit: meio que faz um extend de outro tipo para o atual tirando os campos que você inserir

type Todo = {
    title: string;
    description: string,
    completed: boolean
}

const todo: Readonly<Todo> = { // o Readonly vai fazer com que todas as chaves do tipo Todo, recebe o valor apenas 1 vez e não permiti ser alterado
    title: "Assitir dark d novo",
    description: "relembrar os detalhes",
    completed: false
}

console.log(todo)

// todo.completed = true  o Readonly<Todo>  não irá permitir alterar o completed dessa forma

// para alterar o objeto é necessário criar um novo objeto como na função abaixo
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){ // o partial faz com que todas chaves do tipo Todo fiquem opcionais 
    return {...todo, ...fieldsToUpdate}
}

const todo2:Todo = updateTodo(todo, {completed:true}) // então com o partial, eu posso passar apenas o campo que eu quero atualizar, não preciso manda um objeto comleto

console.log(todo2)

/// Pick, meio que faz um extend de outro tipo para o atual com apenas os campos que você optar
type TodoPreview = Pick < Todo, "title" | "description" >

const todo3: TodoPreview = {
    title: "Stray",
    description: "Jogo do gato"
}

// Omit
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
    title: "Stray",
    completed: true,
}