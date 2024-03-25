// let title = 'Place holder';
// let description = 'Description';
// let dueDate = new Date("2022-03-25");
// let priority = 'medium';
// let notes = 'notes'; 
// let checklist = false;

//Constructor function 
function Todo(title, description, dueDate, priority, notes, checklist){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}

//list of todos
let project = [];

//Function to create and add a todo to the object
function createTodo(title, description, dueDate, priority, notes, checklist){
    let todo = new Todo(title, description, dueDate, priority, notes, checklist);
    project.push(todo);
}

createTodo('Place holder', 'Description', new Date("2022-03-25"), 'medium', 'notes', false);

export function printProject(){
    console.log(project);
}


