const URL_API = 'http://localhost:5080';

export const listarEntidad = async({entidad = 'mascotas'}) =>{

    try {

        const resp = await fetch(`${URL_API}/${entidad}`);
        const datos = await resp.json();
        console.log(`datos: ${datos}`)
        return datos;
        
    } catch (error) {
      console.log(error);  
    }
} 