export function Project(title, todos){
    this.title = title;
    this.todos = todos
}

export const createProjects = () => {
    let project = new Project(title, todos);
    projects.push(project);
}

let projects = [];