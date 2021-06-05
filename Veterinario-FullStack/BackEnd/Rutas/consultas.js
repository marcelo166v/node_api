module.exports = function consultasHandler(consultas){
    return {
        GET: (data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             callback(200,consultas[data.indice]);
         }
         else{
             callback(200, consultas);
         }
       },
       POST: (data,callback) => { // Handler
         let consulta = data.payload;
         consulta.fechaCreacion = new Date();
         consulta.fechaEdicion = null;
         //consultas.push(consulta);
         // Agregar elemento al array con destructurin es una buena practica
         consultas = [...consultas,consulta];
         callback(201, consulta);
       },
       PUT:(data,callback) => { // Handler
         if(typeof(data.indice) !== "undefined"){
             if(consultas[data.indice]){
                const {fechaCreacion} = consultas[data.indice];
                consultas[data.indice] = {...data.payload,fechaCreacion,fechaEdicion: new Date()};
                callback(200,consultas[data.indice]);
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
            consultas = consultas.filter((_consultas,_indice) => _indice != data.indice);
             callback(200,consultas);
         }else{
             callback(400, {mesaje: 'no se esta enviando el indice'})
         }
         
       },
    }
} 