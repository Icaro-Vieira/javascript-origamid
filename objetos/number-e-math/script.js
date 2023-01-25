// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
// Primeiro: Transformar o conteudo em array, podemos fazer isso com o split()
const numerosArray = numeros.split(",");

// Segundo: Varrer esse Array para verificar todos os números, podemos fazer isso através do Spread Syntax (...): Ela Permite que um iterável, como uma matriz ou string, seja expandido em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de matriz) são esperados.
const maiorNumero = Math.max(...numerosArray);
const menorNumero = Math.min(...numerosArray);
console.log(maiorNumero);
console.log(menorNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

// Primeiro: Criar uma função
function limparPrecos(preco) {
    // Segundo: remover os espaços em branco, sifrão, trocar virgula por ponto e arredondar o numero com duas casas decimais.
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  console.log(preco);
  return preco;
}

// Terceiro: Percorrer todos os valores do array e soma-los
let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPrecos(preco);
});

// Quarto: Mostrar o resultado na tela e aplicar uma mascara de moeda
console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
limparPrecos(listaPrecos[1]);
