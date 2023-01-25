// Crie uma função que verifique
// corretamente o tipo de dado

const objetoPessoa = {
  nome: "Icaro",
  idade: 19,
  peso: 125,
  altura: 1.95,
};
const arrayFrutas = [
  "Carambola",
  "Goiaba",
  "Cereja",
  "Amora",
  "Jabuticaba",
  "Tomate",
];
const stringFrase =
  "Meu nome é Optimus Prime e sou lider dos Autobots, proteja o Cubo!";
const numberType = 96;

console.log(Object.prototype.toString.call(objetoPessoa))
console.log(Object.prototype.toString.call(arrayFrutas))
console.log(Object.prototype.toString.call(stringFrase))
console.log(Object.prototype.toString.call(numberType))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true
  }
})
console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

console.log(Object.freeze(configuracao))

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))