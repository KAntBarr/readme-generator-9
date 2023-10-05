// TODO: Include packages needed for this application
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const inquirer = require('inquirer');

const defaults = {
    'title': "Default Title",
    'description': "N/A",
    'installation': "N/A",
    'usage': "N/A",
    'credits': "N/A",
    'license': "None",
    'features': "N/A",
    'contribute': "N/A",
    'tests': "N/A",
    'username': "JohnDoe",
    'email': "john.doe@aol.com"
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project/application?',
        name: 'title',
        default: defaults.title
    },
    {
        type: 'input',
        message: 'Give a quick description of what the app is for.',
        name: 'description',
        default: defaults.description
    },
    {
        type: 'input',
        message: 'How do you install this app?',
        name: 'installation',
        default: defaults.installation
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage',
        default: defaults.usage
    },
    {
        type: 'input',
        message: 'Give credit to sources/collaborations.',
        name: 'credits',
        default: defaults.credits
    },
    {
        type: 'list',
        message: 'Choose a license for your app:',
        name: 'license',
        default: defaults.license,
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
        default: defaults.features
    },
    {
        type: 'input',
        message: 'How would a fan contribute to this project?',
        name: 'contribute',
        default: defaults.contribute
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
        default: defaults.tests
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        default: defaults.username
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        default: defaults.email
    },
];

const licenses = {
    "Academic Free License v3.0": { 'badge': "AFL-3.0", 'url': "No badge data for this license." },
    "Apache license 2.0": { 'badge': "Apache-2.0", 'url': "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
    "Artistic license 2.0": { 'badge': "Artistic-2.0", 'url': "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)" },
    "Boost Software License 1.0": { 'badge': "BSL-1.0", 'url': "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" },
    "BSD 2-clause \"Simplified\" license": { 'badge': "BSD-2-Clause", 'url': "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" },
    "BSD 3-clause \"New\" or \"Revised\" license": { 'badge': "BSD-3-Clause", 'url': "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" },
    "BSD 3-clause Clear license": { 'badge': "BSD-3-Clause-Clear", 'url': "No badge data for this license." },
    "BSD 4-clause \"Original\" or \"Old\" license": { 'badge': "BSD-4-Clause", 'url': "No badge data for this license." },
    "BSD Zero-Clause license": { 'badge': "0BSD", 'url': "No badge data for this license." },
    "Creative Commons license family": { 'badge': "CC", 'url': "No badge data for this license." },
    "Creative Commons Zero v1.0 Universal": { 'badge': "CC0-1.0", 'url': "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)" },
    "Creative Commons Attribution 4.0": { 'badge': "CC-BY-4.0", 'url': "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)" },
    "Creative Commons Attribution ShareAlike 4.0": { 'badge': "CC-BY-SA-4.0", 'url': "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)" },
    "Do What The F*ck You Want To Public License": { 'badge': "WTFPL", 'url': "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)" },
    "Educational Community License v2.0": { 'badge': "ECL-2.0", 'url': "No badge data for this license." },
    "Eclipse Public License 1.0": { 'badge': "EPL-1.0", 'url': "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)" },
    "Eclipse Public License 2.0": { 'badge': "EPL-2.0", 'url': "No badge data for this license." },
    "European Union Public License 1.1": { 'badge': "EUPL-1.1", 'url': "No badge data for this license." },
    "GNU Affero General Public License v3.0": { 'badge': "AGPL-3.0", 'url': "No badge data for this license." },
    "GNU General Public License family": { 'badge': "GPL", 'url': "No badge data for this license." },
    "GNU General Public License v2.0": { 'badge': "GPL-2.0", 'url': "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" },
    "GNU General Public License v3.0": { 'badge': "GPL-3.0", 'url': "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)" },
    "GNU Lesser General Public License family": { 'badge': "LGPL", 'url': "No badge data for this license." },
    "GNU Lesser General Public License v2.1": { 'badge': "LGPL-2.1", 'url': "No badge data for this license." },
    "GNU Lesser General Public License v3.0": { 'badge': "LGPL-3.0", 'url': "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)" },
    "ISC": { 'badge': "ISC", 'url': "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)" },
    "LaTeX Project Public License v1.3c": { 'badge': "LPPL-1.3c", 'url': "No badge data for this license." },
    "Microsoft Public License": { 'badge': "MS-PL", 'url': "No badge data for this license." },
    "MIT": { 'badge': "MIT", 'url': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" },
    "Mozilla Public License 2.0": { 'badge': "MPL-2.0", 'url': "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" },
    "Open Software License 3.0": { 'badge': "OSL-3.0", 'url': "No badge data for this license." },
    "PostgreSQL License": { 'badge': "PostgreSQL", 'url': "No badge data for this license." },
    "SIL Open Font License 1.1": { 'badge': "OFL-1.1", 'url': "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)" },
    "University of Illinois/NCSA Open Source License": { 'badge': "NCSA", 'url': "No badge data for this license." },
    "The Unlicense": { 'badge': "Unlicense", 'url': "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" },
    "zLib License": { 'badge': "Zlib", 'url': "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)" },
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
        credits,
        license,
        features,
        contribute,
        tests,
        username,
        email
    } = data;

    let licenseBadge = '';

    if (license == "None") {
        licenseBadge = ``;
        license = "This project has no license.";
    } else {
        licenseBadge = `${licenses[license].url}`;
        license = `Licensed under the ${license} license.`;
    }

    const formattedString =
        `# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Features](#Features)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

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

function checkParams() {

    const parameters = {
        'toTemp': false,
        'default': false,
        'help': false
    }

    const helpString = `Welcome to the README.md generator.
    For a simple execution, run 'node .' or 'node index.js' in this directory to begin the process of generating a README.md file.
    You will be asked a series of questions that will be used to generate the file.
    The parameters that are current supported are:
    
    - h / --help : This parameter will print out directions for how to use the application. This parameter will not generate a README.md and cannot be used with other parameters.
    -t           : This parameter will write the README file to README_tmp.md instead of the default, README.md. Can be used will other parameters.
    -d           : This parameter will provide a README file with default sections, skipping over the survey entirely. Can be used will other parameters.
    `;

    if (process.argv.length > 2) {
        for (arg of process.argv.slice(2)) {
            switch (arg) {
                case '-h':
                case '--help':
                    console.log(helpString);
                    parameters.help = true;
                    break;
                case '-t':
                    parameters.toTemp = true;
                    break;
                case '-d':
                    parameters.default = true;
                    break;
                default:
                    console.log(`${arg} is not supported. Please refer to our parameter options.\n`);
                    console.log(helpString);
            }
        }
    }

    return parameters;

}

// TODO: Create a function to initialize app
function init() {

    const parameters = checkParams();

    if (parameters.help) return;

    const writeFile = parameters.toTemp ? "README_tmp.md" : "README.md";

    if (parameters.default) {
        const formattedData = formatData(defaults);
        writeToFile(writeFile, formattedData);
        return;
    }

    inquirer.prompt(questions)
        .then((response) => {
            const formattedData = formatData(response);
            writeToFile(writeFile, formattedData);
        })
        .catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();
