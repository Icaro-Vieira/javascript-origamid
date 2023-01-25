// const img = document.querySelector("img");

// // elemento.addEventListener(event, callback, options)
// // É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima
// function callback(event) {
//     // console.log(event);
// }

// img.addEventListener("click", callback)

// const animaisLista = document.querySelector(".animais-lista")

// function callbackLista(event) {
//     console.log(event.currentTarget)
//     console.log(event.target)
//     console.log(event.type)
// }

// animaisLista.addEventListener("click", callbackLista)

// Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

// A palavra chave this é uma palavra especial do JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

// const linkExterno = document.querySelector("a[href^='http']")

// function handleLinkExterno(event) {
//     event.preventDefault()
//     // as palavras this, currentTarget e target praticamente é a "mesma coisa"
//     console.log(this)
//     // console.log(event.currentTarget)
//     // console.log(event.target)
// }

// linkExterno.addEventListener("click", handleLinkExterno)


// const tituloH1 = document.querySelector("h1")

// function callbackH1(event) {
//     // console.log(this.innerText) -> Mostra o conteúdo de texto
//     console.log(event.type, event)
// }

// tituloH1.addEventListener("click", callbackH1)
// tituloH1.addEventListener("mouseenter", callbackH1)
// tituloH1.addEventListener("mousemove", callbackH1)

// window.addEventListener("scroll", callbackH1)
// window.addEventListener("resize", callbackH1)
// window.addEventListener("keydown", callbackH1)


// Manipulando a cor de fundo
// function handleKeyboard(event) {
//     if (event.key === "a") 
//         document.body.classList.toggle("azul")
//     else if (event.key === "v")
//         document.body.classList.toggle("vermelho")
//     else if (event.key === "c")
//         document.body.classList.toggle("cinza")

//     console.log(event.key)
// }

// window.addEventListener("keydown", handleKeyboard)


const imgs = document.querySelectorAll("img")

function handleImg(event) {
    console.log(event.target.getAttribute("src"))
}

imgs.forEach((img) => {
    img.addEventListener("click", handleImg)
})

