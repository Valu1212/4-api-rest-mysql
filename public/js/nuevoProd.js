document.getElementById('añadir').addEventListener('click', function() {
    const prodNuevo = document.getElementById('prodNuevo'); 
    if (prodNuevo.style.display === 'none' || prodNuevo.style.display === '') {
        prodNuevo.style.display = 'block'; 
     
    } else {
        prodNuevo.style.display = 'none'; 
    }

});
