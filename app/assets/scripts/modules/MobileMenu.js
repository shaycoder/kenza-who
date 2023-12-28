class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__nav')
        this.menuHeader = document.querySelector('.site-header')
        this.menuElement = document.querySelectorAll('.menu-element')

        this.innermenuIcon = document.querySelector('.inner-header__menu-icon')
        this.innermenuContent = document.querySelector('.inner-header__nav')
        this.innermenuHeader = document.querySelector('.inner-header')

        if(this.menuIcon || this.menuContent || this.menuHeader) {
            this.events()
        }

        if(this.innermenuIcon || this.innermenuContent || this.innermenuHeader) {
            this.innerevents()
        }
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    innerevents() {
        this.innermenuIcon.addEventListener("click", () => this.innertoggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('site-header__nav--is-visible')
        this.menuHeader.classList.toggle('site-header--is-visible')
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
    }
    
    innertoggleTheMenu() {
        this.innermenuContent.classList.toggle('inner-header__nav--is-visible')
        this.innermenuHeader.classList.toggle('inner-header--is-visible')
        this.innermenuIcon.classList.toggle('inner-header__menu-icon--close-x')
    }
}

export default MobileMenu;