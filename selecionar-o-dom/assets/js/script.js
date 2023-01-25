// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img")
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensIMG = document.querySelectorAll("img[src^='img/imagem']")
console.log(imagensIMG)

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll("[href^='#']")
console.log(linksInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2")
console.log(primeiroH2)

// OU

const animais = document.querySelector(".animais-descricao")
const h2animais = animais.querySelector("h2")
console.log(h2animais)


// Selecione o último p do site
const ultimoP = document.querySelectorAll("p")
console.log(ultimoP[ultimoP.length - 1])
// OU
console.log(ultimoP[--ultimoP.length])

