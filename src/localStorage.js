import { projects } from "./handleProject";

export function updateProjects(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjects(){
    
}
