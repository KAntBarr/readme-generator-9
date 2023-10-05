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
        message: 'What are some features for this project?',
        name: 'features',
        default: "N/A"
    },
    {
        type: 'input',
        message: 'How would a fan contribute to this project?',
        name: 'contribute',
        default: "Donate money to any charity."
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
        default: "N/A"
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

const licenses = {
    "Academic Free License v3.0": { 'badge': "AFL-3.0", 'url': "" },
    "Apache license 2.0": { 'badge': "Apache-2.0", 'url': "" },
    "Artistic license 2.0": { 'badge': "Artistic-2.0", 'url': "" },
    "Boost Software License 1.0": { 'badge': "BSL-1.0", 'url': "" },
    "BSD 2-clause \"Simplified\" license": { 'badge': "BSD-2-Clause", 'url': "" },
    "BSD 3-clause \"New\" or \"Revised\" license": { 'badge': "BSD-3-Clause", 'url': "" },
    "BSD 3-clause Clear license": { 'badge': "BSD-3-Clause-Clear", 'url': "" },
    "BSD 4-clause \"Original\" or \"Old\" license": { 'badge': "BSD-4-Clause", 'url': "" },
    "BSD Zero-Clause license": { 'badge': "0BSD", 'url': "" },
    "Creative Commons license family": { 'badge': "CC", 'url': "" },
    "Creative Commons Zero v1.0 Universal": { 'badge': "CC0-1.0", 'url': "" },
    "Creative Commons Attribution 4.0": { 'badge': "CC-BY-4.0", 'url': "" },
    "Creative Commons Attribution ShareAlike 4.0": { 'badge': "CC-BY-SA-4.0", 'url': "" },
    "Do What The F*ck You Want To Public License": { 'badge': "WTFPL", 'url': "" },
    "Educational Community License v2.0": { 'badge': "ECL-2.0", 'url': "" },
    "Eclipse Public License 1.0": { 'badge': "EPL-1.0", 'url': "" },
    "Eclipse Public License 2.0": { 'badge': "EPL-2.0", 'url': "" },
    "European Union Public License 1.1": { 'badge': "EUPL-1.1", 'url': "" },
    "GNU Affero General Public License v3.0": { 'badge': "AGPL-3.0", 'url': "" },
    "GNU General Public License family": { 'badge': "GPL", 'url': "" },
    "GNU General Public License v2.0": { 'badge': "GPL-2.0", 'url': "" },
    "GNU General Public License v3.0": { 'badge': "GPL-3.0", 'url': "" },
    "GNU Lesser General Public License family": { 'badge': "LGPL", 'url': "" },
    "GNU Lesser General Public License v2.1": { 'badge': "LGPL-2.1", 'url': "" },
    "GNU Lesser General Public License v3.0": { 'badge': "LGPL-3.0", 'url': "" },
    "ISC": { 'badge': "ISC", 'url': "" },
    "LaTeX Project Public License v1.3c": { 'badge': "LPPL-1.3c", 'url': "" },
    "Microsoft Public License": { 'badge': "MS-PL", 'url': "" },
    "MIT": { 'badge': "MIT", 'url': "" },
    "Mozilla Public License 2.0": { 'badge': "MPL-2.0", 'url': "" },
    "Open Software License 3.0": { 'badge': "OSL-3.0", 'url': "" },
    "PostgreSQL License": { 'badge': "PostgreSQL", 'url': "" },
    "SIL Open Font License 1.1": { 'badge': "OFL-1.1", 'url': "" },
    "University of Illinois/NCSA Open Source License": { 'badge': "NCSA", 'url': "" },
    "The Unlicense": { 'badge': "Unlicense", 'url': "" },
    "zLib License": { 'badge': "Zlib", 'url': "" },
}

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
        features,
        contribute,
        tests,
        username,
        email
    } = data;

    let licenseBadge = '';

    if (license == "None") {
        license = "This project has no license.";
    } else {
        licenseBadge = ``;
        license = `Licensed under the ${license} license.`;
    }

    const formattedString =
        `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Features](#Features)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Features
${features}

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
