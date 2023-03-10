// Adicione a classe ativo a todos os itens do menu
const addClass = document.querySelectorAll(".menu a")
addClass.forEach((item) => {
    item.classList.add("ativo")
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
addClass.forEach((item) => {
    item.classList.remove("ativo")
})

addClass[0].classList.add("ativo")

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img")
imgs.forEach((item) => {
    const possui = item.getAttribute("alt")
    console.log(item, possui)
})

// Modifique o href do link externo no menu
const link = document.querySelector("a[href^='https://']")
link.setAttribute("href", "https://youtube.com")
