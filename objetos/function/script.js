// const perimetro = new Function("lado", "return lado * 4")

// function somar(a1, b2, c3, d4, e5, f6, g7, h8, i9) {
//   return a1+b2
// }

// console.log(somar.length) // Retorna a quantidade de argumentos da função
// console.log(somar.name) // Retorna uma string com o nome da função

/* 
--- function().call(this, arg1, arg2, ...) Executa a função, sendo possível passarmos uma nova referência ao this da mesma.
*/

// const carro = {
//   marca: "Honda",
//   ano: 2008
// }

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano)
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// descricaoCarro.call(carro) // Honda 2008

// const carros = ["Ford", "Mustang", "GT"]
// carros.forEach((item) => {
//   console.log(item)
// }) // Log de cada Carro

// carros.forEach.call(carros, (item) => {
//   console.log(item)
// }) // Log de cada Carro 

// const frutas = ["Banana", "Pêra", "Uva", "Maçã"]

// carros.forEach.call(frutas, (item) => {
//   console.log(item)
// }) // Log de cada Fruta


