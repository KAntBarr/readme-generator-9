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
        type: 'list',
        message: 'Choose a license for your app:',
        name: 'license',
        default: "None",
        choices: [
            "None",
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0",
            "BSD 2-clause \"Simplified\" license",
            "BSD 3-clause \"New\" or \"Revised\" license",
            "BSD 3-clause Clear license",
            "BSD 4-clause \"Original\" or \"Old\" license",
            "BSD Zero-Clause license",
            "Creative Commons license family",
            "Creative Commons Zero v1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution ShareAlike 4.0",
            "Do What The F*ck You Want To Public License",
            "Educational Community License v2.0",
            "Eclipse Public License 1.0",
            "Eclipse Public License 2.0",
            "European Union Public License 1.1",
            "GNU Affero General Public License v3.0",
            "GNU General Public License family",
            "GNU General Public License v2.0",
            "GNU General Public License v3.0",
            "GNU Lesser General Public License family",
            "GNU Lesser General Public License v2.1",
            "GNU Lesser General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License"
        ]
    },
    {
        type: 'input',
        message: 'How would a fan contribute to this project?',
        name: 'contribute',
        default: "Default contribute"
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
        default: "Default tests"
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        default: "JohnDoe69"
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        default: "john.doe69@aol.com"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function formatData(data) {

    console.log(data);
    let {
        title,
        description,
        installation,
        usage,
        license,
        contribute,
        tests,
        username,
        email
    } = data;

    const formattedString =
        `# ${title}

## Description
${description}

## Table of Contents
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

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
Github Username: ${username} - https://github.com/${username}\n
Reach Me: ${email}
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
