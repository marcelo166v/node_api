import React from 'react';
import Nav from './Componentes/Nav/index';
import Tabla from './Componentes/Tabla/index';
import Modal from './Componentes/Modal/index';

function Pagina() {
return (
  <div className="container">
      <Nav></Nav>
      
      <div className="mt-2 mb-2"> 
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Nuevo</button>
      </div>

      <Tabla></Tabla>

      <Modal></Modal>
  </div>
);
}

export default Pagina; 
 