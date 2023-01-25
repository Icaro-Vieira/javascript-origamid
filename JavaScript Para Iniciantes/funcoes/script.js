// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor) {
    return !!valor
}

console.log(valorTruthy(null))
console.log(valorTruthy("icaro"))
console.log(valorTruthy(true))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
    return lado * 4
}

console.log(perimetro(2))
console.log(perimetro(8))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto("Alberto", "Pena"))
console.log(nomeCompleto("Edu", "Batista"))
console.log(nomeCompleto("Ícaro", "Vieira"))
console.log(nomeCompleto("Joselito", "O brabo"))
console.log(nomeCompleto("Marco", "Barbieri"))
console.log(nomeCompleto("Marcos", "Mijan"))
console.log(nomeCompleto("Niklas", "Ljungkrantz"))


// Crie uma função que verifica se um número é par
function isEven(number) {
    if (number % 2 === 0) {
        return `${number} Is Even`
    } else {
        return `${number} Is Odd`
    }
}

console.log(isEven(27))
console.log(isEven(28))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeArgument(argumento) {
    return typeof argumento
}

console.log(typeArgument(19))
console.log(typeArgument(isEven()))
console.log(typeArgument(null))
console.log(typeArgument(NaN))
console.log(typeArgument(teste = {}))
console.log(typeArgument(undefined))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function() {
    console.log(nomeCompleto("Icaro", "Vieira"))
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(30))
console.log(jaVisitei(30))
  