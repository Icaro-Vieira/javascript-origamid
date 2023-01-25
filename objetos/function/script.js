// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

/**
 * -=-=-=-=-=-=-=-=- NOTA -=-=-=-=-=-=-=-=-
 * O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
 * 
 */

const paragrafos = document.querySelectorAll("p")
console.log(paragrafos)

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length
}, 0)
console.log("A soma de todos os caracteres é de:", totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null
    return elemento
}

console.log(criarElemento("ul", "azul", "Esse é o conteudo"))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo")
const cursosJavaScript = h1Titulo("Cursos de JavaScript")
const cursosHtml = h1Titulo("Cursos de Html")

console.log(cursosJavaScript, cursosHtml)