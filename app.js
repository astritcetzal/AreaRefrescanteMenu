// 1. Tus variables globales arriba
const urlAPI = 'https://tdjc1hna3i.execute-api.us-east-1.amazonaws.com/meni';
const contenedor = document.getElementById('contenedor-menu');

async function obtenerMenu() {
  try {
    const respuesta = await fetch(urlAPI);
    const datos = await respuesta.json();

    console.log("¡Datos del menú obtenidos con éxito!", datos);

    // 2. El ciclo va ADENTRO de la función, después de tener los datos
    datos.forEach(bebida => {
        let tarjeta = `
            <div class="estilo-cont">
                <img src="images/${bebida.IdProduct}.jpg" alt="${bebida.Nombre}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 15px; margin-bottom: 15px;">
                <h3>${bebida.Nombre}</h3>
                <p class="precio-badge">Precio: $${bebida.Precio}</p>
        `;

        // Agregamos los sabores si la bebida los tiene
        if (bebida.Sabores) {
            // Le agregamos la clase 'sabores-texto'
            tarjeta += `<p class="sabores-texto">Sabores: ${bebida.Sabores.join(', ')}</p>`; 
        }

        // Cerramos la tarjeta al final
        tarjeta += `</div>`;

        // Inyectamos todo el bloque al contenedor del HTML
        contenedor.innerHTML += tarjeta;
    });

  } catch (error) {
    console.error("Hubo un problema al cargar el menú:", error);
  }
}

// 3. Ejecutamos la función
obtenerMenu();