
import { Form } from "react-bootstrap";
import React, { Component } from "react";

function Selector(props) {

   
    return(
        <Form.Control
            as="select">
            <option disabled selected value="" key={-1}>Seleccione {props.nombreCampo}</option>
            {
              props.opciones.map((list,indice) => (
                <option 
                  key={indice} 
                  value={list.value}
                  label={list.value}
                />
              ))
            }
        </Form.Control>
    )
}

export default Selector;

