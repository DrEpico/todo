function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');

    const plusSign = document.createElement('div');
    plusSign.textContent = '+';
    plusSign.classList.add('plus-sign');

    box.appendChild(plusSign);
    return { box, plusSign };
}

function addTodoBox() {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    plusSign.addEventListener('click', function() {
        console.log('Plus sign clicked!');
        addTodoBox();
    });

    content.appendChild(box);
}

export const loadInitialUI = () => {
    const content = document.querySelector('.content');
    const { box, plusSign } = createBox();

    plusSign.addEventListener('click', function() {
        console.log('Plus sign clicked!');
        addTodoBox();
    });

    content.appendChild(box);
};