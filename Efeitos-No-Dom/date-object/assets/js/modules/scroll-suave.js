export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    // Forma mais comum de utilizar (Não suportada em alguns navegadores):
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa:
    // const topo = section.offsetTop

    // window.scrollTo({
    //     top: topo,
    //     behavior: "smooth"
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
