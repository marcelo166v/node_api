module.exports = function veterinariasHandler(veterinarias){
    return {
        GET: (data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             callback(200,veterinarias[data.indice]);
         }
         else{
             callback(200, veterinarias);
         }
       },
       POST: (data,callback) => { // Handler
         veterinarias.push(data.payload);
         callback(201, data.payload)
       },
       PUT:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             if(veterinarias[data.indice]){
                veterinarias[data.indice] = data.payload;
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