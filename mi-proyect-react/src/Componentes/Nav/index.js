import React from 'react';
import "./Nav.css";
import Search from '../Search/index';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <a className="navbar-brand" href="/Veterinario-FullStack/FrontEnd/index.html">Mascotas</a>
      <div className="navbar-right" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="navbar-brand" href="/Veterinario-FullStack/FrontEnd/index.html">Mascotas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Veterinario-FullStack/FrontEnd/consultas.html">Consultas</a>  
          </li>
          <li className="nav-item">
            <a class="nav-link active" aria-current="page" href="/Veterinario-FullStack/FrontEnd/veterinarias.html">Veterinarias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Veterinario-FullStack/FrontEnd/duenos.html">Dueños</a>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Nav;
