// const btn = document.querySelector("button")

// btn.addEventListener("click", handleClick)

// function handleClick() {
//     setTimeout(() => {
//         this.classList.add("active")
//     }, 1000)
// }

// setTimeout(() => {
//     console.log("Testando")
// }, 0)

function loop(texto) {
    console.log(texto);
  }
  // setInterval(loop, 300, "300ms")
  
  let i = 0;
  const meuLoop = setInterval(
    () => {
      console.log(i++);
      if (i > 20) {
        clearInterval(meuLoop);
      }
    },
    300,
    "300ms"
  );
  