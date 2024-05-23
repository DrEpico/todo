//index.js

import { loadBlankProject } from './blank-load'; 
import { loadInitialUI } from './ui';
import { printProject } from './handleTodo';
import { loadSidebar } from './ui'
import { loadSortOption } from './ui';
import { loadTodoContainer } from './ui';
// import { createTodo } from './handleTask';

//test
// console.log('test');

//Initiate the web app
loadBlankProject();
loadSidebar();
loadSortOption();
loadTodoContainer();
loadInitialUI();

 

// createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();



//TODO: Enhance the CSS
//TODO: Do localstorage additions

//TODO: Reseach about nfs date thing
//TODO: Sort by priority, sort by date - solve click issues
//TODO: Excluding Daily project from deletable projects might be good

