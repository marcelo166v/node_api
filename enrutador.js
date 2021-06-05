const recursos = require('./recursos');
const mascotas = require('./Rutas/mascotas');
const veterinarias = require('./Rutas/veterinarias');

module.exports = {
    ruta: (data,callback) => { // Handler
      callback(200, {mesaje: 'esta es la ruta'})
    },
    mascotas: mascotas(recursos.mascotas),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    },
    veterinarias: veterinarias  (recursos.veterinarias),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    }
};