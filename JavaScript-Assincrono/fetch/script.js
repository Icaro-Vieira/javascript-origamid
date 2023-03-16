// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector("#cep");
const buttonCep = document.querySelector("#buttonCep");
const resultadoCep = document.querySelector(".resultadoCep");

buttonCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  localizaCep(cep);
}

function localizaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector(".btc");
function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}

// Permite atualizar o valor a cada 30 segundos
// setInterval(() => {
//   fetchBtc;
// }, 1000 * 30);

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector(".proxima");
const pPiada = document.querySelector(".piada");
// const imagem = document.querySelector("img");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((piada) => {
      //   imagem.src = piada.icon_url;
      pPiada.innerText = piada.value;
    });
}

btnProxima.addEventListener("click", puxarPiada);

puxarPiada();

// Pegar API de do status Pizza https://status.pizza/
const inputHttp = document.querySelector("#inputHttp");
const btnStatusHttp = document.querySelector("#btnStatusHttp");

btnStatusHttp.addEventListener("click", handleClickHttp);

function handleClickHttp(event) {
  event.preventDefault;
  const statusHttp = inputHttp.value;
  imagemHttp(statusHttp);
}

function imagemHttp(statusHttp) {
  fetch(`https://status.pizza/${statusHttp}.png`)
    .then((r) => r.blob())
    .then((body) => {
      const bloblUrl = URL.createObjectURL(body);
      console.log(bloblUrl);
      const imagem = document.querySelector("img");
      imagem.src = bloblUrl;
    });
}
