const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');

module.exports = (req, res) => {
  
  //1. Obtengo url request
  console.log(req.url);
  const urlActual = req.url;
  const urlParseada = url.parse(urlActual,true);
  console.log({urlActual , urlParseada});

  // 2. Obtener la ruta
  const ruta = urlParseada.pathname.replace(/^\/|\/$/g, '');

  // 3. muestro ruta
  console.log("Estas en la ruta " + ruta);

  // 3.5 request metodo
  console.log('req metodo: ',req.method);
  const metodo = req.method;

  // Doy permisos de Cors 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, PUT, DELETE, POST"
  );

  // 3.5.1
  if(metodo === "OPTIONS"){
    res.writeHead(200);
    res.end();
    return;
  }

  // 3.6 request header
  const {headers} = req;
  console.log('req header: ', {headers});

  // obtener variables de la query request
  const {query} = urlParseada;
  console.log("query ", {query});

  // 3.7 obtener payload, en caso de tenerlo
  const decoder = new StringDecoder('utf-8');

  let buffer = '';
  // Event data de request 
  req.on('data',(data)=>{
      buffer += decoder.write(data);
  })

  // Event data de request 
  req.on('end',() =>{
    
    buffer += decoder.end();

    if(headers["content-type"] === "application/json")
      buffer = JSON.parse(buffer);

    indice = null;
    if(ruta.indexOf("/") >= -1){
      var [rutaPrincipal,indice] = ruta.split("/");
    }

    // Armo data para el enrutador
    const data = {
      indice,
      ruta: rutaPrincipal,
      headers,
      method: req.method, 
      payload: buffer,
    }

    console.log("data: ",data);

    let handler;
    console.log("ruta: ",ruta);
    
    if(rutaPrincipal && enrutador[rutaPrincipal] && enrutador[rutaPrincipal][metodo])
      handler = enrutador[rutaPrincipal][metodo];
    else
      handler = enrutador.noEncontrada;

    // 4. Ejecutar handler
    if(typeof(handler) === 'function')
      handler(data,(status = 200, mensaje)=>{
          const respuesta = JSON.stringify(mensaje);
          res.setHeader("content-type","Application/json");
          res.writeHead(status);
          res.end(respuesta);
      })
  })

};