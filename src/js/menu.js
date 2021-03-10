import menuList from '../data/menu.json';
import menuTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');
const createMenuMarkup = menuTemplate(menuList);

menuRef.insertAdjacentHTML('beforeend', createMenuMarkup);
