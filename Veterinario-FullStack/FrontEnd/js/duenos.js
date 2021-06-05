
let duenos = [];

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
            <td>${dueno.tipo}</td>
            <td>${dueno.nombre}</td>
            <td>${dueno.dueno}</td><tr> `
        ).join("");

        //$("#bodyMascotas").append(htmlMascotas);

    }
    catch(error){
        throw error;
    }
}