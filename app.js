import { makeSound } from "./utils.js";

const HeaderEl = document.getElementById('header-top');

HeaderEl.addEventListener('click', () => {
    makeSound();
});