// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description",
    name: "Description"
}, {
    type: "input",
    message: "Enter table of contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What does the use need to install?",
    name: "Installation Instructions"
}, {
    type: "input",
    message: "How is the app used?",
    name: "Usage Information"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data, fucntion (err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log (err)
    } else {
        console.log("Success!")
    }
    })

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
