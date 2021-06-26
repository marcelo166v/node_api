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

export const crearEntidad = async({entidad = 'mascotas'},object = {}) =>{
    
    try {

        const resp = await fetch(`${URL_API}/${entidad}`, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(object)
        });
        
        return resp.ok;
    } 
    catch (error) 
    {
     
      console.log(error); 
      return false; 
    }
} 

export const eliminarEntidad = async({entidad = 'mascotas'},object = {}) =>{
    
    try {

      
    } 
    catch (error) 
    {
     
      console.log(error); 
      return false; 
    }
} 

export const editarEntidad = async({entidad = 'mascotas'},object = {}) =>{
    
    try {

        try {

            const resp = await fetch(`${URL_API}/${entidad}`, {
                method: 'PUT',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(object)
            });
            
            return resp.ok;
        } 
        catch (error) 
        {
         
          console.log(error); 
          return false; 
        }
        
       
    } 
    catch (error) 
    {
     
      console.log(error); 
      return false; 
    }
} 