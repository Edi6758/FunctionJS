//1) Chamar a função sem o parâmetro necessário 

function comprimentarPiloto(nome, mensagem = "Olá") {
    console.log(mensagem + ", " + nome)
}

//no javascript nenhum parâmetro é obrigatório fazendo com que o parâmetro em falta retorne um valor indefinido
comprimentarPiloto()
//vai exibir um console "Olá undefined"

//2) Ordem dos parâmetros

function acelerar(velocidade, unidade = "KM/S", aceleracao) {
    novaVelocidade = velocidade + aceleracao
    console.log("Nova velocidade: " + novaVelocidade + unidade)
}

acelerar(50, "MI/S", 20)
//vai exibir um console "Nova celocidade: 50MI/S"

//apagando o valor de unidade na expectativa de preencher apenas os valores numéricos o seguinte erro corre:
acelerar(50, 20)
//vai exibir um console "Nova celocidade: NaN20"