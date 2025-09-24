function recordar() {
      let dia = document.getElementById("dia").value.trim();
      const mensaje = document.getElementById("mensaje").value;

      // Normalizar texto (para que no importe si ponen mayúsculas o minúsculas)
      dia = dia.charAt(0).toUpperCase() + dia.slice(1).toLowerCase();

      let actividad = "";

      switch(dia) {
        case "Lunes":
          actividad = "Laboratorio de Web";
          break;
        case "Martes":
          actividad = "Debes estudía para F2";
          break;
        case "Miercoles":
          actividad = "Laboratio de F2";
          break;
        case "Miércoles":
          actividad = "Laboratorio de F2";  //VALIDA EL DÍA CON LA TILDE
          break;
        case "Jueves":
          actividad = "Laboratorio de Administracion de bases de datos";
          break;
        case "Viernes":
          actividad = "Discusión de F2";
          break;
        case "Sabado": 
          actividad = "Sal a relajarte un rato";
          break;
        default:
          actividad = "Dia no valido, dia del senhor";
      }

      document.getElementById("resultado").innerText = 
        "Hoy es " + dia + ". " + actividad + "\n" +
        (mensaje ? " Nota personal: " + mensaje : "");
    }