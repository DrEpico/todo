
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

    // const titleElement = document.createElement('h2');
    // titleElement.textContent = todo.title;

    // const descriptionElement = document.createElement('p');
    // descriptionElement.textContent = `Description: ${todo.description}`;

    // const dueDateElement = document.createElement('p');
    // dueDateElement.textContent = `Due Date: ${todo.dueDate}`

    // const priorityElement = document.createElement('p');
    // priorityElement.textContent = `Priority: ${todo.priority}`;
    
    // const checklistElement = document.createElement('p');
    // checklistElement.textContent = `Status: ${todo.checklist ? 'Due' : 'Done'}`;

    // box.appendChild(titleElement);
    // box.appendChild(descriptionElement);
    // box.appendChild(dueDateElement);
    // box.appendChild(priorityElement);
    // box.appendChild(checklistElement);
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
    let form = document.createElement("form");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Todo:         "
    let titleElement = document.createElement("input");
    titleElement.setAttribute("type", "text");
    titleElement.setAttribute("id", "title");
    titleElement.setAttribute("name", "title");

    let descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description:    ";
    let descriptionElement = document.createElement("input");
    descriptionElement.setAttribute("type", "text");
    descriptionElement.setAttribute("id", "description");
    descriptionElement.setAttribute("name", "description");

    let dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due:        ";
    let dueDateElement = document.createElement("input");
    dueDateElement.setAttribute("type", "date");
    dueDateElement.setAttribute("id", "dueDate");
    dueDateElement.setAttribute("name", "dueDate");
    
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority: ";
    let priorityElement = document.createElement("input");
    priorityElement.setAttribute("type", "text");
    priorityElement.setAttribute("id", "priority");
    priorityElement.setAttribute("name", "priority");

    let checklistLabel = document.createElement("label");
    checklistLabel.setAttribute("for", "checklis");
    checklistLabel.textContent = "Due : Done";
    let checklistElement = document.createElement("input");
    checklistElement.setAttribute("type", "text");
    checklistElement.setAttribute("id", "checklist");
    checklistElement.setAttribute("name", "checklist");
    
    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "createBtn");
    submitButton.textContent = "Create";

    form.appendChild(titleLabel);
    form.appendChild(titleElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(priorityLabel);
    form.appendChild(priorityElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(checklistLabel);
    form.appendChild(checklistElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);
    box.appendChild(form);
}

