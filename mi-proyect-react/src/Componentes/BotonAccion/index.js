import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'

function BotonAcciones(){
    return(
            <div>
                <Button variant="primary">
                    <FontAwesomeIcon icon={faEdit} />
                    Editar
                </Button>
                <Button variant="danger">
                    {/* <i class="fas fa-edit"></i>Editar */}
                    <FontAwesomeIcon icon={faTrash} />
                    Eliminar
                </Button>
            </div>
            
        )
}

export default BotonAcciones;