import { loadBlankProject } from './blank-load'; 

//Load a blank project on first land
loadBlankProject();



console.log('test');
const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Goodbye cruel world - test from webpack index.js DOM mainmap';
contentDiv.appendChild(testH1);