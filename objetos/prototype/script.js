// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const icaro = new Pessoa("Ícaro", "Vieira", 19)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // li.constructor.name -> HTMLLIElement
li.click; // li.click.constructor.name -> Function
li.innerText; // li.innerText.constructor.name -> String
li.value; // li.value.constructor.name -> Number
li.hidden; // li.hidden.constructor.name -> Boolean
li.offsetLeft; // li.offsetHeight.constructor.name -> Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // li.hidden.constructor.name.constructor.name -> String
