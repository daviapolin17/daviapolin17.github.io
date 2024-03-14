function validar() {
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const anoNascimento = document.getElementById("ano_nascimento");
    const graduacao = document.getElementById("graduacao");
    const campoSelect = document.getElementById("campo_select");

    if (nome.value == "") {
        alert("Erro: O campo Nome está em branco!");
        return false;
    }
    if (sobrenome.value == "") {
        alert("Erro: O campo Sobrenome está em branco!");
        return false;
    }
    if (anoNascimento.value == "") {
        alert("Erro: O campo Ano de Nascimento está em branco!");
        return false;
    }
    if (graduacao.value == "") {
        alert("Erro: O campo Graduação Pretendida está em branco!");
        return false;
    }
    if (campoSelect.value == "") {
        alert("Erro: O campo Campo Select está em branco!");
        return false;
    }

    const anoAtual = new Date().getFullYear();
    if (anoAtual - parseInt(anoNascimento.value) < 15) {
        alert("Erro: Apenas alunos com mais de 15 anos podem se cadastrar!");
        return false;
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h3>Dados do Aluno:</h3>
        <p>Nome: ${nome.value} ${sobrenome.value}</p>
        <p>Ano de Nascimento: ${anoNascimento.value}</p>
        <p>Graduação Pretendida: ${graduacao.value}</p>
        <p>Cidade: ${campoSelect.value}</p>
    `;

    return false; // Evita o envio do formulário
}