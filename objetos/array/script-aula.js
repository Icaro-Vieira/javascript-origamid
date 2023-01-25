// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = ["Ford", "Fiat", "Hoda"]
// carros[2] = "Ferrari"
// carros[3] = "Kia"
// carros[20] = "Uno"

// const li = document.querySelectorAll("li")

// const arrayLi = Array.from(li)

// const obj = {
//     0: "Ícaro",
//     1: "Gabriel",
//     2: "Bueno",
//     length: 3
// }

// const objArray = Array.from(obj)

// console.log(li)
// console.log(arrayLi)
// console.log(objArray)

// const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]]
// console.log(frutas[2][0].length)

// const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos2.sort()

// const idades = [32,21,33,43,1,12,8];
// idades.sort()

// console.log(instrumentos2)
// console.log(idades)

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Jeep");
const novaArray = carros.push("Citroem", "Mercedes-Benz");

// console.log(novaArray)
// console.log(carros)

// console.log(carros.shift()) // Remove do inicio
// console.log(carros.pop()) // Remove do fim
// console.log(carros.reverse()) // reverte a ordem

// console.log(carros)
// console.log(carros.splice(2, 2, "Fusca"))
// console.log(carros)

// console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
// console.log(
//   ["Item1", "Item2", "Item3", "Item4", "Item5"].fill("manteiga", 0, 3)
// );

// const linguagens = ["html", "css", "js", "php", "python", "js"];

// console.log(linguagens.includes("css")); // true
// console.log(linguagens.includes("ruby")); // false
// console.log(linguagens.indexOf("python")); // 4
// console.log(linguagens.indexOf("js")); // 2
// console.log(linguagens.lastIndexOf("js")); // 5

// linguagens.join(); // 'html,css,js,php,python'
// linguagens.join(' '); // 'html css js php python'
// linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// let htmlString = '<h2>Título Principal</h2>'
// htmlString = htmlString.split('h2');
// // ['<', '>Título Principal</', '>']
// htmlString = htmlString.join('h1');
// // <h1>Título Principal</h1>

const linguagens = ['html', 'css', 'js', 'php', 'python'];
const cloneLinguagens = linguagens.slice()

console.log(linguagens.pop())
console.log(linguagens)
console.log(cloneLinguagens)

