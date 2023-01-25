// const perimetro = new Function("lado", "return lado * 4")

// function somar(a1, b2, c3, d4, e5, f6, g7, h8, i9) {
//   return a1+b2
// }

// console.log(somar.length) // Retorna a quantidade de argumentos da função
// console.log(somar.name) // Retorna uma string com o nome da função

/* 
--- function().call(this, arg1, arg2, ...) Executa a função, sendo possível passarmos uma nova referência ao this da mesma.
*/

// const carro = {
//   marca: "Honda",
//   ano: 2008
// }

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano)
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Honda 2008

// const carros = ["Ford", "Mustang", "GT"]
// carros.forEach((item) => {
//   console.log(item)
// }) // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item)
// }) // Log de cada Carro

// const frutas = ["Banana", "Pêra", "Uva", "Maçã"]

// carros.forEach.call(frutas, (item) => {
//   console.log(item)
// }) // Log de cada Fruta

// function Dom(seletor) {
//     this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function(classe) {
//     console.log(this)
//     this.element.classList.add(classe)
// }

// const li = {
//     element: document.querySelector("li")
// }

// Dom.prototype.ativo.call(li, "ativar")

// const ul = new Dom("ul")

// ul.ativo.call(li, "ativo")
// ul.ativo("ativar")

// const frutas = ["Banana", "Uva", "Maçã"];

// Array.prototype.pop.call(frutas);
// frutas.pop();

// const arrayLike = {
//   0: "Item 1",
//   1: "Item 2",
//   2: "Item 3",
//   length: 3,
// };

// const li = document.querySelectorAll("li");
// const arrayLi = Array.from(li);

// const filtro = Array.prototype.filter.call(li, (item) => {
//     return item.classList.contains("ativo")
// })

// OU

// const filtro = arrayLi.filter((item) => {
//     return item.classList.contains("ativo")
// })

// const filtroBind = arrayLi.filter.bind(li, (item) => {
//     return item.classList.contains("ativo")
// })

// console.log("Com filter()",filtro)
// console.log("Com bind()", filtroBind())

// console.log(li)

/**
--- function.apply()

O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
 */

// const numeros = [3, 4, 6, 1, 34, 44, 32]; // Array de numeros
// console.log(Math.max.apply(null, numeros)); //
// console.log(Math.max.call(null, 3, 4, 6, 1, 34, 44, 32));

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

/**
 * --- function.bind()
 *     Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.
 *     Não precisamos passar todos os argumentos no momento do bind, podemos passar os mesmos na nova função no momento da execução da mesma.
 *     Podemos passar argumentos padrões para uma função e retornar uma nova função.
 *
 */
const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));
console.log(carro);

// VAMOS IMAGENAR UM CENÁRIO ONDE UM MÉDICO SÓ ATENDE PESSOAS COM 1.80 DE ALTURA, PARA FAZER UMA FUNÇÃO QUE CALCULE O IMC PODEMOS FAZER ASSIM:
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

console.log(imc(1.8, 70)); // 21.6
console.log(imc180(70)); // 21.6
