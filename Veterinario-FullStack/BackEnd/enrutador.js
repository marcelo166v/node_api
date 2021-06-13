const recursos = require('./recursos');
const mascotas = require('./Rutas/mascotas');
const duenos = require('./Rutas/duenos');
const veterinarias = require('./Rutas/veterinarias');
const consultas = require('./Rutas/consultas');

module.exports = {
    ruta: (data,callback) => { // Handler
      callback(200, {mesaje: 'esta es la ruta'})
    },
    mascotas: mascotas(recursos),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    },
    veterinarias: veterinarias(recursos.veterinarias),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    },
    duenos: duenos(recursos.duenos),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    },
    consultas: consultas(recursos),
    noEncontrada: (data,callback) => {
      callback(404, {mesaje: 'no encontrada'})
    }
};