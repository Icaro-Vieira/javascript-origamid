// alert("Macacos me mordam!")

const urlDoSite = window.location.href
console.log(urlDoSite)

if (urlDoSite === "http://127.0.0.1:5500/o-que-e-o-dom/index.html")
    console.log("Acertou Miseravi")
else
    console.log("Errou!")
    
const h1Selecionado = document.querySelector("h1")
const h1Classes = h1Selecionado.classList

function teste() {
    console.log("Clicou em", h1Selecionado.innerHTML)
}

h1Selecionado.addEventListener("click", teste)
