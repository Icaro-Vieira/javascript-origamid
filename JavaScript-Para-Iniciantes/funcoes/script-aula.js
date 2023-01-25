function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(3))

function pi() {
   return 3.14;
}
  
var total = 5 * pi(); // 15.7
console.log(pi) // irá retornar a função montada no console  
console.log(pi()) // retorna o valor de pi 
console.log(total) // retorna o resultado da váriavel

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(120, 1.95))

function corFavorita(cor) {
    if (cor === "azul" ) {
        return "Eu gosto do céu"
    } else if (cor === "verde") {
        return "Eu gosto de mato"
    } else {
        return "Eu não gosto de cores"
    }
}

// Todas essas linhas de código faz a mesma coisa que a linha 41
function mostrarConsole() {
    console.log("Opa")
}

addEventListener("click", mostrarConsole)


addEventListener("click", function() {
    console.log("Opa")
})


function imc2(peso, altura) {
    var imc = peso / (altura ** 2)
    console.log(imc)
}

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return "Por favor digite um  número váldo"
    } else if (idade >= 60) {
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade(32)) 

var totalPaises = 193

function faltamVisitar(paisesVisitados) {
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}

console.log(totalPaises)

// Não tem como mostrarmos dados interno de uma função ex console.log(nome)
// isso acontece pois aquela variavel está somente sendo criada ali e sendo atribuida o valor para ela

var profissao = "Programador"

function dados() {
    var nome = "Ícaro"
    var idade = 19
    function outrosDados() {
        var endereco = "São Paulo"
        var idade = 20
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados())