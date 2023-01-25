function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.abracar = function() {
        return "Abraçou"
    }
    this.andar = function() {
        return "Andou pelo objeto"
    }
}

var obj = {
    nome: "Fone",
    quantidade: 2
}

Pessoa.prototype.andar = function() {
    return this.nome + "Pessoa andou"
}

Pessoa.prototype.nadar = function() {
    return this.nome + "Pessoa nadou"
}

const icaro = new Pessoa("Icaro", 19)

// console.log(Pessoa.prototype)
// console.log(icaro.prototype)

const pais = "Brasil"
const cidade = new String("São Paulo")

const listaAnimais = ["Cachorro", "Gato", "Papagaio"]

const lista = document.querySelectorAll("li")

// Transforma em uma Array
const listaArray = Array.prototype.slice.call(lista)
// OU
const listaArray2 = Array.from(lista)

const Carro = {
    marca: "Brasilia",
    preco: 2000,
    andar() {
        return true
    }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String
