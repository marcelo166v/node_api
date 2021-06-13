import React from 'react';
import Nav from './Componentes/Nav';
import Tabla from './Componentes/Tabla'

function Pagina() {
return (
<div className="container">
    <Nav></Nav>
    
    <div className="mt-2 mb-2"> 
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
    </div>

    <Tabla></Tabla>
</div>
);
}

export default Pagina; 
 