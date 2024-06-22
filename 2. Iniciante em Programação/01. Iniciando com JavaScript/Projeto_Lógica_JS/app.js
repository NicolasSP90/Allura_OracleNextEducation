alert("Bem Vindo ao jogo do Número Secreto");

let numeroSecreto = 5;
console.log(numeroSecreto);

let numeroEscolhido = prompt("Escolha um número entre 1 e 10");

// Mensagem de acerto do número
if (numeroSecreto == numeroEscolhido) {
    alert(`Acertou! Número ${numeroSecreto}`);
} else {
    alert("Errou!")
}