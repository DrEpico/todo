import { loadBlankProject } from './blank-load'; 
import { printProject } from './handleTask'

//Load a blank project on first land
loadBlankProject();



console.log('test');
const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Goodbye cruel world - test from webpack index.js DOM mainmap';
contentDiv.appendChild(testH1);
createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();