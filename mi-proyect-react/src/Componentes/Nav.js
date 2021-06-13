import React from 'react';

function Nav(){
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/Veterinario-FullStack/FrontEnd/index.html">Mascotas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/Veterinario-FullStack/FrontEnd/duenos.html">Dueños</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/Veterinario-FullStack/FrontEnd/consultas.html">Consultas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/Veterinario-FullStack/FrontEnd/veterinarias.html">Veterinarias</a>
                        </li>
                    </ul>
                    <span className="navbar-text"></span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
