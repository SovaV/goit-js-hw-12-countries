import menuCardTpl from '../templates/menu-card.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = menuCardTpl(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarkup);


