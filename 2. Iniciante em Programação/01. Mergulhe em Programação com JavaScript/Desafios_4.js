// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Bem Vindo(a)!");


// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = prompt("Insira seu nome");
console.log(`Olá ${nome}`);


// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá ${nome}`);


// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
//let linguagemProg = prompt("Qual sua linguagem de programação favorita?")
console.log(`A linguagem é: ${linguagemProg}`);


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = parseInt(prompt("Valor 1: Insira um valor qualquer:"));
let valor2 = parseInt(prompt("Valor 2: Insira um valor qualquer:"));
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é ${resultadoSoma}`);


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultadoSubtracao = valor1 - valor2;
console.log(`A subtração de ${valor1} e ${valor2} é ${resultadoSubtracao}`);


// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = parseInt(prompt("Informe sua idade"));

//if (idade >= 18) {
//    console.log(`${idade} anos, ou seja, maior de idade`);
//} else {
//    console.log(`${idade} anos, ou seja, menor de idade`)
//}

let resposta = (idade >= 18) ? `${idade} anos, maior de idade` : `${idade} anos, menor de idade`;
console.log(resposta); 


// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numeroQualquer = parseInt(prompt("Informe um número positivo ou negativo:"));

if (numeroQualquer == 0) {
    console.log("O número é 0!");
} else {
    if (numeroQualquer > 0) {
        console.log("O número é positivo!");
    } else {
        console.log("O número é negativo!");
    }
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
let maxRange = parseInt(prompt("informe o número máximo:"));
while (contador <= maxRange) {
    console.log(contador);
    contador ++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = parseFloat(prompt("Digite a sua nota:"));
if (nota >= 7){
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random());

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let maxNumber1 = 10;
let resultado1 = Math.floor(Math.random() * maxNumber1) + 1
console.log(resultado1)  

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let maxNumber1 = 1000;
let resultado1 = Math.floor(Math.random() * maxNumber1) + 1
console.log(resultado1) 
