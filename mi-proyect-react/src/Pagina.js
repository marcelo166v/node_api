import React,{Component} from 'react';
import Nav from './Componentes/Nav/index';
import Tabla from './Componentes/Tabla/index';
import Modal from './Componentes/Modal/index';
import ActionsMenu from './Componentes/ActionsMenu';
import 'bootstrap/dist/css/bootstrap.min.css'
import {listarEntidad,crearEntidad} from './servicio';

// Class compoenent
class Pagina extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      mostrarModal: false,
      entidades: [],
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
    this.setState({entidades});
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
    
          <Modal show={this.state.mostrarModal} modalClose={this.modalClose}></Modal>
      </div>
    );

  }

}

export default Pagina; 
 