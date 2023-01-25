const listaAnimais = document.querySelector(".animais-lista")

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop
console.log(animaisTop)

const primeiroh2 = document.querySelector("h2")
const h2Left = primeiroh2.offsetLeft

const rect = primeiroh2.getBoundingClientRect()

console.log(rect)

if (rect.top < 0) {
    console.log("passou do elemento")
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageXOffset,
    window.pageYOffset
)


const small = window.matchMedia("(max-width: 600px)")

if (small.matches === true) {
    console.log("Usuário Mobile")
} else {
    console.log("Usuário Desktop")
}
console.log(small)