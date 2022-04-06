//função de alta classe que recebe ou retorna outra função
//As funções dentro de uma high order function normalmente são anônimas 
//a função que a gente envia como parâmetro de uma HOF normalmente se chama callback

function duplaVelocidade(velocity, imprimir) {
    console.log("Entrei em dupla velocidade")
    let novaVelocidade = velocidade * 2
    imprimir(novaVelocidade)
    return novaVelocidade
}

let imprimirVelocidade = velocidade => {
    console.log("Nova velocidade", + velocidade + "km/s")
}

let novaVelocidade = duplaVelocidade(60, imprimirVelocidade)

console.log(novaVelocidade)
//Entrei em dupla velocidade
//Nova velocidade 120 km/s
//120

//=======================

function duplaVelocidade(velocity, imprimir) {
    console.log("Entrei em dupla velocidade")
    let novaVelocidade = velocidade * 2
    imprimir(novaVelocidade)
    return novaVelocidade
}

let anotaVelocidade = duplaVelocidade(50,  velocidade =>{
    console.log("Outra velocidade: " + velocidade)
})

//120
//Entrei em dupla velocidade
//Nova velocidade 100 km/s