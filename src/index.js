import { loadBlankProject } from './blank-load'; 
import { loadUI } from './blank-load'; 
import { printProject } from './handleTask'
import { createTodo } from './handleTask'



//Load a blank project on first land
loadBlankProject();



console.log('test');
const contentDiv = document.querySelector('.content');
const testH1 = document.createElement('h1');
testH1.textContent = 'Goodbye cruel world - test from webpack index.js DOM mainmap';
contentDiv.appendChild(testH1);
createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();


let content = document.querySelector('.content'); // Select the .content element
let box = document.createElement('div'); // Create a new div for the .box element
box.classList.add('box'); // Add the 'box' class to the .box element

// Create a new div for the plus sign
let plusSign = document.createElement('div');
plusSign.textContent = '+';
plusSign.classList.add('plus-sign');

// Append the plus sign to the .box element
box.appendChild(plusSign);

// Append the .box element to the .content element
content.appendChild(box);

// Add click event listener to the plus sign
plusSign.addEventListener('click', function() {
    // Handle click event here, for example, log a message
    console.log('Plus sign clicked!');
});