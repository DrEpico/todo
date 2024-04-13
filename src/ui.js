export const loadInitialUI = () => {
    let content = document.querySelector('.content'); // Select the .content element
    let box = document.createElement('div'); // Create a new div for the .box element
    box.classList.add('box'); // Add the 'box' class to the .box element

    // Create a new div for the plus sign
    let plusSign = document.createElement('div');
    plusSign.textContent = '+';
    plusSign.classList.add('plus-sign');

    // Append the plus sign to the .box element
    box.appendChild(plusSign);

    // Append the .box element to the .content element
    content.appendChild(box);

    // Add click event listener to the plus sign
    plusSign.addEventListener('click', function() {
        // Handle click event here, for example, log a message
        console.log('Plus sign clicked!');
    });
}