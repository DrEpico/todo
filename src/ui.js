
import { createTodo } from './handleTask';

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = 'Click me to add todo'; // Default content

    const plusSign = document.createElement('div');
    plusSign.textContent = '+';
    plusSign.classList.add('plus-sign');

    box.appendChild(plusSign);
    return { box, plusSign };
}

function initTodoBox(box, todo) {
    box.textContent = 'Todo List'; // Update content to todo list
    box.classList.remove('clickable'); // Remove clickable class

    const titleElement = document.createElement('h2');
    titleElement.textContent = todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${todo.description}`;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${todo.dueDate}`

    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${todo.priority}`;
    
    const checklistElement = document.createElement('p');
    checklistElement.textContent = `Status: ${todo.checklist ? 'Due' : 'Done'}`;

    box.appendChild(titleElement);
    box.appendChild(descriptionElement);
    box.appendChild(dueDateElement);
    box.appendChild(priorityElement);
    box.appendChild(checklistElement);
}

function addTodoBox() {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    box.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        
        initTodoBox(box, createTodo(box)); // Initialise clicked box as todo list
        addTodoBox(); // Add a new clickable box
        generateForm(box);
    });

    content.appendChild(box);
}

export const loadInitialUI = () => {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    box.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        initTodoBox(box, createTodo(box)); // Initialise clicked box as todo list
        addTodoBox(); // Add a new clickable box
        generateForm(box);
    });

    content.appendChild(box);
};

function generateForm(box){
    let titleElement = document.createElement("input");
    titleElement.setAttribute("type", "text");
    titleElement.setAttribute("id", "title");
    let descriptionElement = document.createElement("input");
    descriptionElement.setAttribute("type", "text");
    descriptionElement.setAttribute("id", "description");
    let dueDateElement = document.createElement("input");
    dueDateElement.setAttribute("type", "date");
    dueDateElement.setAttribute("id", "dueDate");
    let priorityElement = document.createElement("input");
    priorityElement.setAttribute("type", "text");
    priorityElement.setAttribute("id", "priority");
    let checklistElement = document.createElement("input");
    checklistElement.setAttribute("type", "text");
    checklistElement.setAttribute("id", "checklist");
    
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "createBtn");
    submitButton.textContent = "Create";

    
    box.appendChild(titleElement);
    box.appendChild(descriptionElement);
    box.appendChild(dueDateElement);
    box.appendChild(descriptionElement);
    box.appendChild(priorityElement);
    box.appendChild(checklistElement);
    box.appendChild(submitButton);
}

