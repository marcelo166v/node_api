let veterinarias = [];
const bodyVeterinarias = document.getElementById("bodyVeterinarias");
const url = "http://localhost:5080/veterinarias";
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const pais = document.getElementById("pais");


listar();

async function listar(){
    
    try
    {
        const respuesta = await fetch('http://localhost:5080/veterinarias', {node:"cors"});
        const veterinariasServer = await respuesta.json();
        if(Array.isArray(veterinariasServer) && veterinariasServer.length > 0){
            veterinarias = veterinariasServer;
        }
        
        const htmlVeterinarias = veterinarias.map((veterinaria,index) => `<tr>
            <td>${index}</td>
            <td>${veterinaria.nombre}</td>
            <td>${veterinaria.apellido}</td>
            <td>${veterinaria.pais}</td>
            <td>${veterinaria.documento}</td>
            <td>
                <button type="button" class="btn btn-primary editar" data-indice=${index} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-edit"></i>Editar</button>
                <button type="button" class="btn btn-danger eliminar" data-indice=${index}><i class="fas fa-trash"></i>Eliminar</button>
            </td>
        <tr> `
        ).join("");

        bodyVeterinarias.innerHTML =htmlVeterinarias;

        // eventos para los botones de eliminar y editar
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
    const veterinariaServer = await respuesta.json();
    nombre.value  = veterinariaServer.nombre;
    apellido.value = veterinariaServer.apellido;
    documento.value = veterinariaServer.documento;
    pais.value = veterinariaServer.pais;
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
    nombre.value = "";
    apellido.value = "";
    documento.value = "";
    pais.value = "";
}

function editar(evento){
    const indice = evento.target.dataset.indice;
    consultar(indice);
}