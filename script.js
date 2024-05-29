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


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-feedback', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Feedback received: Name: ${name}, Email: ${email}, Message: ${message}`);
    res.status(200).send('Feedback received');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});









