alert("Bem Vindo ao jogo do Número Secreto");

let rangeMaximo = 100;
let numeroSecreto = Math.floor((Math.random()*rangeMaximo) + 1); // método Math.random retorna de 0 (incluido) a 1 (excluido). Ao aidicionar 1, retorna de 1 até o número indicado.
let numeroEscolhido;
let tentativas = 1;
console.log(numeroSecreto);

// Mensagem de acerto do número
while (numeroSecreto != numeroEscolhido) {
    
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${rangeMaximo}`);

    if (numeroSecreto == numeroEscolhido) {
        break;
    } else {
        if (numeroSecreto > numeroEscolhido) {
            alert(`O Número Secreto é maior que ${numeroEscolhido}.`);
        } else {
            alert(`O Número Secreto é menor que ${numeroEscolhido}.`);
        }
        tentativas ++ // tentativas = tentativas + 1;
    }
}
let palavraTentativa = (tentativas > 1) ?  "tentativas" : "tentativa"

// if (tentativas == 1) {
//     alert(`Acertou! Número ${numeroSecreto}, em ${tentativas} tentativa.`);
// } else {
//    alert(`Acertou! Número ${numeroSecreto}, em ${tentativas} tentativas.`);
//}
alert(`Acertou! Número ${numeroSecreto}, em ${tentativas} ${palavraTentativa}.`);

