
module.exports = function mascotas(recursos){
    return {
        GET: (data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             callback(200,recursos.mascotas[data.indice]);
         }
         else{
             callback(200, recursos.mascotas);
         }
       },
       POST: (data,callback) => { // Handler
         recursos.mascotas.push(data.payload);
         callback(201, data.payload)
       },
       PUT:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             if(recursos.mascotas[data.indice]){
                 recursos.mascotas[data.indice] = data.payload;
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
             recursos.mascotas = recursos.mascotas.filter((_mascota,_indice) => _indice != data.indice);
             callback(200,recursos.mascotas);
         }else{
             callback(400, {mesaje: 'no se esta enviando el indice'})
         }
         
       },
    }
} 


