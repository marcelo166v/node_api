
module.exports = function mascotasHandler({mascotas,duenos}){
    return {
        GET: (data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             callback(200,mascotas[data.indice]);
         }
         else{
            const mascotasConRelaciones = mascotas.map((mascota,index) => (
                {...mascota,
                    dueno: duenos[mascota.dueno],
                }
             ));
             callback(200, mascotasConRelaciones);
         }
       },
       POST: (data,callback) => { // Handler
         mascotas.push(data.payload);
         callback(201, data.payload)
       },
       PUT:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             if(mascotas[data.indice]){
                 mascotas[data.indice] = data.payload;
                 callback(200,data.payload);
             }
             else
             {
                 callback(404, {mesaje: 'no existe esa mascota'});     
             }
         }
         else
         {
             callback(404, {mesaje: 'no se esta enviando el indice'})
         }
         
       },
       DELETE:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             mascotas = mascotas.filter((_mascota,_indice) => _indice != data.indice);
             callback(200,mascotas);
         }else{
             callback(400, {mesaje: 'no se esta enviando el indice'})
         }
         
       },
    }
} 


