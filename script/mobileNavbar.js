class MobileNavBar{
    constructor (mobileMenu, navList, navLinks ){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }
    
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    handleLinkClick(){
        // Fecha o menu quando um link é clicado
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
        // Adiciona evento de click em cada link para fechar o menu
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.handleLinkClick);
        });
    }
    
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li'
);

mobileNavBar.init()






