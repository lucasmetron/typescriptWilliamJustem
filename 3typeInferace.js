// type inferece
var menssagem = "menssagem definida";
// menssagem = 5 NÃO PERMITE POR QUE O PRIMEIRO VALOR FOI STRING, ENTÃO O TS INFERE NA VARIAVEL, O TIPO STRING AUTÓMÁTICO
window.addEventListener("click", function (e) {
    console.log(e.target); //existe targe no tipo MouseEvent
    // console.log(e.foo) não permite pq nao existe no tipo MouseEvent
});
