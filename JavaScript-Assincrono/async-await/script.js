// async function puxarDados() {
//     try {
//         const responseDados = await fetch("./dados.json")
//         const jsonDados = await responseDados.json();
//         document.body.innerText = jsonDados.aula
//     } catch (erro) {
//         console.log(erro)
//     }
// }

// async function puxarDados() {
//     const responseDados = fetch("./dados.json")
//     const responseClientes = fetch("./clientes.json")

//     const jsonDados = await (await responseDados).json();
//     const jsonClientes = await (await responseClientes).json();

//     console.log(jsonDados)
//     console.log(jsonClientes)
// }

// puxarDados();

// async function asyncSemPromise() {
//     // Console não irá esperar.
//     await new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Depois de 1s");
//             resolve();
//         }, 1000);
//     })
//     console.log("Acabou")
// }

// asyncSemPromise();


/**
 * Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.
 */
const links = document.querySelectorAll("a")

function handleClick(event) {
    event.preventDefault()
    fetchPage(event.target.href)
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    document.querySelector(".content").innerHTML = "Carregando...";
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
}

function replaceContent(newText) {
    const newHtml = document.createElement("div");
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector(".content")
    const newContent = newHtml.querySelector(".content")

    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
    fetchPage(window.location.href);
})

links.forEach(link => {
    link.addEventListener("click", handleClick)
})