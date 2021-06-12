const express = require('express')
const app = express()
const port = 3000
//const recursos = require('../Veterinario-FullStack/BackEnd/recursos/')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Ruta para mascotas
app.get('/mascotas', (req, res) => {
    const mascotas = [
        {tipo:"perro", nombre:"firulais 1",dueno: "marcelo"},
        {tipo:"perro", nombre:"firulais 2",dueno: "marcelo"},
        {tipo:"perro", nombre:"firulais 3",dueno: "marcelo"},
    ];
    res.status(200).json(mascotas); // Codigo OK
})

app.post('/mascotas', (req, res) => {
    
    res.status(200).json(mascotas); // Codigo OK
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
