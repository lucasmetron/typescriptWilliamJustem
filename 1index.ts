const num1 = document.getElementById("num1") as HTMLInputElement; //tipo de um input html 
const num2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button")!; // a ! meio que diz pra ignorar o erro de possivel retorno nulo, pois eu tenho certa que vai vir algo

function sum(a:number , b:number ) { //tipando o tipo number para os 2 parametros
  return a + b;
}

button.addEventListener("click", () => {
  console.log(sum(Number(num1.value), Number(num2.value))); // transforamndo os texto em number
});
