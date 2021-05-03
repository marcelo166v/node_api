const http = require('http');
const requestHandler = require('./request-handler');
//const recursos = require('./recursos');

// Global (Se puede leer desde cualquier modulo)
//recursos = recursos;
// global.recursos = {
//   mascotas:
//     [
//       {tipo:"perro", nombre:"firulais 1",dueno: "marcelo"},
//       {tipo:"perro", nombre:"firulais 2",dueno: "marcelo"},
//       {tipo:"perro", nombre:"firulais 3",dueno: "marcelo"},
//     ],
// }

const server = http.createServer(requestHandler);

// const server = http.createServer((req, res) => {
//   //1. Obtengo url request
//   console.log(req.url);
//   const urlActual = req.url;
//   const urlParseada = url.parse(urlActual,true);
//   console.log({urlActual , urlParseada});

//   // 2. Obtener la ruta
//   const ruta = urlParseada.pathname.replace(/^\/|\/$/g, '');

//   // 3. muestro ruta
//   console.log("Estas en la ruta " + ruta);

//   // 3.5 request metodo
//   console.log('req metodo: ',req.method);
//   const metodo = req.method;

//   // 3.6 request header
//   const {headers} = req;
//   console.log('req header: ', {headers});

//   // obtener variables de la query request
//   const {query} = urlParseada;
//   console.log("query ", {query});

//   // 3.7 obtener payload, en caso de tenerlo
//   const decoder = new StringDecoder('utf-8');

//   let buffer = '';
//   // Event data de request 
//   req.on('data',(data)=>{
//       buffer += decoder.write(data);
//   })

//   // Event data de request 
//   req.on('end',() =>{
    
//     buffer += decoder.end();

//     if(headers["content-type"] === "application/json")
//       buffer = JSON.parse(buffer);

//     // Armo data para el enrutador
//     const data = {
//       ruta: ruta,
//       headers,
//       method: req.method, 
//       payload: buffer,
//     }

//     console.log("data: ",data);

//     let handler;
//     console.log("ruta: ",ruta);
    
//     if(ruta && enrutador[ruta] && enrutador[ruta][metodo])
//       handler = enrutador[ruta][metodo];
//     else
//       handler = enrutador.noEncontrada;

//     // 4. Ejecutar handler
//     if(typeof(handler) === 'function')
//       handler(data,(status = 200, mensaje)=>{
//           const respuesta = JSON.stringify(mensaje);
//           res.setHeader("content-type","Application/json");
//           res.writeHead(status);
//           res.end(respuesta);
//       })
//   })

// });
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(5000, () =>{
  console.log("servidor conectao")
});