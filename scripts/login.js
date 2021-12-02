import {iconos} from './dataIconsFooter.js'
const icono = document.querySelector('#icons')
cargarIconos(iconos);

function cargarIconos(iconos) {
    iconos.forEach(item => {
        const iconItem = document.createElement('a')
        iconItem.innerHTML = `
            <a class="navbar-brand" href="${item.url}">
                <img src="${item.image}" alt="" width="50" height="24" class="d-inline-block align-text-top">
            </a>
            `
        icono.appendChild(iconItem);
    });
}