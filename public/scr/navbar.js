const navbar = `

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">LookAt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./productos.html">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contacto.html">Contacto</a>
                    </li>
                </ul>

                <button id="ingresarBtn" class="btn btn-outline-success" type="button">Ingresar</button>



                <!-- Contenedor para los nuevos botones -->

                <div id="newButtonsContainer" class="ms-2" style="display: none;">
                    <!--                    
                    <button id="usuarioBtn" class="btn btn-outline-primary"><i class="bi bi-person-circle"></i> Usuario</button> -->

                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">
                            Usuario</button>
                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Cuenta</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Ver pedidos</a></li>
                        </ul>
                    </div>

                    <button id="salirBtn" class="btn btn-outline-danger">
                        Salir</button>
                </div>
            </div>
        </div>
    </nav>
    <!-- <i class="bi bi-person-circle"></i> -->
    <!-- <i class="bi bi-person-dash-fill"></i> -->







`

export {navbar}