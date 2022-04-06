//o retorno do algorítimo de uma função

function acelerar(velocidade, acelerar){
    let novaVelocidade = velocidade + acelerar
    console.log("Nova velocidade: " + novaVelocidade)
    return novaVelocidade
    // esse retorno serve pra você utilizar essa nova velocidade em outro lugar
}

let velocidade = 80
let acelerar = 5

console.log(velocidade)
//80

velocidade = acelerar(velocidade, acelerar)

console.log(velocidade)
//85

console.log(acelerar(90, 10))
//100