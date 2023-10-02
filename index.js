// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Type something!',
        name: 'username',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function formatData(data) {

    const formattedString =
`# Title

## Description

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions
`;

    // return JSON.stringify(data);
    return formattedString;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log("test24");
            const formattedData = formatData(response);

            console.log(formattedData, "---------");
            writeToFile("README.md", formattedData);
        });
}

// Function call to initialize app
init();
