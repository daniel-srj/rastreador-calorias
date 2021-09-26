var soma = 0;

var botaoAdicionar = document.querySelector("#adicionar-alimento");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector(".form");

    var alimento = obtemAlimentoDoFormulario(form);

    var alimentoTr = montaTr(alimento);

    var tabela = document.querySelector("#tabela-alimentos");

    tabela.appendChild(alimentoTr);

    

    var campo = document.querySelector("#infocalorias")

    var calorias = [];

    calorias.push(campo.value);

    for(var i = 0; i < calorias.length; i++){
        soma += parseFloat(calorias[i]);
    }

    document.getElementById("totolcaltd").innerHTML = soma;
});

    

    
function obtemAlimentoDoFormulario(form) {
    var alimento = {
        nome: form.infoalimento.value,
        caloria: form.infocalorias.value
    }

    return alimento;
}

function montaTr(alimento) {
    var alimentoTr = document.createElement("tr");
    alimentoTr.classList.add("alimento");

    alimentoTr.appendChild(montaTd(alimento.nome, "nomealimento"));
    alimentoTr.appendChild(montaTd(alimento.caloria, "calalimento"));
    
    return alimentoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

