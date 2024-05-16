export function Project(title, todos){
    this.title = title;
    this.todos = todos
}

export const createProjects = () => {
    let project = new Project(title, todos); //takes a name for the project and related todo list array 
    projects.push(project);
    //TODO: link with a prompt function in ui class
}

let projects = [];

function displayProject(){
    //TODO: Displays todos in the selected project
}