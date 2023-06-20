const inquirer = require('inquirer');
const fs = require('fs');

const questions = ['What is your Github Username?', 'What is your email address?', "What is your project's name?", 'Please write a short description of your project.', 'What sort of license should your project have?', 'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?', 'What does the user need to know about contributing to the repo?'];
const [username, email, title, description, license, install, tests, info, contribute] = questions;

const generateReadme = ({ username, email, title, description, license, install, tests, info, contribute }) =>
    `# ${title}
<img src="https://img.shields.io/badge/License-${license}-blue">  

## Description
${description}

## Table of Contents
-[Installation](#installation)  
-[Usage](#usage)  
-[License](#license)  
-[How to contribute](#contribute)  
-[Tests](#tests)  
-[Questions](#questions)  

## Installation
 To install necessary dependencies, run the following command: 
 >${install}
## Usage
${info}
## Credits
## License
This project is licensed under the ${license} license
## Contribute
${contribute}
## Tests
${tests}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username})
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: username,
        },
        {
            type: 'input',
            name: 'email',
            message: email,
        },
        {
            type: 'input',
            name: 'title',
            message: title,
        },
        {
            type: 'input',
            name: 'description',
            message: description,
        },
        {
            type: 'list',
            choices: ['MIT', 'APACHE2.0', 'GPL 3.0', 'BSD 3', 'none'],
            name: 'license',
            message: license,
        },
        {
            type: 'input',
            name: 'install',
            message: install,
        },
        {
            type: 'input',
            name: 'tests',
            message: tests,
        },
        {
            type: 'input',
            name: 'info',
            message: info,
        },
        {
            type: 'input',
            name: 'contribute',
            message: contribute,
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Generating README...')
        );
    });

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
