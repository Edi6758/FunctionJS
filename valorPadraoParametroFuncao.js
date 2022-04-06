//são valores que o parametro vai receber caso não seja passado nenhum outro valor

function comprimentarPiloto(nome = "David", mensagem = "Olá") {
    console.log(mensagem + ", " + nome)
}

comprimentarPiloto("Edi Souza", "Seja bem vindo")
//vai exibir um console "Edi Souza, Seja bem vindo"

comprimentarPiloto()
//vai exibir um console "Olá David"

comprimentarPiloto("Nick")
//vai exibir um console "Olá Nick"