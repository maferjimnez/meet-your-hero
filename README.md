# MEET YOUR HERO
Challenge para Eurekalabs.

## Sobre el challenge:
Aplicación web para conocer a todos los héroes de Marvel, su historia y su aparación en cómics.
<br></br>
Link a la demo [Meet Your Hero](https://meet-your-hero-mafer.vercel.app/index.html)

## Stacks:
* HTML
* Sass (scss)
* Javascript + jQuery

## Herramientas y recursos:
* [Marvel Api](https://developer.marvel.com/)
* Figma

## Features:
* La aplicación muestra un listado de superhéroes utilizando la API de Marvel.
* El listado está páginado.
* Se puede realizar una búsqueda por nombre del superhéroe.
* Al clickear sobre la imagen o nombre de alguno de los superhéroes de redirige a otra página para visualizar el detalle del mismo (nombre, imagen en grande, descripción si existe y aparición en cómics).
* Extra: Funcionalidad para mostrar una lista de superhéroes favoritos (página con la lista de favoritos y la opción de agregar o quitar en la página de detalle).

## Lauch
Para correr el proyecto:
1. Se debe descargar o clonar el repositorio
2. Agregar la extensión Live Sass Compiler al Visual Studio Code.
3. Realizar la siguiente configuración en settings.json del Live Sass Compiler:

```
"liveSassCompile.settings.formats": [
		{
			"format": "expanded",
			"extensionName": ".css",
			"savePath": "~/../css/"
		}
]
```
