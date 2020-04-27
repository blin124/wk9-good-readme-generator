module.exports = require('./utils/generateMarkdown.js');

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

function getUser(username) {
    return axios
        .get(
        `https://api.github.com/users/${username}`
        )
        .catch(err => {
        console.log(`User not found`);
        process.exit(1);
    });
}

function askUser() {
    inquirer
        .prompt([{
            type: "input",
            message: "What is your Github username?", 
            name: "name"
        },
        {
            type: "input",
            message: "What is your Github email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your project title?",
            default: "Project title goes here",
            name: "title",
        },
        {
            type: "input",
            message: "Please type in a subtitle for project?",
            default: "Subtitle",
            name: "subTitle",
        },
        {
            type: "input",
            message: "What is your description for the project?",
            default: "A description is ideally one sentence. Also, include any terms or tags that can be searched.",
            name: "description",
        },
        {
            type: "input",
            message: "Any links to screenshots or gifs to project, please enter link here",
            name: "screenshotsOrGifs",
        },
        {   type: "input",
            message: "What is the main purpose for usage of this project?",
            name: "usage",
        },   
        {   type: "input",
            message: "Please input an appropriate license for this project",
            name: "license",
        },   
        {   type: "input",
            message: "Please list contributors of this project.",
            name: "contributors",
        },   
        {   type: "input",
            message: "What command should be run to install dependencies?",
            default: "npm install",
            name: "testInstall",
        },   
        {   type: "input",
            message: "What command should be run to run tests?",
            default: "npm test",
            name: "testConduct",
        },   
        {   type: "input",
            message: "What does the user need to know above using the repo?",
            name: "userToKnow",
        },   
        {   type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "userContributeToKnow",
        },
        {
            type: "input",
            message: "Please enter copyright year and name.",
            name: "copyright",
        }
        ])
        .then((inquirerResponses) => {
        console.log(inquirerResponses)
        getUser(inquirerResponses.name)
        })
        .then((githubResponse) => {
            console.log(githubResponse.data.avatar_url);
        })
}

function generateReadme(userResponse) {
    // generate the readme and return a string

}


function writeToFile(file, data) {
    // use package fs 
     generateMarkdown(data);
    fs.writefileName('READMEreal.md', file, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

function firstThing() {
    const userResponse = askUser();
    const generatedReadme = generateReadme(userResponse);
    writeToFile('README.md', generatedReadme);
}

firstThing();

