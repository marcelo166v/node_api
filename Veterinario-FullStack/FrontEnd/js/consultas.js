let consultas = [];
let mascotas =[];
let veterinarias = [];
const bodyConsultas = document.getElementById("bodyConsultas");
const form = document.getElementById("form");
const tipo = document.getElementById("mascota");
const historia = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const veterinaria = document.getElementById("veterinaria");
//const btnGuardar = document.getElementById("btn-guardar");
const modal = document.getElementById("exampleModal");
const url = "http://localhost:5080/consultas";
const mascota = document.getElementById("mascotas");
const btnGuardar = document.getElementById("btn-guardar");


listar();

async function listar(){
    
    try
    {
        const respuesta = await fetch(`${url}`, {node:"cors"});
        const consultasServer = await respuesta.json();
        if(Array.isArray(consultasServer) && consultasServer.length > 0){
            consultas = consultasServer;
        }
        
        const htmlConsultas = consultas.map((consulta,index) => `<tr>
            <td>${index}</td>
            <td>${consulta.mascota.nombre}</td>
            <td>${consulta.veterinaria.nombre}</td>
            <td>${consulta.encabezado}</td>
            <td>${consulta.diagnostico}</td>
            <td>
                <button type="button" class="btn btn-primary editar" data-indice=${index} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i>Editar</button>
                <button type="button" class="btn btn-danger eliminar" data-indice=${index}><i class="fas fa-trash"></i>Eliminar</button>
            </td>
        </tr>`
        ).join("");

        bodyConsultas.innerHTML = htmlConsultas;

        listarMascotas();

        listarVeterinarias();
        
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
         }); 
    }
    catch(error){
        throw error;
    }
}

async function listarMascotas(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/mascotas', {node:"cors"});
        const mascotasServer = await respuesta.json();
        if(Array.isArray(mascotasServer) && mascotasServer.length > 0){
            mascotas = mascotasServer;
        }
        
        const opionesMascotas = mascotas.map((mascota,indice) => `
            <option value=${indice}>${mascota.nombre}</option>`
        ).join("");

        mascota.innerHTML = opionesMascotas;
    }
    catch(error){
        throw error;
    }
}

async function listarVeterinarias(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/veterinarias', {node:"cors"});
        const veterianariasServer = await respuesta.json();
        if(Array.isArray(veterianariasServer) && veterianariasServer.length > 0){
            veterinarias = veterianariasServer;
        }
        
        const opionesVeterinarias = veterinarias.map((veterinaria,indice) => `
            <option value=${indice}>${veterinaria.nombre}</option>`
        ).join("");

        veterinaria.innerHTML = opionesVeterinarias;
    }
    catch(error){
        throw error;
    }
}

async function consultar(indice){
    const urlconsulta =  `${url}/${indice}`;
    const respuesta = await fetch(urlconsulta, {node:"cors"});
    const consultaServer = await respuesta.json();
    historia.value  = consultaServer.historia;
    diagnostico.value = consultaServer.diagnostico;
    veterinaria.value = consultaServer.veterinaria;
    mascota.value = consultaServer.mascota;
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
    historia.value = "";
    diagnostico.value = "";
    tipo.value = "";
    veterinaria.value = "";
}

function editar(evento){
    const indice = evento.target.dataset.indice;
    consultar(indice);
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
        
        const consulta ={
            diagnostico: diagnostico.value,
            historia: historia.value,
            veterinaria: veterinaria.value,
            mascota: mascota.value,
        }  
        
        const accion = "agregar";
        let urlEnvio = url;
        let method = (accion == "agregar" ? "POST" : "PUT");
        
        const respuesta = await fetch(urlEnvio, {
            method: method,
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(consulta)
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

modal.addEventListener('hidden.bs.modal', function (event) {
    resetModal();
})

btnGuardar.onclick = enviarDatos;

