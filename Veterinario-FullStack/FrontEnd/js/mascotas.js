//const mascotas = require("../../BackEnd/Rutas/mascotas");

let mascotas = [];

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
            <td><button type="button" class="btn btn-primary">Editar</button><button type="button" class="btn btn-danger">Eliminar</button></td>
        <tr> `
        ).join("");

        $("#bodyMascotas").append(htmlMascotas);

    }
    catch(error){
        throw error;
    }
}

