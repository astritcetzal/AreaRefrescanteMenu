# Menú Área Refrescante

Aplicación web desarrollada para el negocio local "Área Refrescante", con la finalidad de digitalizar su menú de bebidas y mejorar la experiencia de consulta para el cliente final mediante una interfaz responsiva y de alta disponibilidad.

## Tecnologías y Herramientas

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Amazon DynamoDB](https://img.shields.io/badge/Amazon_DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)
![AWS API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=for-the-badge&logo=amazonapigateway&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5 & CSS3](https://img.shields.io/badge/HTML5_&_CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white)

## Arquitectura de Software

El proyecto está construido bajo un enfoque de microservicios, utilizando infraestructura Serverless para optimizar costos de ejecución y delegar la administración del servidor al proveedor de la nube.

### Flujo de Funcionamiento e Implementación

1. **Modelado de Datos:** Se diseñó una tabla NoSQL en Amazon DynamoDB para establecer y almacenar el catálogo de bebidas y sus respectivos precios.
2. **Lógica Backend:** Se desarrolló una función AWS Lambda (`ObtenerMenuBebidas`) en entorno Python 3.12, encargada de extraer la información de la base de datos. Se configuraron estrictamente los roles y políticas de ejecución de IAM para asegurar el acceso a DynamoDB.
3. **Exposición del Servicio:** Se configuró un endpoint mediante AWS API Gateway utilizando el método HTTP `GET`, permitiendo el acceso de solo lectura a los datos del catálogo de forma segura.
4. **Desarrollo de Interfaz:** Se estructuró el maquetado y diseño visual utilizando HTML y CSS, separando correctamente la lógica de presentación de la lógica de negocio.
5. **Consumo de API (Frontend):** En el archivo `app.js`, se capturó el contenedor principal del DOM (`#contenedor-menu`). Mediante el uso de la API `Fetch` de JavaScript, se realiza una petición asíncrona al endpoint generado. Los datos recibidos en formato JSON son iterados para inyectar dinámicamente las tarjetas de producto en la interfaz. 
6. **Gestión de Recursos Estáticos:** Las imágenes de los productos se administran localmente en el directorio de despliegue (`/images`), vinculándose dinámicamente en el código a través de identificadores coincidentes con la llave primaria de los productos en la base de datos.

## Referencias Documentales

* [Fetch API - MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)

## Declaración de Autoría y Uso de Inteligencia Artificial

La arquitectura en la nube, el diseño de la base de datos y la implementación lógica del código corresponden íntegramente a la autora del repositorio. Se utilizó asistencia de inteligencia artificial estrictamente como herramienta de apoyo secundario para la optimización de sintaxis CSS, estructuración semántica del DOM y guía de mejores prácticas en la configuración de servicios de AWS.
