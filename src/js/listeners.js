import {handlerClickHamburger, handlerCloseMenu} from './handlers.js';
import {handlerSubmitForm} from './contact-form.js';

const form = document.querySelector('#contacts-form');
const hamburgerElement = document.querySelector('#hamburger');
const closeMenuButton = document.querySelector('#close-button');

form.addEventListener('submit', handlerSubmitForm);

hamburgerElement.addEventListener('click', handlerClickHamburger);

closeMenuButton.addEventListener('click', handlerCloseMenu);
