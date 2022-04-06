//parâmetros são dados que a gente passa pra função executar uma tarefa mas com os valores que a gente precisa

function acelerar(velocidade, aceleracao) {
    let novaVelocidade = velocidade + aceleracao
    console.log("Nova velocidade "+ novaVelocidade)
}

novaVelocidade(60, 10)
//vai exibir um console "Nova velocidade 70"

novaVelocidade(100, 20)
//vai exibir um console "Nova velocidade 120"

novaVelocidade(30, 20)
//vai exibir um console "Nova velocidade 50"