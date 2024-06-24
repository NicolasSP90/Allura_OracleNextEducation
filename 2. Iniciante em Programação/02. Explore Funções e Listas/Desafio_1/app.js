let horaDesafio = document.querySelector("h1");
horaDesafio.innerHTML = "Hora do Desafio";

let cidade;

let soma = 0;

function BotaoConsole() {
    console.log("O botão foi clicado!");
}

function BotaoAlerta() {
    alert("Eu amo JS!"); //not

}

function BotaoPrompt() {
    cidade = prompt("Informe uma didade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você!`)

}

function BotaoSoma() {
    soma += parseInt(prompt("Digite o primeiro número para soma"));
    soma += parseInt(prompt("Digite o segundo número para soma"));
    alert(`A soma dos números é ${soma}`)
}


// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.