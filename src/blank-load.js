import './style.css';

//Factory function to create blank project array list

export const loadBlankProject = () => {
    console.log('Called LoadBlankProject - Creating a blank project array...');
    let projectsArray = [];
    console.log('Pushing the title name of the project to the project array...');
    let projectTitle = 'Default Project';
    projectsArray.push({projectTitle});
    console.log(projectsArray);
    return {projectsArray, projectTitle};
}

export const loadUI = () => {
    let content = document.getElementById('content');
    content.classList.add('box');

    document.addEventListener("DOMContentLoaded", function() {
        // Select the plus sign element
        var plusSign = document.querySelector(".plus-sign");
      
        // Add click event listener to the plus sign
        plusSign.addEventListener("click", function() {
          // Handle click event here, for example, log a message
          console.log("Plus sign clicked!");
        });
      });
}