## MyTimerJS

In this project a timer was developed using Javascript. This in order to be able to easily implement this element in future projects. And at the same time, learn how to publish open source projects in NPM.

## Installation

Use the package manager of node [npm](https://www.npmjs.com/) to install myTimerJs.

```bash
npm install @sagb_24/mytimerjs 
```

## Getting Started

Set the id for the timer container.

```html
<div id="timerJS">00:00:00</div>
```

## Javascript　
- In your Js file, import the Timer class that belongs to the mytimerjs module.
- Then we will only have to instantiate the class passing it as a parameter the id of the container established in the HTML.
- Finally we will call the start () method to start the timer.

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
