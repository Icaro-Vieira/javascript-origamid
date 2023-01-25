// const h1 = document.querySelector("h1")
// const animaisLista = document.querySelector(".animais-descricao")

// // Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'
// console.log(h1.innerHTML) // html interno
// console.log(h1.outerHTML) // todo o html do elemento
// console.log(h1.outerHTML) // todo o html do elemento



// // h1.outerHTML = "<p>Novo Título</p>" // a tag vai como texto
// // console.log(animaisLista.innerHTML)

// const lista = document.querySelector(".animais-lista")

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho

// // Existem diversas maneiras de selecionar um elemento pelo JavaScript
// console.log(lista.children[--lista.children.length])
// console.log(lista.querySelector("li:last-child"))

// // console.log(lista.childNodes)
// console.log(lista.previousSibling)

// const animais = document.querySelector(".animais")
// const contato = document.querySelector(".contato")
// const titulo = contato.querySelector(".titulo")

// const mapa = document.querySelector(".mapa")

// contato.replaceChild(lista, titulo)

// // contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement("h1")
// novoh1.innerText = "Novo Título" 
// novoh1.classList.add("titulo")

// mapa.appendChild(novoh1)

// console.log(novoh1)


// Clonando elementos com JavaScript, Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

const h1 = document.querySelector("h1")
const faq = document.querySelector(".faq")

const cloneH1 = h1.cloneNode(true)

cloneH1.classList.add("azul")
faq.appendChild(cloneH1)