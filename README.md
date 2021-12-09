## MyTimerJS ⏱

![Screenshot (31)](https://user-images.githubusercontent.com/37419848/116169199-c7767a80-a6c9-11eb-90ff-3ca32598b67d.png)
In this project a timer was developed using Javascript; This in order to be able to easily implement this element in future projects. And in turn, learn to publish open source projects in NPM.

## Installation

Use the JavaScript package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install.

```bash
npm install @sagb_24/mytimerjs 
or
yarn add @sagb_24/mytimerjs
```

## Getting started

1. Set an id in the container where the timer will be displayed.

```html
<div id="timerJS">00:00:00</div>
```
2. Put the type "module" in the link of your external JavaScript file.

```html
<script type="module" src="./index.js"></script>
```
3. Don't forget to run your code from a local server.

## In your JavaScript file
- Import the "Timer" class using a relative path to your main JavaScript file.
- Then you must instantiate the class passing it as a parameter the id of the container that you set in the HTML and the format you want to use.
- Finally we will call the basic functions of the timer.

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
## Sample project

- In the following link you can access the [demo site](https://my-timer-demo.vercel.app/) 🔮 where you can use the basic functions of myTimerJS.
- You can also clone the [demo repository](https://github.com/Sergio9815/my-timer-demo) and check the initial configuration.
