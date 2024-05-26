//localStorage.js

import { projects } from "./handleProject";
import { displayProjectContent } from './ui'
import { Project } from "./handleProject";
import { Todo } from "./handleTodo";

export function updateProjects() {
    // Assume `projects` is an array available in your scope
    localStorage.setItem('projects', JSON.stringify(projects.map(proj => {
        // Creating a new Project instance
        let project = new Project(proj.title, proj.todos);
        
        // Creating todo objects for the project
        project.todos = project.todos.map(todo => {
            return new Todo(todo.title);
        });
        
        return project;
    })));
}

export function loadProjects(){
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects){
        const parsedProjects = JSON.parse(savedProjects);
        parsedProjects.forEach(proj => {
            const project = new Project(proj.title, proj.todos);
            displayProjectContent(project);
            projects.push(project);
        });
    } else {
        console.log("No stored projects");
    }
}
