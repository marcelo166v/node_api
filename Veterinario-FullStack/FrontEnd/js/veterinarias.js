let veterinarias = [];
const bodyVeterinarias = $("#bodyVeterinarias");


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
            <td><button type="button" class="btn btn-primary"><i class="fas fa-edit"></i>Editar</button><button type="button" class="btn btn-danger"><i class="fas fa-trash"></i>Eliminar</button></td>
        <tr> `
        ).join("");

        bodyVeterinarias.append(htmlVeterinarias);

    }
    catch(error){
        throw error;
    }
}