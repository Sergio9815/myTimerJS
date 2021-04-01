## MyTimerJS

En este proyecto se desarrolló un temporizador usando Javascript; Esto con el fin de poder implementar fácilmente este elemento en futuros proyectos. Y a su vez, aprender a publicar proyectos de código abierto en NPM.

## Instalación

Utilice el administrador de paquetes de node [npm](https://www.npmjs.com/) para instalar myTimerJs.

```bash
npm install @sagb_24/mytimerjs 
```

## Empezando

Establezca un id en el contenedor donde se mostrará el temporizador.

```html
<div id="timerJS">00:00:00</div>
```

## Código Js
- En su archivo Js, importe la clase Timer que pertenece al módulo mytimerjs.
- Luego debe instanciar la clase pasándole como parámetro el id del contenedor que estableció en el HTML.
- Finalmente llamaremos al método start () para iniciar el temporizador.

```javascript
import Timer from "../node_modules/@sagb_24/mytimerjs/lib/myTimer.js";

const play = document.querySelector('#btn-Start')

play.addEventListener('click', (e) => {

	  const init = new Timer({
		idContainer: 'timerJS',  //USE HTML ELEMENT ID
	  });
 	 init.start();
	 
})
```
