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


// export function pushProject(project){
//     projects.push(project);
// }