let rangeMaximo = 10;
// let numeroSecreto = 5;
let numeroSecreto = gerarNumeroAleatorio();
let countTentativas = 1;
iniciarJogo();

function verificarChute() {
    let numeroInformado = document.querySelector("input").value;
    
    if (numeroInformado == numeroSecreto) {
        exibirtTexto("h1", "Acertou!");
        let palavraTentativa = countTentativas == 1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o Número Secreto com ${countTentativas} ${palavraTentativa}!`;
        exibirtTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroInformado > numeroSecreto) {
            exibirtTexto("p", `O número é menor que ${numeroInformado}!`);
        } else {
            exibirtTexto("p", `O número é maior que ${numeroInformado}!`);
         }
    }
    countTentativas ++;
    limparCampo();
}

function exibirtTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * rangeMaximo + 1);
}

function limparCampo() {
    document.querySelector("input").value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    countTentativas = 1;
    iniciarJogo();
}

function iniciarJogo() {
    exibirtTexto("h1", "Número Secreto");
    exibirtTexto("p", `Informe um número entre 1 e ${rangeMaximo}`);
    document.getElementById("reiniciar").setAttribute("disabled", true);
}



