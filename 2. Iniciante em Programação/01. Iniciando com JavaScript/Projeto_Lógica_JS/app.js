alert("Bem Vindo ao jogo do Número Secreto");

let numeroSecreto = 5;
let numeroEscolhido;
let tentativas = 1;
console.log(numeroSecreto);

// Mensagem de acerto do número
while (numeroSecreto != numeroEscolhido) {
    
    numeroEscolhido = prompt("Escolha um número entre 1 e 10");

    if (numeroSecreto == numeroEscolhido) {
        alert(`Acertou! Número ${numeroSecreto}, em ${tentativas} tentativas.`);
    } else {
        if (numeroSecreto > numeroEscolhido) {
            alert(`O Número Secreto é maior que ${numeroEscolhido}.`);
        } else {
            alert(`O Número Secreto é menor que ${numeroEscolhido}.`);
        }
        tentativas ++ // tentativas = tentativas + 1;
    }
}