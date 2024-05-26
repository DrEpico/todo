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
            return new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.checklist);
        });
        
        return project;
    })));
}

export function loadProjects(){
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        parsedProjects.forEach(projData => {
            // Recreate todos as instances of the Todo class
            const todos = projData.todos.map(todoData => {
                return new Todo(
                    todoData.title,
                    todoData.description,
                    todoData.dueDate,
                    todoData.priority,
                    todoData.checklist
                );
            });
            
            // Create a new Project instance with the recreated todos
            const project = new Project(projData.title, todos);
            
            // Display project content (assuming this function exists)
            displayProjectContent(project);
            
            // Push the new project instance to the projects array
            projects.push(project);
        });
    } else {
        console.log("No stored projects");
    }
}
