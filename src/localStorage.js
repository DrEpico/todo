import { projects } from "./handleProject";

export function saveProjects(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjects(){
    
}

export function updateProjects(){

}