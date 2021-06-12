
let duenos = [];
const bodyDuenos = document.getElementById("bodyDuenos"); 
const url = "http://localhost:5080/duenos";
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const btnGuardar = document.getElementById("btn-guardar");

listar();

async function listar(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/duenos', {node:"cors"});
        const duenosServer = await respuesta.json();
        if(Array.isArray(duenosServer) && duenosServer.length > 0){
            duenos = duenosServer;
        }
        
        const htmlduenos = duenos.map((dueno,index) => `<tr>
            <td>${index}</td>
            <td>${dueno.nombre}</td>
            <td>${dueno.apellido}</td>
            <td>${dueno.documento}</td>
            <td>
                <button type="button" class="btn btn-primary editar" data-indice=${index} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i>Editar</button>
                <button type="button" class="btn btn-danger eliminar" data-indice=${index}><i class="fas fa-trash"></i>Eliminar</button>
            </td>
        <tr> `
        ).join("");
        
        bodyDuenos.innerHTML = htmlduenos;

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

async function consultar(indice){
    const urlconsulta =  `${url}/${indice}`;
    const respuesta = await fetch(urlconsulta, {node:"cors"});
    const duenoServer = await respuesta.json();
    nombre.value  = duenoServer.nombre;
    apellido.value = duenoServer.apellido;
    documento.value = duenoServer.documento;
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
        
        const dueno ={
            apellido: apellido.value,
            nombre: nombre.value,
            documento: documento.value,
        }  
        const accion = "agregar";
        let urlEnvio = url;
        let method = (accion == "agregar" ? "POST" : "PUT");
        
        const respuesta = await fetch(urlEnvio, {
            method: method,
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(dueno)
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
    consultar(indice);
}

btnGuardar.onclick = enviarDatos;