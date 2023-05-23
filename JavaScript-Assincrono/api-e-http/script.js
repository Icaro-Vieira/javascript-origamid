// API DE POKEMON
// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then((response) => response.json())
//   .then((pokemon) => {
//     console.log(pokemon);
//   });

// REQUISIÇÕES E MÉTODOS DE HTTP: GET, POST, PUT, DELETE
// const url = "https://jsonplaceholder.typicode.com/posts/";
// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
//   body: '"aula": "JavaScript"',
// };

// fetch(url, options)
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//   });

// const url = "https://jsonplaceholder.typicode.com/posts/";
// const options = {
//     method: "HEAD",
// }

// fetch(url, options)
// .then(response => {
//     console.log(response.headers.forEach(console.log))
//     // console.log(response.headers.get("Content-Type"))
// })


/*
Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser, mas não é inviolável.
*/

// Resolve o problema de CORS utilizando um Proxy
const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/';
const div = document.createElement('div');

fetch(url)
.then(r => r.text())
.then(r => {
  div.innerHTML = r;
  console.log(div);
});