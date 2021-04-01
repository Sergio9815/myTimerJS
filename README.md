## MyTimerJS

En este proyecto se desarrolló un temporizador usando Javascript; Esto con el fin de poder implementar fácilmente este elemento en futuros proyectos. Y a su vez, aprender a publicar proyectos de código abierto en NPM.

## Instalación

Utilice el administrador de paquetes de node [npm](https://www.npmjs.com/) para instalar myTimerJs.

```bash
npm install @sagb_24/mytimerjs 
```

## Primeros pasos

1. Establezca un id en el contenedor donde se mostrará el temporizador.

```html
<div id="timerJS">00:00:00</div>
```
2. Coloque el tipo "module" al enlace de su archivo externo de JavaScript.

```html
<script type="module" src="./index.js"></script>
```

## En el código JS
- Importe la clase "Timer" mediante una ruta relativa a su archivo de JavaScript principal.
- Luego debe instanciar la clase pasándole como parámetro el id del contenedor que estableció en el HTML.
- Finalmente llamaremos al método start () para iniciar el temporizador.

```javascript
import Timer from "../node_modules/@sagb_24/mytimerjs/lib/myTimer.js";

const init = new Timer({
  idContainer: 'time',  //USE HTML ELEMENT ID
});

init.start(); //CALL TO MAIN FUNCTION
```
