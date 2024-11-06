import { navbar } from './navbar.js';
import { footer } from './footer.js';


// Agregar el navbar
document.querySelector(`#contenedorNav`).innerHTML = navbar;

// Agregar el footer
document.querySelector(`#contenedorFooter`).innerHTML = footer;


// Manejo de eventos para botones
const ingresarBtn = document.getElementById('ingresarBtn');
const salirBtn = document.getElementById('salirBtn'); // Asegúrate de que este botón esté en tu HTML
const newButtonsContainer = document.getElementById('newButtonsContainer');

ingresarBtn.addEventListener('click', function() {
    ingresarBtn.style.display = 'none';
    newButtonsContainer.style.display = 'block';
});

salirBtn.addEventListener('click', function() {
    newButtonsContainer.style.display = 'none';
    ingresarBtn.style.display = 'block';
});
