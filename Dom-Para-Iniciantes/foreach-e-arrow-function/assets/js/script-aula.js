// const imgs = document.querySelectorAll("img")

// imgs.forEach(function(item, index, array) {
//     // console.log(item, index, array)
// })

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos)
// console.log(titulosArray)

titulosArray.forEach(function(item, index, array) {
//   console.log(item, index, array);
});


// MANEIRAS DE ESCREVER UMA ARROW FUNCTION () => {}

const imgs = document.querySelectorAll("img")

// Parâmetro único não precisa de parênteses
imgs.forEach(item => {
    console.log(item)
})

// Multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
    console.log(item, index)
})

// Sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0
imgs.forEach(() => {
    console.log(i++)
})

// Obs: É sempre melhor usar os parâmetros com parenteses, mesmo se tiver um único parâmetro

// Algumas vezes podemos ver o forEach dessas maneiras reduzida:

imgs.forEach(item => console.log(item))