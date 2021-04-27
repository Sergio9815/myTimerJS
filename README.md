## MyTimerJS ⏱

![Screenshot (31)](https://user-images.githubusercontent.com/37419848/116169199-c7767a80-a6c9-11eb-90ff-3ca32598b67d.png)
En este proyecto se desarrolló un temporizador usando Javascript; Esto con el fin de poder implementar fácilmente este elemento en futuros proyectos. Y a su vez, aprender a publicar proyectos de código abierto en NPM.

## Instalación

Utilice el administrador de paquetes de JavaScript [npm](https://www.npmjs.com/) ó [yarn](https://yarnpkg.com/) para realizar la instalación.

```bash
npm install @sagb_24/mytimerjs 
or
yarn add @sagb_24/mytimerjs
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
3. No olvide ejecutar su código desde un servidor local.

## En el código JS
- Importe la clase "Timer" mediante una ruta relativa a su archivo de JavaScript principal.
- Luego debe instanciar la clase pasándole como parámetro el id del contenedor que estableció en el HTML y el formato que desea utilizar.
- Finalmente llamaremos a las funciones básicas del temporizador.

```javascript
import Timer from "../node_modules/@sagb_24/mytimerjs/dist/mytimer.min.js";

const init = new Timer({
  // USE HTML ELEMENT ID
  idContainer: 'timerJS',  
  // THE TYPE OF TIMER TO USE IS INDICATED
  // HOURS:MINUTES:SECONDS | 00:00:00
  // MINUTES:SECONDS | 00:00
  timerFormat: '00:00:00' 
});

init.start(); // METHOD THAT START THE TIMER
init.pause() // METHOD THAT PAUSES THE TIMER
init.stop(); // METHOD THAT STOPS THE TIMER
init.getCurrentTime(); // METHOD THAT RETURNS LAST STORED VALUE OF THE TIMER
```
## Demostración

- En el siguiente link puede acceder el sitio de [demostración](https://my-timer-demo.vercel.app/) 🔮 donde podrá utilizar las funciones básicas de myTimerJS.
- También puede clonar el [repositorio de demostración](https://github.com/Sergio9815/my-timer-demo) y verificar la configuración inicial.
