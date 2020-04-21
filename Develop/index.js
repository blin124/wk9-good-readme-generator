const fs = require("fs");
const inquirer = require("inquirer");

function template({imageHref, imageSrc, imageTitle, imageAlt, name, title, description, contents, installation, usage, license, contributors, testConduct, testInclusion, questions}) {  

    return 
    `

    `
}

inquirer
    .prompt([{
        type: "confirm",
        message: "Please include image", 
        name: "imageConfirm"
    },
    {
        type: "input",
        message: "What is the website for the image?", 
        name: "imageHref"
    },
    {
        type: "input",
        message: "What is the name of your image source?", 
        name: "imageSrc"
    },
    {
        type: "input",
        message: "Please enter a title for this image.", 
        name: "imageTitle"
    },
    {
        type: "input",
        message: "Please enter an alt for this image.", 
        name: "imageAlt"
    },
    {
        type: "input",
        message: "What is your Github username?", 
        name: "name"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your description for the project?",
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
    },   
    ])


function writeToFile(fileName, data) {
}

function init() {

}

init();

