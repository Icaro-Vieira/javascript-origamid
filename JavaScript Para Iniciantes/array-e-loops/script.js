// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anosCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let anos = 0; anos < anosCopa.length; anos++) {
    console.log(`O Brasil ganhou a copa de ${anosCopa[anos]}`)
}

console.log("------------------------------")

// OU

anosCopa.forEach(anos => {
    console.log(`O Brasil ganhou a copa de ${anos}`)
})

console.log("------------------------------")

// Ou Maneira nova de fazer o for
for (let anos of anosCopa) {
    console.log(`O Brasil ganhou a copa de ${anos}`)
}

console.log("------------------------------")

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta])
    if (frutas[fruta] === "Uva") {
        break
    }
}

console.log("-----------------------------")

for (fruta of frutas) {
    console.log(fruta)
    if (fruta === "Pera") {
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1]
console.log(`A Ultima fruta é: ${ultimaFruta}`)