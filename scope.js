    //exemplo 01

let nomeNave = "Supernova"

function mudarNomeNave() {
    nomeNave = "Elemental"
}

console.log(nomeNave)
//supernova

mudarNomeNave()
console.log(nomeNave)
//elemental

    //exemplo 02

function velocidadeNaveInicial() {
    let velocidadeNave = 0 
}

velocidadeNaveInicial()

console.log(velocidadeNave)
//Uncaught ReferenceError: velocidadeNave is not defined

    //exemplo 03
function inserirInfoNave() {
    let velocidade = 50
    if(velocidade == 50){
        velocidade = 60
        var nomeDaNave = "Elemental"
        let tipoNave = "Dicovery"
    }

    console.log(velocidade)
    //60
    console.log(nomeDaNave)
    //Elemental
    console.log(tipoNave)
    //Uncaught ReferenceError: velocidadeNave is not defined
}

    //exemplo 04
function inserirDetalhesNave() {
    console.log(nomeNave)
    //Undefined
    console.log(tipoNave)
    //Uncaught ReferenceError: Cannot acess: "tipoNave" before initialization...
    var nomeDaNave = "Elemental"
    let tipoNave = "Discovery"
    console.log(nomeNave)
    console.log(tipoNave)
}