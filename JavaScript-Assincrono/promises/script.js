// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Icaro", idade: 20 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro cocorreu na promise"));
//   }
// });

// const retorno = promessa
// .then((resolucao) => {
//     console.log(resolucao);
//     resolucao.profissao = "Desenvolvedor FrontEnd";
//     return resolucao;
//   })
//   .then((resolucao) => {
//     console.log(resolucao);
//   }, rejeitada => {
//     console.log(rejeitada)
//   }).finally(() => {
//     console.log("ACA")
//   })

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Carregado");
  }, 1500);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})

