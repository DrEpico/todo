export function Project(title, todos){
    this.title = title;
    this.todos = todos
}

export function initDefaultProject(){
    let today = new Project('today');
    projects.push(today);
}

export const createProject = (title) => {
    let project = new Project(title); //takes a name for the project and related todo list array 
    projects.push(project);
    //TODO: link with a prompt function in ui class
}

let projects = [];

export function getProjectContentByName(projectName){
    let project = projects.find(proj => proj.title === projectName);
    return project;
}

// export function pushProject(project){
//     projects.push(project);
// }