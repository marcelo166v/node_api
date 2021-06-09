let veterinarias = [];
const bodyVeterinarias = document.getElementById("#bodyVeterinarias");
const url = "http://localhost:5080/veterinarias";


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
            <td><button type="button" class="btn btn-primary editar"><i class="fas fa-edit"></i>Editar</button><button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i>Eliminar</button></td>
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