module.exports = function duenosHandler(duenos){
    return {
        GET: (data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             callback(200,duenos[data.indice]);
         }
         else{
             callback(200, duenos);
         }
       },
       POST: (data,callback) => { // Handler
         duenos.push(data.payload);
         callback(201, data.payload)
       },
       PUT:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             if(duenos[data.indice]){
                duenos[data.indice] = data.payload;
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
             duenos = duenos.filter((_duenos,_indice) => _indice != data.indice);
             callback(200,duenos);
         }else{
             callback(400, {mesaje: 'no se esta enviando el indice'})
         }
         
       },
    }
} 


