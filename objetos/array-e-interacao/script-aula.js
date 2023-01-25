// const carros = ["Ford", "Fiat", "Honda"]

// carros.forEach((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)
// })

// console.log(carros)

// const li = document.querySelectorAll("li");

// li.forEach((item, index) => {
//     item.classList.add("ativa" + index);
// });

// carros.map((item, index, array) => {
//     console.log(item.toUpperCase(), index, array)
//     return item
// })

// console.log(carros)

// const carros = ["Ford", "Fiat", "Honda"];

// const novaArray = carros.map((item, index, array) => {
//   return item.toUpperCase();
// });

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map((n) => n * 2);

// console.log(numerosX2);
// console.log(novaArray);
// console.log(carros);

// // DIFERENÇA ENTRE .map() vs [].forEach()
// /*
//     Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
// */

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);

// const nomeAulas = (aula) => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(tempoAulas);
// console.log(arrayNomeAulas);

// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

// const aulas = [10, 25, 30];
// const reduceAulas = aulas.reduce((acumulador, item) => {
//   return acumulador + item
// }, 0);

// console.log(reduceAulas)

// const numeros = [10, 25, 30, 3, 54, 33, 22]

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if(anterior > atual) {
//     return anterior
//   } else  {
//     return atual
//   }
//   return anterior > atual ? anterior : atual // operador ternario
// }, 0)

// OU MELHOR AINDA:

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual)

// console.log(maiorNumero)

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {})

// console.log(listaAulas)

// const frutas = ["Banana", "", "Maçã", "Uva"]

// const temUva = frutas.some((item) => {
//   return item === "Uva"
// })

// const every = frutas.every((fruta) => {
//   console.log(fruta)
//   return "Banana";
// })

// console.log(every)
// console.log(every)

// const numeros = [7, 43, 22, 88, 101, 29]

// const maiorQue3 = numeros.every(n => n >= 7)
// console.log(maiorQue3)

// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.
// const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === "Uva";
// }); // 2

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find((x) => x > 45); // 88

// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta;
// }); // ['Banana', 'Uva', 'Maçã']

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
});
