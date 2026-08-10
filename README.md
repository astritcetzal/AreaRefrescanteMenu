# AreaRefrescanteMenu
Menú de área refrescante

---- 

Este es un menú de un negocio real llamado "Área refrescante" con la finalidad de proporcionar una mejor información de su servicio, este negocio vende bebidas para todo tipo de público.

## Tecnológias
- DynamoDB
- AWS Lambda
- AWS API Gateway
- Git hub Pages
- VS Code
- HTML/CSS/JavaScript
- Python 3.12

### Como funciona
Lo primero que se implementó fue la estructura de la base de datos, estableciendo cada una de las bebidas del negocio.
Como segundo paso se creó una función lanbda llamada `ObtenerMenuBebidad`
Como siguiente paso se estableció el Rol pertinente a al lambda
Como tercer paso se estableció la API `MenuAPI` con el método `GET` porque no se necesita actualizar la BD sino solo acceder a los datos. 

Lo que prosiguió fue la creación de la estructura del HTML donde conectamos el archivo css y el .js.

Como siguiente paso fue la implementacion de featch para llamr a la API y denotro de esta por medio de un foreach llama a la imagen para mostrarla en la pagina, cabe recalcarl que las imagenes se encuentran guardadas dentro de una carpeta `images` y no dentro de la bd, lo que si es que se llaman igual que el id de cada uno de los productos.
Tambien se llaman el nombre de la bebida y el precio de cada una de estas. 

Dentro de app.js tenemos a la variable `contenedor` (```const contenedor = document.getElementById('contenedor-menu');```) para obtener a contenedor-menu que tenemos con un id en index.html: ````<div id="contenedor-menu">   
    </div>````


#### Referencias

https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch4


## Declaración de uso de IA
La implementación del proyecto le corresponden a la autora, la IA(Gemini) fue indispensable para el diseño del front y como guia para implementar de manera correcta cada una de las tecnológias utilizadas. 