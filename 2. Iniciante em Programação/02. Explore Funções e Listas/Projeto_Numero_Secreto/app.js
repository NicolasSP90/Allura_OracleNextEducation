// Intervalo do número secreto
let rangeMaximo = 10;

// Declarando lista de números sorteados
let listaNumeros = [];

// Geração e atribuição do número secreto
let numeroSecreto = gerarNumeroAleatorio();

// Contador de tentativas feitas
let countTentativas = 1;

// Inicializando variável do último número sorteado
let ultimoNumero;

// Início do jogo
iniciarJogo();

// função para verificar o número informado ("chutado")
function verificarChute() {
    // Atribuição do número informado
    let numeroInformado = document.querySelector("input").value;
    
    // Verificação se é igual
    if (numeroInformado == numeroSecreto) {
        
        // Exibe o texto no local do título
        exibirtTexto("h1", "Acertou!");

        // Verifica se a palavra deve ser escrita no singular ou plural
        let palavraTentativa = countTentativas == 1 ? "tentativa" : "tentativas";
        
        // Mensagem de acerto
        let mensagemTentativas = `Você descobriu o Número Secreto com ${countTentativas} ${palavraTentativa}!`;
        
        // Mensagem de acerto no local do parágrafo
        exibirtTexto("p", mensagemTentativas);

        // Habilitando o botão de reiniciar
        document.getElementById("reiniciar").removeAttribute("disabled");

        // Desabilitando o botão de chutar
        document.getElementById("chutar").setAttribute("disabled", true);
    
    } else {
        // Se o número informado for MAIOR
        if (numeroInformado > numeroSecreto) {

            // Exibe texto de que o número secreto é MENOR que o informado, no local do parágrafo
            exibirtTexto("p", `O número é menor que ${numeroInformado}!`);

        } else {
            // Exibe texto de que o número secreto é MENOR que o informado, no local do parágrafo
            exibirtTexto("p", `O número é maior que ${numeroInformado}!`);
        }
    }

    // Contador de tentativas +1
    countTentativas ++;

    // Limpa o local de input do número
    limparCampo();
}

// Função para exibir um determinado texto em uma tag
function exibirtTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    // responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
    // Necessário chave API
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    numeroSorteado = Math.floor(Math.random() * rangeMaximo + 1);
    
    // Se todos os números já tiverem sido sorteados, limpar a lista de números já sorteados
    if (listaNumeros.length == rangeMaximo) {
        listaNumeros = [];
        return gerarNumeroAleatorio();

    } else {
        // Se o número sorteado já saiu, repetir o sorteio
        if (listaNumeros.includes(numeroSorteado)) {
            return gerarNumeroAleatorio();
        
        } else {
            // Adicionar o número na lista para evitar repetição
            listaNumeros.push(numeroSorteado);
            return numeroSorteado;
        }
    }
}


// Função para limpar o campo de input
function limparCampo() {
    document.querySelector("input").value = "";
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    document.getElementById("chutar").removeAttribute("disabled");
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    countTentativas = 1;
    iniciarJogo();
}

// Função para iniciar o jogo (caixas de mensagem)
function iniciarJogo() {
    exibirtTexto("h1", "Número Secreto");
    exibirtTexto("p", `Informe um número entre 1 e ${rangeMaximo}`);
    document.getElementById("reiniciar").setAttribute("disabled", true);
}



