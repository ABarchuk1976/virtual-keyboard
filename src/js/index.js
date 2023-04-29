import { markup } from './constants.js';

const body = document.createElement('body');
body.className = 'body';
document.body = body;
body.innerHTML = markup;
