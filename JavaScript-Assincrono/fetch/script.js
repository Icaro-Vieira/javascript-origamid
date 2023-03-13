// const doc = fetch("./doc.txt");

// doc
//   .then(r => r.text())
//   .then(body => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//   });

// const cep = fetch("https://viacep.com.br/ws/13603121/json/")

// cep
// .then(response => response.json())
// .then((body) => {
//   console.log(body.cep)
//   const conteudo = document.querySelector(".conteudo")
//   conteudo.innerText = body.logradouro
// })

// const mudandoCor = fetch("./style.css");

// mudandoCor
//   .then((response) => response.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;

//     conteudo.appendChild(style);
//   });

const sobre = fetch("./sobre.html");

const div = document.createElement("div")

sobre
  .then((resposta) => resposta.text())
  .then((body) => {
    div.innerHTML = body

    const titulo = div.querySelector("h1")
    document.querySelector("h1").innerText = titulo.innerText
    
    console.log(titulo);
  });
