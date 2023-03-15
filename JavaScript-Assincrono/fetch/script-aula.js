// LER O CONTEUDO DE TEXTO DE UM ARQUIVO ESPECIFICO

// const doc = fetch("./doc.txt");

// doc
//   .then(r => r.text())
//   .then(body => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

// API VIA CEP

// const cep = fetch("https://viacep.com.br/ws/13603121/json/")

// cep
// .then(response => response.json())
// .then((body) => {
//   console.log(body.cep)
//   const conteudo = document.querySelector(".conteudo")
//   conteudo.innerText = body.logradouro
// })

// MUDAR COR DE FUNDO ATRÁVES DO CÓDIGO
// const mudandoCor = fetch("./style.css");

// mudandoCor
//   .then((response) => response.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;

//     conteudo.appendChild(style);
//   });

// const sobre = fetch("./sobre.html");

// const div = document.createElement("div")

// sobre
//   .then((resposta) => resposta.text())
//   .then((body) => {
//     div.innerHTML = body

//     const titulo = div.querySelector("h1")
//     document.querySelector("h1").innerText = titulo.innerText

//     console.log(titulo);
//   });

// LER UMA IMAGEM E GERAR UM LINK COM O FETCH:

// const imagem = fetch("./imagem.png");

// imagem
//   .then((r) => r.blob())
//   .then((body) => {
//     const blobUrl = URL.createObjectURL(body);
//     const imagemDom = document.querySelector("img");
//     imagemDom.src = blobUrl;
//   });

// const cepClonado = fetch("https://viacep.com.br/ws/13603121/json/");

// cepClonado
//   .then((r) => {
//     const r2 = r.clone()
//     r.text().then((text) => {
//       console.log(text)
//     })
//     r2.json().then((json) => {
//       console.log(json)
//     })

//     console.log(r)
//   })
//   .then((body) => {
//     console.log(body);
//   });

// const responseFetch = fetch("https://viacep.com.br/ws/13603121/json/");

// responseFetch.then((response) => {
//   console.log(response)
//   response.headers.forEach(console.log)
// });

// const pagNotFound = fetch("https://viacep.com.br/ws/13603121/json/");

// pagNotFound.then((response) => {
//   console.log(response.type)
//   if(response.status === 404) {
//     console.log("Página não encontrada...")
//   } 
// });

// types of responses:
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites