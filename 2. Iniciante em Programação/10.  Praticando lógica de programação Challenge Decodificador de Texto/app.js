let textoNomal = "";

let listaLetras = ["e", "i", "a", "o", "u"];

let listaChaves = ["enter", "imes", "ai", "ober", "ufat"];


function criptografar() {
    textoNomal = document.getElementById("input").value;
    document.getElementById("resposta").innerHTML = mudarString(listaLetras, listaChaves, "Criptografar");
    mudarEstilo("style_answer");
}

function descriptografar() {
    textoNomal = document.getElementById("input").value;
    document.getElementById("resposta").innerHTML = mudarString(listaChaves, listaLetras, "Descriptografar");
    mudarEstilo("style_answer");
}

function copiarEresetar() {
    textoNomal = document.getElementById("resposta").innerHTML;
    navigator.clipboard.writeText(textoNomal)
    document.getElementById("input").value = "";
    mudarEstilo("style_start");
    alert("O texto foi copiado!");
}

function mudarString(listaAlterar, listaRegra, acao){
    let novoTexto = textoNomal;
    if (acao == "Criptografar") {
        for (i=0; i < listaLetras.length; i++) {
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }
    if (acao == "Descriptografar") {
        for (i=listaLetras.length-1; i >= 0 ; i--) {
            novoTexto = novoTexto.replaceAll(listaAlterar[i], listaRegra[i]);
        }
    }
    return novoTexto;
}

function mudarEstilo(estilo) {
    document.getElementById("hidden_visual").href = `styles/${estilo}.css`;
}

