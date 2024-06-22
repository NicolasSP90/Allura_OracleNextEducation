// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual o dia da semana?");
console.log(diaSemana);

if (diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bom Final de Semana!");
} else {
    alert("Boa Semana");
}


// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroInformado = prompt("Informe um número positivo ou negativo");
console.log(numeroInformado);

if (numeroInformado > 0) {
    alert("Positivo");

} else {
    if (numeroInformado < 0) {
        alert("Negativo");

    } else {
    alert("Zero");
}}


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Informe a pontuação");
console.log(pontuacao);

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 500;
console.log(saldo);
alert(`O saldo na conta é de R$${saldo}`);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Informe seu nome:");
console.log(nome);

alert(`Bem Vindo(a), ${nome}`);
alert("Bem Vindo(a), " + nome);