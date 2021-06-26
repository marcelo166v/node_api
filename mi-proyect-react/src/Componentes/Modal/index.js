import React,{useState} from 'react'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

function ModalExample(props) {

    return(
        // <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <form id="form" class="needs-validation" novalidate>
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Nueva mascota</h5>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                 </div>
                
        //                 <div className="modal-body">
                        
        //                     <div className="mb-3">
        //                         <label className="form-label">Tipo</label>
        //                         <select className="form-select" id="mascota">
        //                             <option>Perro</option>
        //                             <option>Gato</option>
        //                             <option>Tortuga</option>
        //                         </select>
        //                     </div>
        //                     <div className="mb-3">
        //                         <label className="form-label" >Nombre</label>
        //                         <input type="text" class="form-control" id="nombre" required />
        //                     </div>
        //                     <div className="mb-3">
        //                         <label className="form-label">Dueño</label>
        //                         <select className="form-select" id="dueno">
        //                         </select>
        //                     </div>
            
        //                 </div>
                
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        //                     <button type="button" id="btn-guardar" className="btn btn-primary">Grabar</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <Modal onHide={props.modalClose}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Nueva mascota</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                        <select className="form-select" id="mascota">
                            <option>Perro</option>
                            <option>Gato</option>
                            <option>Tortuga</option>
                        </select>
                </div>
                <div className="mb-3">
                    <label className="form-label" >Nombre</label>
                    <input type="text" class="form-control" id="nombre" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dueño</label>
                    <select className="form-select" id="dueno">
                    </select>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.modalClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        
    );

}

export default ModalExample;