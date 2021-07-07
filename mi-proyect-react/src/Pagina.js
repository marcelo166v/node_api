import React,{Component} from 'react';
import Nav from './Componentes/Nav/index';
import Tabla from './Componentes/Tabla/index';
import Modal from './Componentes/Modal/index';
import ActionsMenu from './Componentes/ActionsMenu';
import 'bootstrap/dist/css/bootstrap.min.css'
import {listarEntidad,crearEntidad} from './servicio';
import ModalExample from './Componentes/Modal/index';

// Class compoenent
class Pagina extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      mostrarModal: false,
      entidades: [],
      duenos: [],
      tipoMascota:[],
    }
  }

  modalClose = () => {
    this.setState({mostrarModal:false})
  }
  
  modalShow = () => {
    this.setState({mostrarModal:true})  
  }

  listar = async() =>{
    const entidades = await listarEntidad('mascotas');
    const duenos = await listarEntidad({entidad:'duenos'});
    const tipoMascota = [ {nombre:"gato"},
      {nombre:"perro"},
      {nombre:"tortuga"}
    ];
    this.setState({entidades : entidades})
    this.setState({duenos: duenos});
    this.setState({tipoMascota: tipoMascota});
   
  }

  crear = async() =>{
    const object ={
      tipo:"gato", 
      nombre:"rocky",
      dueno: "0",
    }    
    const ok = await crearEntidad('mascotas',object);
    if(ok)
      this.listar();
  }

  componentWillMount(){
    console.log("1- will mount");
  } 

  // Ciclo de vida: Se ejecuta luego del metodo render
  componentDidMount(){
    console.log("3 -did mount");
    this.listar();
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  
  // El metodo render siempre al final
  render(){
    console.log("2 -render");
    const {titulo} = this.props;
    return (
      <div className="container">
          <Nav></Nav>
          
          <ActionsMenu modalShow={this.modalShow} titulo={titulo}></ActionsMenu>
          
          <Tabla entidades={this.state.entidades}></Tabla>
    
          <ModalExample show={this.state.mostrarModal} duenos={this.state.duenos} tipoMascota={this.state.tipoMascota} modalClose={this.modalClose}></ModalExample>
      </div>
    );

  }

}

export default Pagina; 
 