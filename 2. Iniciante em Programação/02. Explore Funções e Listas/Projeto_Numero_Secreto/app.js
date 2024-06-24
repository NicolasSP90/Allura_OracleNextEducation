let titulo = document.querySelector("h1");
titulo.innerHTML = "Número Secreto";

let rangeMaximo = 100

let regras = document.querySelector("p");
regras.innerHTML = `Informe um número entre 1 e ${rangeMaximo}`;

function verificarChute() {
    console.log("Botão clicado");
}