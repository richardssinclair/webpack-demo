import _ from 'lodash';
import './style.css';
import Icon from './test.jpg';

import printMe from './print.js';



function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Loadash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    // Add the image to our existing div.
    const testImage = new Image();
    testImage.src = testImage;

    element.appendChild(testImage);


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);


    return element;
  }
  
  document.body.appendChild(component());
  