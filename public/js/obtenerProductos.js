
fetch('/productos')
.then (respuesta => respuesta.json())
// .then (datos => console.log (datos))
.then (datos => mostrarProductos(datos))

let productos = ''
const mostrarProductos = (datos) => {
    
     const contenedor = document.querySelector('#contenedor')
     
     datos.forEach(dato => {
        productos +=`
        
        <div class="card border border-1 border-dark d-flex flex-column align-items-center"
        style="width: 100%; max-width: 300px; margin:30px">
        <img src="${dato.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
            <h4>${dato.titulo}</h4>
            <p class="card-text ">${dato.descripcion}
            </p>
     
        </div>
       
        <div class="card-precio-comprar d-flex justify-content-center align-items-center w-100 px-3 ">
            <p class="card-text ">$${dato.precio}</p>    
            
            <button class="btn btn-outline-success mt-auto mb-3 m-3" type="submit">Comprar</button>
        </div>

    </div>

        `;
     });

     contenedor.innerHTML = productos 

}

