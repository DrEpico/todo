//index.js

import { loadBlankProject } from './blank-load'; 
import { loadInitialUI } from './ui';
import { printProject } from './handleTask';
// import { createTodo } from './handleTask';


//test
console.log('test');
const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Goodbye cruel world - test from webpack index.js DOM mainmap';
contentDiv.appendChild(testH1);

//Load a blank project on first land
loadBlankProject();
loadInitialUI();

 

// createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();

