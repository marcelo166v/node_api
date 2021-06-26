import React from 'react'

function Encabezado(props){
    
    if(props.columnas.length === 0)
        return false;
    
    return(
        <thead className="table-dark">
            <tr>
                <th>#</th>
                {props.columnas.map((column,index) => (<th>
                    {column}

                </th>))
                
                }
                <th>Acciones</th>
            </tr>
        </thead>
    );
}

export default Encabezado;