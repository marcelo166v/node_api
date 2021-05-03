const recursos = require('./recursos');
const mascotas = require('./Rutas/mascotas');

module.exports = {
    ruta: (data,callback) => { // Handler
      callback(200, {mesaje: 'esta es la ruta'})
    },
    mascotas: mascotas(recursos),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    }
};