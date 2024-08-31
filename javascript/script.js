function generateNumber(){

const min = Math.ceil(document.querySelector(".inpu-min").value)
const max = Math.floor ( document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (max - min +1)) +min;

document.getElementById("result").innerText = "Resultado: " + result;

}


