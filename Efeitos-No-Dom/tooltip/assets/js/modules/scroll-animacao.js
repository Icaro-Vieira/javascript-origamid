export default function initAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) section.classList.add("ativo");
        // Para remover ao subir o scroll
        else section.classList.remove("ativo");
      });
    }
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
