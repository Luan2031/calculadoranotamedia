
const formulario = document.querySelector("#notas");
const resultado = document.querySelector("#resultado");

function alterarBorda(situacao) {

    resultado.classList.remove("aprovado", "recuperacao", "reprovado");

    if (situacao === "APROVADO") {
        resultado.classList.add("aprovado");

    } else if (situacao === "RECUPERAÇÃO") {
        resultado.classList.add("recuperacao");

    } else {
        resultado.classList.add("reprovado");
    }

}

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    const nota1 = Number(document.querySelector("#nota1").value);
    const nota2 = Number(document.querySelector("#nota2").value);
    const nota3 = Number(document.querySelector("#nota3").value);
    const nota4 = Number(document.querySelector("#nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao;

    if (media >= 7) {
        situacao = "APROVADO";

    } else if (media >= 5) {
        situacao = "RECUPERAÇÃO";

    } else {
        situacao = "REPROVADO";
    }

    alterarBorda(situacao);

    resultado.innerHTML = `
        <h3>BOLETIM</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Média:</strong> ${media.toFixed(2)}</p>
        <p><strong>Situação:</strong> ${situacao}</p>
    `;

});
