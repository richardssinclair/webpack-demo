import _ from 'lodash';
import './style.scss';
import './wolf.css';
import Icon from './test.jpg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello');

    const btn = document.createElement('button');

    const pTag = document.createElement('p');
    // Loadash, now imported by this script
    pTag.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // Add the image to our existing div.
    const testImage = new Image();
    testImage.src = testImage;


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(testImage);
    element.appendChild(pTag)


  
    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());
  