// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project/application?',
        name: 'title',
        default: "Default Title"
    },
    {
        type: 'input',
        message: 'Give a quick description of what the app is for.',
        name: 'description',
        default: "Default description"
    },
    {
        type: 'input',
        message: 'List Table of Contents:',
        name: 'contents',
        default: "Default contents"
    },
    {
        type: 'input',
        message: 'How do you install this app?',
        name: 'installation',
        default: "Default installation"
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage',
        default: "Default usage"
    },
    {
        type: 'input',
        message: 'Choose a license for your app:',
        name: 'license',
        default: "Default license"
    },
    {
        type: 'input',
        message: 'How would a fan contribute to this project?',
        name: 'contribute',
        default: "Default contribute"
    },
    {
        type: 'input',
        message: 'What tests have been done?',
        name: 'tests',
        default: "Default tests"
    },
    {
        type: 'input',
        message: 'Any questions?',
        name: 'questions',
        default: "Default questions"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function formatData(data) {

    console.log(data, "---");
    let {
        title,
        description,
        contents,
        installation,
        usage,
        license,
        contribute,
        tests,
        questions
    } = data;

    const formattedString =
        `# ${title}

## Description
${description}

## Table of Contents
${contents}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contribute}

## Tests
${tests}

## Questions
${questions}

`;

    // return JSON.stringify(data);
    return formattedString;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const formattedData = formatData(response);
            writeToFile("README.md", formattedData);
        })
        .catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();
