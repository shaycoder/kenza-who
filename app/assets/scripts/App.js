import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Scroller from './modules/Scroller';
import AOS from 'aos';

new MobileMenu();

// init AOS animation
window.addEventListener("load", () => {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
});

new Scroller();

if(module.hot) {
    module.hot.accept()
}