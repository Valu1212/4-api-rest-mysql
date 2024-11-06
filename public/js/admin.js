
const endpoint = '/productos'

mostrarMensaje = (mensaje) => {
  document.querySelector('#contMensaje').innerHTML = mensaje
}
// Event listener para el botón "Añadir Producto"
document.getElementById('añadir').addEventListener('click', function () {
  const formulario = document.getElementById('prodNuevo');
  formulario.classList.toggle('new');
});



// fetch(endpoint)
//   .then(respuesta => respuesta.json())
//   .then(datos => mostrarProductos(datos))
let productos = ''
const contenedor = document.querySelector('#contProducAdmin')

const obtenerDatos = async () => {

  try {

    const respuesta = await fetch(endpoint)
    productosRecibidos = await respuesta.json()
    productosRecibidos.forEach(datos => {
      productos +=
        `<div class="card border border-1 border-dark d-flex flex-column align-items-center"
                style="width: 100%; max-width: 300px; margin:30px">
                <img src="${datos.imagen}" class="card-img-top" alt="...">
                <div class="card-body ">
                    <h4>${datos.titulo}</h4>
                    <p class="card-text ">${datos.descripcion}</p>
                </div>
    <div class="d-flex justify-content-between align-items-center w-100 mb-2 px-2">
      <p class="card-text border border-secondary rounded p-2 mb-0">
        <strong>${datos.precio}</strong>
      </p>
      <div class="d-flex ms-auto">
        <a onclick="editar(${datos.id})" href="#prodEditar" class="btn btn-outline-warning me-2 edit">
          <i class="bi bi-pencil"></i>
        </a>
        <a onclick="eliminar(${datos.id})" class="btn btn-outline-danger" type="submit">
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
    
    
            </div>`
    })
    contenedor.innerHTML = productos
  } catch (error) {
    mostrarMensaje('Error al cargar productos')
  }

}

obtenerDatos();

//   datos.forEach(datos => {
//     productos +=
//       `<div class="card border border-1 border-dark d-flex flex-column align-items-center"
//             style="width: 100%; max-width: 300px; margin:30px">
//             <img src="${datos.imagen}" class="card-img-top" alt="...">
//             <div class="card-body ">
//                 <h4>${datos.titulo}</h4>
//                 <p class="card-text ">${datos.descripcion}</p>
//             </div>
// <div class="d-flex justify-content-between align-items-center w-100 mb-2 px-2">
//   <p class="card-text border border-secondary rounded p-2 mb-0">
//     <strong>${datos.precio}</strong>
//   </p>
//   <div class="d-flex ms-auto">
//     <a onclick="editar(${datos.id})" href="#prodEditar" class="btn btn-outline-warning me-2 edit">
//       <i class="bi bi-pencil"></i>
//     </a>
//     <a onclick="eliminar(${datos.id})" class="btn btn-outline-danger" type="submit">
//       <i class="bi bi-trash"></i>
//     </a>
//   </div>
// </div>


//         </div>`
//   })
//   contenedor.innerHTML = productos

// Añadir event listeners a los botones "Editar"



const formulario = document.forms['formAñadir']
console.log(formulario)

//Añadir Producto

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  let titulo = formulario.Titulo.value
  let descripcion = formulario.Descripcion.value
  let precio = formulario.Precio.value
  let img = "./imag/java.jpg"
  // console.log(titulo,descripcion,precio);

  // Objetos con los datos obtenidos en el formulario
  let newDatos = { imagen: img, titulo: titulo, descripcion: descripcion, precio: precio }


  if (!newDatos.titulo || !newDatos.descripcion || !newDatos.precio) {
    document.querySelector('#mensaje').innerHTML = '*Complete todos los datos'
    return
  }
  else {
    document.querySelector('#mensaje').innerHTML = ''
    // return
  }

  let nuevosDatosJson = JSON.stringify(newDatos)
  console.log(nuevosDatosJson)
  const enviarNewProducto = async () => { //enviar datos al back
    try {
      const enviarDatos = await fetch(endpoint, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: nuevosDatosJson
      })
      //obtengo la respuesta del back
      const respuesta = await enviarDatos.json()
      console.log(respuesta)
      //limpiar formulario
      // document.querySelector('#formAñadir').reset()

      document.querySelector('#formAñadir').style.display = 'none'
      mostrarMensaje(respuesta.mensaje)
      setTimeout(() => { location.reload(); }, 2000)
    }
    catch (error) {
      console.log(error)
    }
  }
  enviarNewProducto()


})


//Eliminar Producto
const eliminar = (id) => {
  if (confirm('Seguro desea eliminar?')) {
    console.log("eliminar id: " + id)
    console.log(endpoint + '/' + id)

    //enviamos datos al backend


    const eliminarProd = async () => {

      try {
        const res = await fetch(endpoint + '/' + id, {
          method: 'delete'
        })
        //obtengo respuesta del backend
        const respuesta = await res.json()
        console.log(respuesta)
        //mostrar mensaje de producto eliminado
        mostrarMensaje(respuesta.Mensaje)
      } catch {
        mostrarMensaje('Error al borrar')

      }
      setTimeout(() => { location.reload(); }, 2000) //Refresco pantalla

    }
    eliminarProd()
  }

}

// Editar Producto
const formEditar = document.forms['formEditar'];
const editar = (id) => {
  const formulario = document.getElementById('prodEditar');
  
  // Obtener el producto correspondiente
  let prodEditar = productosRecibidos.find((prod) => prod.id == id);

  // Asigna valores al formulario de edición
  formEditar.idEditar.value = prodEditar.id;
  formEditar.Titulo.value = prodEditar.titulo;
  formEditar.Descripcion.value = prodEditar.descripcion;
  formEditar.Precio.value = prodEditar.precio;

  // Alternar la clase 'newE' para mostrar/ocultar el formulario
  formulario.classList.toggle('newE');
};

// Lógica para enviar los datos del formulario de edición
formEditar.addEventListener('submit', (event) => {
  event.preventDefault();

  const nuevosDatos = {
    id: formEditar.idEditar.value,
    titulo: formEditar.Titulo.value,
    descripcion: formEditar.Descripcion.value,
    precio: formEditar.Precio.value,
  };

  // Validación de campos vacíos
  if (!nuevosDatos.titulo || !nuevosDatos.descripcion || !nuevosDatos.precio) {
    document.querySelector('#mensajeEditar').innerHTML = '*No hay datos que modificar';
    return;
  } else {
    document.querySelector('#mensajeEditar').innerHTML = 'Modificando';
  }

  let nuevosDatosJson = JSON.stringify(nuevosDatos);
  console.log(nuevosDatosJson);

  const enviarNuevosDatos = async () => {
    try {
      const res = await fetch(endpoint + '/' + nuevosDatos.id, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: nuevosDatosJson
      });
      const respuesta = await res.json();
      console.log(respuesta);
      mostrarMensaje(respuesta.mensajeEditar);
    } catch (error) {
      mostrarMensaje('Error al modificar datos');
    }

    setTimeout(() => {
      location.reload();
    }, 2500);
  };
  enviarNuevosDatos();
});