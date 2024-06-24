let rangeMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();

function verificarChute() {
    let numeroInformado = document.querySelector("input").value;
    console.log("Botão clicado");
    console.log(numeroSecreto);
    console.log(numeroInformado == numeroSecreto);

}

function exibitTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * rangeMaximo + 1);
}

exibitTexto("h1", "Número Secreto");
exibitTexto("p", `Informe um número entre 1 e ${rangeMaximo}`);


