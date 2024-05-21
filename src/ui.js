//ui.js

import { pushTodoToProject } from './handleTodo';
import { Todo } from './handleTodo';
import { deleteTodoBox } from './handleTodo';
import { createProject } from './handleProject';
import { getProjectContentByName } from './handleProject';
import { initDefaultProject } from './handleProject';
import { logProjectTodos } from './handleProject';
import { deleteProjectListener } from './handleProject';

export const body = document.querySelector('body');
const content = document.querySelector('.content');

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

function initTodoBox(box) {
    box.textContent = ''; // Update content to todo list
    box.classList.remove('clickable'); // Remove clickable class
    generateForm(box);
}

function updateBox(box, todo, project){
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

        deleteTodoBox(todo, box, project);
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
    const { box, plusSign } = createBox();

    box.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        
        initTodoBox(box); // Initialise clicked box as todo list
    });

    content.appendChild(box);
}

export const loadInitialUI = () => {
    const { box, plusSign } = createBox();

    box.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        initTodoBox(box); // Initialise clicked box as todo list
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
        let projectName = document.querySelector('#activeTab').textContent;
        console.log(projectName);
        let project = getProjectContentByName(projectName);
        console.log(project);
        updateBox(box, todo, project);
        // let projectName = document.querySelector('#activeTab').textContent;
        pushTodoToProject(todo, projectName);
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

export function loadSidebar(){
    let sidebar = document.createElement('div');
    sidebar.setAttribute('id', 'sidebar');
    body.insertBefore(sidebar, content);
    let title = document.createElement('h1');
    title.setAttribute('id', 'title');
    sidebar.appendChild(title);
    title.textContent = "Todo list app";
    let today = document.createElement('span');
    today.setAttribute('class', 'project');
    today.setAttribute('id', 'activeTab');
    today.textContent = "Daily";
    sidebar.appendChild(today);
    let newProject = document.createElement('span');
    newProject.setAttribute('class', 'project');
    newProject.textContent = "New project";
    sidebar.appendChild(newProject);

    listenSidebarClick();
    initDefaultProject();
}

export function listenSidebarClick() {
    let sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('click', function(event){
        let target = event.target;
        if (target.classList.contains('project')) {
            let clickedContent = target.textContent.trim();
            // console.log('wow');
            // console.log(typeof(clickedContent));
            // If user clicks on new project...
            if (clickedContent === "New project") {
                console.log(clickedContent);
                newProjectForm(target);
            } else if (clickedContent === "") {
                // Do nothing if the content is empty
            } else if (clickedContent === "Confirm") {
                // This case should be handled within newProjectForm's button click event
            } else { // If user clicks on any of the existing projects...
                console.log(clickedContent);
                // Remove the activeTab id from the current active tab...
                removeActiveTab();
                // ...and give it to the newly clicked project tab.
                addActiveTab(target);
                
                // let projectName = document.querySelector('#activeTab').textContent;
                let project = getProjectContentByName(clickedContent); 
                if (project){
                    console.log(typeof(project));
                    console.log(project);
                    logProjectTodos(project);
                    
                    displayProjectContent(project);//Main function for showing the todos 
                } else {
                    console.log('Project not found');
                }
            }
        }
    });
}

function newProjectForm(target) {
    // Get the clicked project tab
    let clickedProject = target;

    // Clear the text content of the clicked project tab
    clickedProject.textContent = '';

    // Create a text input field
    let projNameInput = document.createElement("input");
    projNameInput.setAttribute("type", "text");
    projNameInput.setAttribute("class", "projName");
    projNameInput.setAttribute("name", "projName");
    projNameInput.setAttribute('required', '');

    // Create a confirmation button
    let addBtn = document.createElement("button");
    addBtn.textContent = "Confirm";
    addBtn.setAttribute("class", "addBtn");

    // Append the text input field and the confirmation button to the clicked project tab
    clickedProject.appendChild(projNameInput);
    clickedProject.appendChild(addBtn);

    // Add an event listener to the confirmation button
    addBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the parent
        let newProjectName = projNameInput.value.trim();
        if (newProjectName) {
            // Do something with the new project name, e.g., create a new project
            removeActiveTab();
            clickedProject.textContent = newProjectName;
            addActiveTab(clickedProject);
            // Add a new "New project" tab
            addNewProjectElement();
            createProject(newProjectName);
        } else {
            alert("Project name cannot be empty.");
        }
    });
}

function removeActiveTab() {
    let activeTab = document.getElementById('activeTab');
    if (activeTab) {
        activeTab.removeAttribute('id');
        let button = document.querySelector('#deleteBtn');
        if (button){
            button.remove();
        }
    }
}

function addActiveTab(clickedElement) {
    clickedElement.setAttribute('id', 'activeTab');
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteBtn');
    // deleteBtn.textContent = '';
    deleteProjectListener(deleteBtn, clickedElement);
    clickedElement.appendChild(deleteBtn);
}



function addNewProjectElement() {
    let sidebar = document.querySelector('#sidebar');
    let newProject = document.createElement('span');
    newProject.setAttribute('class', 'project');
    newProject.textContent = "New project";
    sidebar.appendChild(newProject);
}

function displayProjectContent(project){
    let title = project.title;
    let todos = project.todos;

    console.log(typeof(todos));
    console.log('test log');


    // let contentArea = document.getElementById('content'); // Assuming you have a content area to display the project details
    // contentArea.innerHTML = ''; // Clear previous content

    // let projectTitle = document.createElement('h1');
    // projectTitle.textContent = project.title;
    // contentArea.appendChild(projectTitle);

    // let todosList = document.createElement('ul');
    // project.todos.forEach(todo => {
    //     let todoItem = document.createElement('li');
    //     todoItem.textContent = todo; // Assuming todos are strings, adjust if they are objects
    //     todosList.appendChild(todoItem);
    // });
    // contentArea.appendChild(todosList);
}