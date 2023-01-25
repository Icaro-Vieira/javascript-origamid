const menu = document.querySelector(".menu")

menu.classList.add("ativo", "teste")
menu.classList.remove("azul")

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul")
} else {
  menu.classList.add("nao-possui-azul")
}
// menu.classList += " vermelho"

const animais = document.querySelector(".animais")
console.log(animais.attributes.class)

const img = document.querySelector("img")

console.log(img.getAttribute)
