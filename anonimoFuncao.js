//funções anônimas servem pra ser guardada dentro de variáveis

console.log(velocidadeDupla(50))
//Uncaught ReferenceError: Cannot acess: "velocidadeDupla" before initialization...
console.log(aumentarVelocidade(60, 10))
//70

let velocidadeDupla = function(velocidade) {
    return velocidade*2
}

let novaVelocidade = velocidadeDupla(40)

function aumentarVelocidade(velocidade, aceleracao) {
    return velocidade + aceleracao 
}

console.log(novaVelocidade)
//80

