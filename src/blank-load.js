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