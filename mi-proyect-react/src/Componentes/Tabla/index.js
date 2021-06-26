
import React,{useState} from 'react';
import '../Tabla/tabla.css';
import Encabezado from './encabezado';
import Fila from './filas'


function Tabla(props){
   /*  const[mascotas,setMascotas] = useState([
        {tipo:"perro", nombres:"firulais 1",dueno: "0"},
        {tipo:"perro", nombres:"firulais 2",dueno: "1"},
        {tipo:"perro", nombres:"firulais 3",dueno: "0"},
    ]); */
    //const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];
    const columnas = props.entidades.length > 0 ? Object.keys(props.entidades[0]) : [];
    return(
        <table className="table">
        <Encabezado columnas={columnas} />
        <tbody id="bodyMascotas">
        
        {props.entidades.map((entidad,index) => (
            <Fila mascota={entidad} indice={index}></Fila>
        ))}
        </tbody>
    
    </table>  
    );
}

export default Tabla;