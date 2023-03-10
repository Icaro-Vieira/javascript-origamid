// Navigation of tab on list of image and section description
function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li")
    const tabContent = document.querySelectorAll(".js-tabcontent section")
    tabContent[0].classList.add("ativo")

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove("ativo")
            })
            tabContent[index].classList.add("ativo")
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

// Accordion List on faq
function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt")
    const activeClass = "ativo"
    
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)
        
        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }
        
        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion)
        })
    }
}
initAccordion()

// Smooth Scroll
function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")
    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)
        
        // Forma mais comum de utilizar (Não suportada em alguns navegadores):
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    
        // Forma alternativa:    
        // const topo = section.offsetTop
    
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // })
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
}
initScrollSuave()

