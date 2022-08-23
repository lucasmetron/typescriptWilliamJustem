var num1 = document.getElementById("num1"); //tipo de um input html 
var num2 = document.getElementById("num2");
var button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(num1.value), Number(num2.value))); // transforamndo os texto em number
});
