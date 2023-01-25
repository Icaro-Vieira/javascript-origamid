const comida = "Pizza é ";
const agua = new String("Agua");

console.log(agua.length);

const frase = "a melhor comida do mundo";

console.log(frase[frase.length - 1]); // Acessando via brackets
console.log(frase.charAt(frase.length - 1)); // Acessando via método

const fraseFinal = comida.concat(frase);
console.log(fraseFinal);

const fruta = "Banana";
const listaFrutas = "Melancia, Abacaxi, Banana, Mamão";

// Procura pela string exata dentro de outra string. A procura é case sensitive.
console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log(fruta.startsWith("Ba"));
console.log(fruta.endsWith("na"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
const linguagem = 'JavaScript';
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript

// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
console.log(transacao1.slice(0, 3));
console.log(transacao3.slice(0, -3));

// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
console.log(fruta.indexOf("a"));
console.log(fruta.lastIndexOf("na"));
console.log(fruta.lastIndexOf("na"));

// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const preco1 = "R$ 99,00";

console.log(preco1.padStart(10, "."));
console.log(preco1.padEnd(10, "."));

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, "-"));
});

// Repete a string (n) vezes.
const repete = "JavaScript ";
console.log(repete.repeat(4));

// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
// console.log(listaItens);

let preco = "R$ 120,00"
preco = preco.replace(",", ".") // retorna R$ 120.00
console.log(preco)
const arrayLista = listaItens.split(", ");
// console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section"); // Join é um método de Array

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);


// Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.s
const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo2.toLowerCase() === "feminino"; // true
sexo3.toLowerCase() === "feminino"; // true


// Remove espaço em branco do início ou final de uma string.
const valor = "  R$ 23.00   ";
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
