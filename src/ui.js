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

function initialiseTodoBox(box) {
    box.textContent = 'Todo List'; // Update content to todo list
    box.classList.remove('clickable'); // Remove clickable class
}

function addTodoBox() {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    plusSign.addEventListener('click', function() {
        initialiseTodoBox(box); // Initialise clicked box as todo list
        addTodoBox(); // Add a new clickable box
    });

    content.appendChild(box);
}

export const loadInitialUI = () => {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    plusSign.classList.add('clickable'); // Add clickable class to initial box

    plusSign.addEventListener('click', function() {
        initialiseTodoBox(box); // Initialise clicked box as todo list
        addTodoBox(); // Add a new clickable box
    });

    content.appendChild(box);
};