const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

function template({name, title, subTitle, description, contents, installation, usage, license, contributors, testConduct, testInclusion, questions}) {  

    return `
    https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

    



    `
}

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




inquirer
    .prompt([{
        type: "confirm",
        message: "Please include image", 
        name: "imageConfirm"
    },
    {
        type: "input",
        message: "What is your Github username?", 
        name: "name"
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
        type: "list",
        message: "Here is your contents list",
        // message: "Select the contents of your Table of Contents",
        name: "contents",
        choices: [
        "Project Title",
        "Description",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions"
        ],
    }, 
    {   type: "input",
        message: "What would be the installation operator?",
        name: "installation",
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
        message: "Have tests been conducted?",
        name: "testConduct",
    },   
    {   type: "input",
        message: "Have these tests been included in project contents?",
        name: "testInclusion",
    },   
    {   type: "input",
        message: "Please include any further questions.",
        default: "Unknown issue? There is always google there to help you.",
        name: "questions",
    }
]).then((inquirerResponses) => {
    console.log(inquirerResponses)
    getUser(inquirerResponses.name)
      .then((githubResponse) => {
        console.log(githubResponse.data.avatar_url);
    })
})



function askUser() {
    // inquirer
}

function generateReadme(userResponse) {
    // generate the readme and return a string
}


function writeToFile(fileName, data) {
    // use package fs 
}

function firstThing() {
    // const userResponse = askUser();
    // const generatedReadme = generateReadme(userResponse);
    // writeToFile('README.md', generatedReadme);
}

firstThing();

