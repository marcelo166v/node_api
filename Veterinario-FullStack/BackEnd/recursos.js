module.exports =  {
    mascotas:
      [
        {tipo:"perro", nombre:"firulais 1",dueno: "marcelo"},
        {tipo:"perro", nombre:"firulais 2",dueno: "marcelo"},
        {tipo:"perro", nombre:"firulais 3",dueno: "marcelo"},
      ],
      veterinarias:
      [
        {nombre:"marcelo", apellido:"perez", pais: "Argentina", documento: "20304252228"},
        {nombre:"alfonso", apellido:"villani", pais: "Argentina",documento: "20304252228"},
        {nombre:"alberto", apellido:"gonzalez",pais: "Argentina", documento: "20304252228"},
      ],
      duenos:
      [
        {nombre:"marcelo", apellido:"perez" ,documento: "20304252228"},
        {nombre:"horacio", apellido:"villani", documento: "20304252228"},
        {nombre:"pedro", apellido:"gonzalez", documento: "20304252228"},
      ],
      consultas:
      [
        {
          mascota: 0, 
          veterinaria:0,
          encabezado:'', 
          fechaCreacion: new Date(), 
          fechaEdicion: new Date(), 
          historia: '', 
          diagnostico: '',
        },
       
      ],

  };