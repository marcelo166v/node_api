
let duenos = [];
const bodyDuenos = $("bodyDuenos"); 
const url = "http://localhost:5080/duenos";

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
                <button type="button" class="btn btn-primary editar" data-indice=${index}><i class="fas fa-edit"></i>Editar</button>
                <button type="button" class="btn btn-danger eliminar" data-indice=${index}><i class="fas fa-trash"></i>Eliminar</button>
            </td>
        <tr> `
        ).join("");
        
        $("#bodyDuenos").append(htmlduenos);

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