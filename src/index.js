//index.js

import { loadBlankProject } from './blank-load'; 
import { loadInitialUI } from './ui';
import { printProject } from './handleTodo';
import { loadSidebar } from './ui'
import { loadHeader } from './ui';
import { loadTodoContainer } from './ui';
import { updateProjects } from './localStorage';
import { setInitialActiveProject } from './handleProject';

//Initiate the web app
loadBlankProject();
loadHeader();
loadSidebar();
loadTodoContainer();
loadInitialUI();
updateProjects();
setInitialActiveProject();
 

// createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);
printProject();




//TODO: Reseach about nfs date thing
//TODO: Excluding Daily project from deletable projects might be a good idea

