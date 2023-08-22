import modals from './modules/modals';
import hamburger from './modules/hamburger';
import more from './modules/more';
import statsAnimation from './modules/statsAnimation';
import accordion from './modules/accordion';
import footerAnimation from './modules/footerAnimation';
import forms from './modules/forms';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modals();
    hamburger();
    more('.storage__about-btn', '.more');
    statsAnimation('.stats__items','.clean');
    accordion('.feedback__accordion-heading');
    footerAnimation('.feedback__form', '.feedback__accordion' ,'.stats');
    forms();
});