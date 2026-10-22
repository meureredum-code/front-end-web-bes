function executar(evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");

    if (nome.value === "") {
        erroNome.textContent = "Nome não pode estar vazio!";
        erroNome.classList.add("erro");
        erroNome.classList.remove("oculto");

    }

    function LimparErros() {
        document.querySelectorAll(".erro").forEach((elemento) ==> {
            elemento.classList.remove("erro");
            elemento.classList.add("oculto");
        })
    }
}