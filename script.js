// Get the project container and the navigation div
const projectContainer = document.querySelector('.project-container');
const navigation = document.querySelector('.navigation');

// Calculate the total number of projects
const totalProjects = projectContainer.querySelectorAll('.project').length;

// Calculate the total number of pages (assuming 10 projects per page)
const totalPages = Math.ceil(totalProjects / 10);

// Generate and add project numbers to the project numbers div
const projectNumbersDiv = navigation.querySelector('.project-numbers');
for (let i = 1; i <= totalPages; i++) {
    const projectNumber = document.createElement('button');
    projectNumber.textContent = i;
    projectNumbersDiv.appendChild(projectNumber);
}

// Add event listeners to the project numbers buttons
const projectNumbers = projectNumbersDiv.querySelectorAll('button');
projectNumbers.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Calculate the index of the first project to display on the page
        const startIndex = index * 10;

        // Hide all projects
        projectContainer.querySelectorAll('.project').forEach(project => {
            project.style.display = 'none';
        });

        // Show the projects for the current page
        for (let i = startIndex; i < startIndex + 10 && i < totalProjects; i++) {
            projectContainer.querySelectorAll('.project')[i].style.display = 'block';
        }
    });
});









