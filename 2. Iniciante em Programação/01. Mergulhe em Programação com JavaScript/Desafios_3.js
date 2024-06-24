// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let ContadorIncremental = 1;
while (ContadorIncremental <= 10) {
    alert(`Contador Incremental: ${ContadorIncremental}`);
    ContadorIncremental ++;
} 


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let ContadorDecremental = 10;
while (ContadorDecremental >= 1) {
    alert(`Contador Decremental: ${ContadorDecremental}`);
    ContadorDecremental --;
}


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagemRegressiva = prompt("Informe um número para contagem regressiva:");
while (contagemRegressiva >= 0) {
    console.log(contagemRegressiva);
    contagemRegressiva --;
}


// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagemProgressiva = prompt("Informe um número para contagem progressiva:");
let contador = 0
while (contador <= contagemProgressiva) {
    console.log(contador);
    contador ++;
}

