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
        {nombre:"marcelo", apellido:"villani", pais: "Argentina",documento: "20304252228"},
        {nombre:"marcelo", apellido:"gonzalez",pais: "Argentina", documento: "20304252228"},
      ],
      duenos:
      [
        {nombre:"marcelo", apellido:"perez" ,documento: "20304252228"},
        {nombre:"marcelo", apellido:"villani", pais: "Argentina", documento: "20304252228"},
        {nombre:"marcelo", apellido:"gonzalez", pais: "Brasil", documento: "20304252228"},
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