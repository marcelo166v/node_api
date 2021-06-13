//const mascotas = require("../../BackEnd/Rutas/mascotas");

let mascotas = [];
const bodyMascotas = document.getElementById("bodyMascotas");
const form = document.getElementById("form");
const tipo = document.getElementById("mascota");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const btnGuardar = document.getElementById("btn-guardar");
const modal = document.getElementById("exampleModal");
const url = "http://localhost:5080/mascotas";

listar();

listarDuenos();

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
            <td>${mascota.dueno.nombre}</td>
            <td>
                <button type="button" class="btn btn-primary editar" data-indice=${index} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i>Editar</button>
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

async function listarDuenos(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/duenos', {node:"cors"});
        const duenosServer = await respuesta.json();
        if(Array.isArray(duenosServer) && duenosServer.length > 0){
            duenos = duenosServer;
        }
        
        const htmlduenos = duenos.map((dueno,index) => `
            <option value=${index}>${dueno.nombre}</option>  
         `
        ).join("");
        
        dueno.innerHTML = htmlduenos;
    }
    catch(error){
        throw error;
    }
}

async function consultar(indice){
    const urlconsulta =  `${url}/${indice}`;
    const respuesta = await fetch(urlconsulta, {node:"cors"});
    const mascotaServer = await respuesta.json();
    nombre.value = mascotaServer.nombre;
    dueno.value = mascotaServer.dueno;
    tipo.value = mascotaServer.tipo;
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
    nombre.value = "Perro";
    tipo.value = "";
    dueno.value = "Marcelo";
}

function editar(evento){
    var indice = evento.target.dataset.indice;
    // Puedo usar el metodo consultar mandado el indice o puedo leerlo de recursos
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

modal.addEventListener('hidden.bs.modal', function (event) {
    resetModal();
})

btnGuardar.onclick = enviarDatos;

