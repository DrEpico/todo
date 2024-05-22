//handleTodo.js

import { getProjectContentByName } from './handleProject';
import { displayProjectContent } from './ui';

//Constructor function 
export function Todo(title, description, dueDate, priority, checklist){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
}

// handleProject.js import here to access projects array
import { projects } from './handleProject';

//Function to create and add a todo to the object
export function pushTodoToProject(todo, projectName) {
    const projectIndex = projects.findIndex(project => project.title === projectName);
    if (projectIndex !== -1) {
        projects[projectIndex].todos.push(todo);
        console.log("Todo pushed to project:", projectName);
    } else {
        console.log("Project not found:", projectName);
    }
}

export const printProject = (project) => console.log(project);

export function deleteTodoBox(todo, box, project){
    console.log(typeof(project));
    console.log('project:' + project);
    let index = project.todos.indexOf(todo);
    if(index !== -1){
        project.todos.splice(index, 1);
    } else {
        console.log("Error while splicing todos array");
    }

    box.remove();
}

export function handleSortChange(event) {
    console.log('handleSortChange called');
    const sortBy = event.target.value;
    if (sortBy === 'date') {
        sortByDate();
    } else if (sortBy === 'priority') {
        sortByPriority();
    }
}

export function priorityValue(priority) {
    console.log('priorityValue called');
    switch(priority) {
        case 'low': return 1;
        case 'medium': return 2;
        case 'high': return 3;
        default: return 0;
    }
}

// Sort todos by date
export function sortByDate() {
    console.log('sortByDate called');
    let projectName = document.querySelector('#activeTab').textContent;
    let project = getProjectContentByName(projectName);
    if (project) {
        console.log('project exists');
        project.todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        displayProjectContent(project);
    }
}

// Sort todos by priority
export function sortByPriority() {
    console.log('sortByPriority called');
    let projectName = document.querySelector('#activeTab').textContent;
    let project = getProjectContentByName(projectName);
    if (project) {
        console.log('project exists');
        project.todos.sort((a, b) => priorityValue(b.priority) - priorityValue(a.priority));
        displayProjectContent(project);
    }
}


