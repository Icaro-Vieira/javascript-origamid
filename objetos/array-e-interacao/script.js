// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const horas = curso.querySelector(".horas").innerText;
  const aulas = curso.querySelector(".aulas").innerText;

  return {
    titulo,
    descricao,
    horas,
    aulas,
  };
});

console.log(objetoCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((n) => n > 100);
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const buscarBaixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log(buscarBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
  {
    item: "Manteiga",
    preco: "R$ 17,00",
  },
];

// const valorTotal = compras.forEach((item) => {
//   const numberClear = +item.preco.replace("R$ ", "").replace(",", ".");

//   console.log(numberClear)
// });

const valorTotal = compras.reduce((acumulador, item) => {
  const numeroLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + numeroLimpo;
}, 0);

console.log(valorTotal);
