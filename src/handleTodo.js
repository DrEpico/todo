//handleTodo.js

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

export function priorityValue(priority) {
    switch(priority) {
        case 'low': return 1;
        case 'medium': return 2;
        case 'high': return 3;
        default: return 0;
    }
}

// Sort todos by date
export function sortByDate() {
    let projectName = document.querySelector('#activeTab').textContent;
    let project = getProjectContentByName(projectName);
    if (project) {
        project.todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        displayProjectContent(project);
    }
}

// Sort todos by priority
export function sortByPriority() {
    let projectName = document.querySelector('#activeTab').textContent;
    let project = getProjectContentByName(projectName);
    if (project) {
        project.todos.sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority));
        displayProjectContent(project);
    }
}


