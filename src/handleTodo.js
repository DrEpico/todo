// let title = 'Place holder';
// let description = 'Description';
// let dueDate = new Date("2022-03-25");
// let priority = 'medium';
// let notes = 'notes'; 
// let checklist = false;

//Constructor function 
export function Todo(title, description, dueDate, priority, checklist){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
}

//list of todos
let dailyProject = [];

//Function to create and add a todo to the object
export function pushTodo(todo) {
    dailyProject.push(todo);
}

export const printProject = (project) => console.log(project);

export function deleteTodoBox(todo, box){
    let index = project.indexOf(todo);
    if(index !== -1){
        projects.splice(index, 1);
    }

    box.remove();
}


