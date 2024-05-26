//handleProject.js

export function Project(title, todos = []){
    this.title = title;
    this.todos = todos;
}

export const projects = [];

export function initDefaultProject(){
    let today = new Project('Daily');
    projects.push(today);
}

export function createProject(title) {
    const project = new Project(title);
    projects.push(project);
    console.log("New project created:", title);

    //TODO: link with a prompt function in ui class
}

export function getProjectContentByName(projectName){
    let project = projects.find(proj => proj.title === projectName);
    return project;
}

export function deleteProjectListener(deleteBtn, clickedElement){
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent triggering the project tab click event
        let projectName = clickedElement.textContent.trim();
        if (confirm(`Are you sure you want to delete the project "${projectName}"?`)) {
            deleteProject(projectName, clickedElement);
        }
    });
} 

function deleteProject(projectName, projectElement){
    let project = getProjectContentByName(projectName);
    let index = projects.indexOf(project);
    if(index !== -1){
        projects.splice(index, 1);
    } else {
        console.log("Error while splicing todos array");
    }
    projectElement.remove();
}

export function logProjectTodos(project) {
    if (!project || !Array.isArray(project.todos)) {
        console.log("Invalid project or todos not found.");
        return;
    }

    console.log("Project clicked:", project.title);
    project.todos.forEach(todo => {
        console.log("Title:", todo.title);
        console.log("Description:", todo.description);
        console.log("Due Date:", todo.dueDate);
        console.log("Priority:", todo.priority);
        console.log("Checklist:", todo.checklist);
        console.log("------------------------------------------");
    });
}