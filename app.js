// Tu URL real de API Gateway
const urlAPI = 'https://tdjc1hna3i.execute-api.us-east-1.amazonaws.com/meni';

async function obtenerMenu() {
  try {
    // Paso A: Hacer la petición GET. 
    // fetch() por defecto hace un GET, así que no necesitas poner toda la configuración larga.
    const respuesta = await fetch(urlAPI);

    // Paso B: Convertir la respuesta cruda de internet a un formato JSON que JS entienda
    const datos = await respuesta.json();

    // Verificamos en la consola del navegador que los datos llegaron correctamente
    console.log("¡Datos del menú obtenidos con éxito!", datos);

    // Paso C: Aquí es donde empezarás a iterar sobre tus platillos
    // datos.forEach(platillo => { ... lógica para crear el HTML ... });

  } catch (error) {
    // Si no hay internet o la API falla, atrapamos el error para que la página no colapse
    console.error("Hubo un problema al cargar el menú:", error);
  }
}

// Ejecutamos la función en cuanto cargue el archivo
obtenerMenu();