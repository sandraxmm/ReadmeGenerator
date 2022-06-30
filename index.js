// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import util from 'util';
import generateMarkdown from './generateMarkdown.js';

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
    name: "Table"
}, {
    type: "input",
    message: "What does the user need to install?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used?",
    name: "Usage"
}, {
    type: "list",
    message: "What license does the user need?",
    name: "License",
    choices: ["MIT", "Apache 2.0", "BSD 3.0"],
}, {
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
}, {
    type: "input",
    message: "How the user can test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "What is your email?",
    name: "Email"
}, {
    type: "input",
    message: "What is your GitHub username?",
    name: "Username"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    return fs.writeFileSync(path.join(process.cwd(),'/dist/',fileName),data)
    };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
