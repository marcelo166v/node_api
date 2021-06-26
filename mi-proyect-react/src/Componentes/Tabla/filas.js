import React from 'react'
import BotonAcciones from '../BotonAccion';

function Filas(props){

    return(
           <tr>
            <td>{props.indice}</td>
            <td>{props.mascota.tipo}</td>
            <td>{props.mascota.nombre}</td>
            <td>{props.mascota.dueno.nombre}</td>
            <td>
                <BotonAcciones></BotonAcciones>
            </td>
        </tr>
    );
}

export default Filas;
