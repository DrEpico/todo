//index.js

import { loadBlankProject } from './blank-load'; 
import { loadInitialUI } from './ui';
import { printProject } from './handleTodo';
import { loadSidebar } from './ui'
// import { createTodo } from './handleTask';

//test
// console.log('test');

//Load a blank project on first land
loadBlankProject();
loadSidebar();
loadInitialUI();

 

// createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();

//TODO: Sort by priority, sort by date
//TODO: Reseach about nfs date thing
//TODO: Do localstorage additions

