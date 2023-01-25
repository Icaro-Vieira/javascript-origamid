// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: "Ícaro",
    sobrenome: "Vieira",
    idade: 19,
    estado: "São Paulo",
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um carteiro

var cachorro = {
    raca: "Labrador",
    cor: "Preto",
    idade: 19,
    latido: function(latido) {
        if (latido === "carteiro") 
            return "Au Au Au!"
        else
            return "Abana o rabo"
    }
}