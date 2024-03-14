function validar() {
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const anoNascimento = document.getElementById("ano_nascimento");
    const graduacao = document.getElementById("graduacao");
    const campoSelect = document.getElementById("campo_select");

    if (nome.value == "" || sobrenome.value == "" || anoNascimento.value == "" || graduacao.value == "" || campoSelect.value == "") {
        alert("Erro: Preencha todos os campos!");
        return false;
    }

    const anoAtual = new Date().getFullYear();
    if (anoAtual - parseInt(anoNascimento.value) > 15) {
        alert("Erro: Apenas alunos com até 15 anos podem se cadastrar!");
        return false;
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h3>Dados do Aluno:</h3>
        <p>Nome: ${nome.value} ${sobrenome.value}</p>
        <p>Ano de Nascimento: ${anoNascimento.value}</p>
        <p>Graduação Pretendida: ${graduacao.value}</p>
        <p>Campo Select: ${campoSelect.value}</p>
    `;

    return false; // Evita o envio do formulário
}