fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText); // Transforma uma String que se parece com um JSON e transforma em objeto
    console.log(jsonFinal)
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
