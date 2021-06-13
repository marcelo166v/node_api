
import React from 'react';
import '../Tabla/tabla.css';

function Tabla(){
    return(
        <table className="table">
        <thead className="table-dark">
            <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Dueño</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="bodyMascotas">
    
        </tbody>
    
    </table>  
    );
}

export default Tabla;