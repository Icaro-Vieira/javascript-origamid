const animais = document.getElementById("animais")
console.log(animais)

const gridSection = document.getElementsByClassName("grid-section")
console.log(gridSection[1])

const primeiraLi = document.querySelector("li")
console.log(primeiraLi)

const primeiraUl = document.querySelector("ul")
console.log(primeiraUl)

const linkInterno = document.querySelector("[href^='#']")
console.log(linkInterno)

const animiasImg = document.querySelectorAll(".animais img")
console.log(animiasImg)

// Diferença entre gridSectionHTML e gridSectionNode
const gridSectionHTML = document.getElementsByClassName("grid-section")
const gridSectionNode = document.querySelectorAll(".grid-section")

primeiraUl.classList.add("grid-section")

// UM ARRAY É ESTÁTICO PARA SEMPRE!
// console.log(gridSectionHTML[0]) // A gridSectionHTML é ao vivo ou seja, atualiza quando tem alguma mudança no documento
// console.log(gridSectionNode[0]) // A gridSectionNode já é o contrário elá é estatica, ou seja, ela sempre será a mesma coisa

gridSectionNode.forEach(function(item) {
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item) {
    console.log(item)
})