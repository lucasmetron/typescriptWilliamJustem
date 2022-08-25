// pra que serve? reutilização do código, tornar método mais genérico pra receber diferente tipos de entradas.

function useState() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState("foo");
console.log(" newState", newState.getState());

newState.setState(123);
console.log(" newState", newState.getState());

// agora vamos fazer o seguinte, a mesma função acima, quando o primeiro valor for declarado no newState como number, ele não vai poder mais ser atribuido valor
// por exepmlo, de string. Veja:

// alguns simbolos padrões:
// S => state
// T => type
// K => key
// V => Value
// E => Element

// 

// function useStateGeneric<S>() { também poderia ser dessa forma, porém na primeira vez, ele poderia receber qualquer tipo
// function useStateGeneric<S extends string | number>() { // Dessa forma, limitamos o primeiro tipo que será recebido em string e number
function useStateGeneric<S extends string | number = number>() { // Dessa forma, o number fica como padrão caso não seja pasasdo quando for usar na chamada do useStateGeneric
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// const newStateGeneric = useStateGeneric(); Dessa forma automaticamente pegaria tipo number
const newStateGeneric = useStateGeneric<string>();

newStateGeneric.setState("foo");
console.log(" newState", newState.getState());

// newStateGeneric.setState(123);
// console.log(" newState", newState.getState());
