console.log(Number.isNaN(NaN));
console.log(Number.isInteger(33333.33));

console.log(parseFloat(" 651561.60506"));
console.log(parseFloat("100.90 Reais"));
console.log(parseInt(23.5));

const preco = 10.32323;
console.log(+preco.toFixed());

let valor = 49.50;
valor = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" }); // R$ 49,50
console.log(valor);

let valor2 = 59.49;
valor2 = valor2.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
console.log(valor2);


console.log(Math.PI);

console.log(Math.min(20, 40, 123, 80, 9, 33)); // Retorna 9
console.log(Math.max(20, 40, 123, 80, 9, 33)); // Retorna 123

const aleatorio = Math.floor(Math.random() * 10)
console.log(aleatorio);

// Número aleatorio (random) entre 20 e 40
const aleatorioEntre = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorioEntre);
