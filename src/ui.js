
import { createTodo } from './handleTask';
import { Todo } from './handleTask';
import { deleteTodoBox } from './handleTask';

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
    box.textContent = ''; // Update content to todo list
    box.classList.remove('clickable'); // Remove clickable class
    generateForm(box);
}

function updateBox(box, todo){
    const titleElement = document.createElement('h2');
    titleElement.textContent = todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${todo.description}`;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${todo.dueDate}`;

    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${todo.priority}`;
    
    const checklistElement = document.createElement('p');
    if (todo.checklist === 'planned') {
        checklistElement.textContent = 'Status: Planned';
    } else if (todo.checklist === 'due') {
        checklistElement.textContent = 'Status: Due';
    } else {
        checklistElement.textContent = 'Status: error';
    }

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteBtn");
    deleteButton.textContent = "Done";
    deleteButton.addEventListener("click", function(){
        deleteTodoBox(todo, box);
    });
    box.appendChild(deleteButton);

    // Append elements to the box
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
        // addTodoBox(); // Add a new clickable box
        // generateForm(box);
    });

    content.appendChild(box);
}

export const loadInitialUI = () => {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    box.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        initTodoBox(box, createTodo(box)); // Initialise clicked box as todo list
        // addTodoBox(); // Add a new clickable box
        // generateForm(box);
    });

    content.appendChild(box);
};

function generateForm(box) {
    let form = document.createElement("form");

    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Todo:         ";
    let titleElement = document.createElement("input");
    titleElement.setAttribute("type", "text");
    titleElement.setAttribute("id", "title");
    titleElement.setAttribute("name", "title");
    titleElement.setAttribute('required', '');

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
    let priorityElement = document.createElement("select");
    priorityElement.setAttribute("id", "priority");
    priorityElement.setAttribute("name", "priority");

    let options = ["Low", "Medium", "High"];
    options.forEach(optionText => {
        let option = document.createElement("option");
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        priorityElement.appendChild(option);
    });

    let checklistLabel = document.createElement("label");
    checklistLabel.textContent = "Status: ";

    // Create the "Planned" radio button
    let plannedRadio = document.createElement("input");
    plannedRadio.setAttribute("type", "radio");
    plannedRadio.setAttribute("id", "planned");
    plannedRadio.setAttribute("name", "status");
    plannedRadio.setAttribute("value", "planned");
    let plannedLabel = document.createElement("label");
    plannedLabel.setAttribute("for", "planned");
    plannedLabel.textContent = "Planned";

    // Create the "Due" radio button
    let dueRadio = document.createElement("input");
    dueRadio.setAttribute("type", "radio");
    dueRadio.setAttribute("id", "due");
    dueRadio.setAttribute("name", "status");
    dueRadio.setAttribute("value", "due");
    let dueLabel = document.createElement("label");
    dueLabel.setAttribute("for", "due");
    dueLabel.textContent = "Due";

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "createBtn");
    submitButton.textContent = "Create";
    submitButton.setAttribute("type", "submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (titleElement.value.trim() === '') {
            // If title is empty, display an error message or style the field to indicate it's required
            alert('Title is required!');
            return;
        }

        const title = titleElement.value;
        const description = descriptionElement.value;
        const dueDate = dueDateElement.value;
        const priority = priorityElement.value;
        const checklist = plannedRadio.checked ? plannedRadio.value : dueRadio.value;
        const todo = new Todo(title, description, dueDate, priority, checklist);
        console.log(todo);

        addTodoBox();

        form.remove();
        updateBox(box, todo);
    });

    // Append elements to the form
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
    form.appendChild(plannedRadio);
    form.appendChild(plannedLabel);
    form.appendChild(dueRadio);
    form.appendChild(dueLabel);
    form.appendChild(document.createElement("br"));
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateElement);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    // Append the form to the box
    box.appendChild(form);
}

