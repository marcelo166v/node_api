//const mascotas = require("../../BackEnd/Rutas/mascotas");

let mascotas = [];
const bodyMascotas = document.getElementById("bodyMascotas");
const form = document.getElementById("form");
const tipo = document.getElementById("tipoMascota");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const btnGuardar = document.getElementById("btn-guardar");
const url = "http://localhost:5080/mascotas";

listar();

async function listar(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/mascotas', {node:"cors"});
        const mascotasServer = await respuesta.json();
        if(Array.isArray(mascotasServer) && mascotasServer.length > 0){
            mascotas = mascotasServer;
        }
        
        const htmlMascotas = mascotas.map((mascota,index) => `<tr>
            <td>${index}</td>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.dueno}</td>
            <td>
                <button type="button" class="btn btn-primary editar" data-indice=${index}><i class="fas fa-edit"></i>Editar</button>
                <button type="button" class="btn btn-danger eliminar" data-indice=${index}><i class="fas fa-trash"></i>Eliminar</button>
            </td>
        </tr>`
        ).join("");

        bodyMascotas.innerHTML = htmlMascotas;
        
        // Evento para editar
        Array.from(document.getElementsByClassName('editar')).forEach(
            (botonEditar) => {
                botonEditar.onclick = editar;
            }
        );

        // Evento para eliminar
        Array.from(document.getElementsByClassName('eliminar')).forEach(
            (botonEliminar,index) => {
                botonEliminar.onclick = eliminar(index);
            }
        );
    }
    catch(error){
        throw error;
    }
}

function eliminar(index) {
    const urlEnvio = `${url}/${index}`;
    return async function clickEnEliminar() {
      try {
        const respuesta = await fetch(urlEnvio, {
          method: "DELETE",
        });
        if (respuesta.ok) {
          listar();
          resetModal();
        }
      } catch (error) {
        console.log({ error });
        $(".alert").show();
      }
    };
}

function resetModal(){

}

function editar(evento){
    var indice = evento.target.dataset.indice;
    console.log("indice editar",indice);
}

async function enviarDatos(evento){
    try
    {
        // Valido form con bootstrap
        evento.preventDefault();
        if (!form.checkValidity()) {
            evento.preventDefault()
            evento.stopPropagation()
            form.classList.add('was-validated')
            return false;
        }
        
        const mascota ={
            tipo: tipo.value,
            nombre: nombre.value,
            dueno: dueno.value,
        }  
        const accion = "agregar";
        let urlEnvio = url;
        let method = (accion == "agregar" ? "POST" : "PUT");
        
        const respuesta = await fetch(urlEnvio, {
            method: method,
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(mascota)
        });
        if (respuesta.ok) {
            listar();
            resetModal();
        }
    } catch (error) {
        console.log({ error });
        $(".alert").show();
    }
};


btnGuardar.onclick = enviarDatos;

