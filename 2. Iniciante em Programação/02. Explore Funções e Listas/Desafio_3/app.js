// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(altura, peso) {
    return altura / (peso ** 2);
}


// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero) {
    if (numero == 1) {
        return 1;
    } else {
        return numero * fatorial(numero-1);
    }

}


// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function cambioDolar_Real(valorDolar, cambio = 4.8) {
    return valorDolar * cambio;
}


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function area_perimetro_retangular(altura, largura) {
    return {
        "perimetro" : 2 * (altura + largura),
        "area" : altura * largura
    }
}


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function area_perimetro_circular(raio) {
    return {
        "perimetro" : 2 * Math.PI * raio,
        "area" : pi * (Math.PI ** 2)
    }
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
        for (let contador = 1; contador <= 10; contador ++) {
            console.log(`${contador} x ${numero} = ${contador * numero}`);
        }
}
