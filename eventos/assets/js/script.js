// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInterno = document.querySelectorAll("a[href^='#']")

function handleLink(event) {
    // Previne que ao clicar o link redireciona a parte clicada
    event.preventDefault() 

    // Remove a classe apos clicar em outro elemento
    linksInterno.forEach((removeClass) => {
        removeClass.classList.remove("ativo")
    })
    // Adiciona uma classe ao elemento clicado
    event.currentTarget.classList.add("ativo")
}

linksInterno.forEach((link) => {
    link.addEventListener("click", handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll("body *")

// function handleElemento(event) {
//     console.log(event.currentTarget)
// }

// todosElementos.forEach((elemento) => {
//     elemento.addEventListener("click", handleElemento)
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElemento(event) {
//     event.currentTarget.remove()
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyboardT(event) {
    console.log(event.key)
    if (event.key === "t") {
        document.documentElement.classList.toggle("textomaior")
    }
}

window.addEventListener("keydown", handleKeyboardT)