const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift()
console.log(primeiroValor)
// Remova o último valor de comidas e coloque em uma variável
const ultimoValor = comidas.pop()
console.log(ultimoValor)
// Adicione 'Arroz' ao final da array
console.log(comidas.push("Arroz"))
// Adicione 'Peixe' e 'Batata' ao início da array
console.log(comidas.unshift("Peixe", "Batata"))
console.log(comidas)
// -=-=-=--=-=-==-=-=-=-=-=-==-=-=-=-=-==-==-==-===--=-=--====-=
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const ordemAlfabetica = estudantes.sort()
console.log(ordemAlfabetica)

// Inverta a ordem dos estudantes
const ordemInvertida = estudantes.reverse()
console.log("Order Invertida: ", ordemInvertida)

// Verifique se Joana faz parte dos estudantes
const joanaFazParte = estudantes.includes("Joana")
console.log(joanaFazParte)

// Verifique se Juliana faz parte dos estudantes
const julianaFazParte = estudantes.includes("Juliana")
console.log(julianaFazParte)

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
/* 
html = html.split("section")
html = html.join("ul")
html = html.split("div")
html = html.join("li")
*/
// OU
html = html.split("section").join("ul").split("div").join("li")
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const arrayOriginal = carros.slice()
carros.pop()
// console.log(arrayOriginal)
// console.log(carros)