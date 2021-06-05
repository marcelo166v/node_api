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
            <td>${mascota.dueno}</td><tr> `
        ).join("");

        $("#bodyMascotas").append(htmlMascotas);

    }
    catch(error){
        throw error;
    }
}

function solicitarMascotas(){
    // El segundo parametro es para se pueda conectar al servidor, 
    //ya que el sitio y la api no comparten servidor
    
}