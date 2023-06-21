


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

//TODO: Create a function that returns a license badge based on which license is passed in
//If there is no license, return an empty string
let licenseBadge = "";
function renderLicenseBadge() {
  if (data.license !== "none"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]`
  } else {
    licenseBadge = `![License](https://img.shields.io/badge/License-grey.svg)`
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseLink = "";
function renderLicenseLink() {
  if (data.license !== "none"){
    licenseLink = `(https://opensource.org/licenses/${data.license})`
}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseSection = "";
function renderLicenseSection() {
  if (data.license !== "none"){
    licenseSection = `This project is licensed under the ${data.license} license`
} else {
  licenseSection = `No license was used for this project`
}
return licenseSection;
}
renderLicenseBadge();
console.log(licenseBadge);
renderLicenseLink();
renderLicenseSection();
  const licensecomplete = licenseBadge+licenseLink;

 return `# ${data.title}  

${licensecomplete}  

## Description
${data.description}

## Table of Contents
-[Installation](#installation)  
-[Usage](#usage)  
-[License](#license)  
-[How to contribute](#contribute)  
-[Tests](#tests)  
-[Questions](#questions)  

## Installation
To install necessary dependencies, run the following command: 
>${data.install}
## Usage
${data.info}
## Credits
## License
${licenseSection}
## Contribute
${data.contribute}
## Tests
${data.tests}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username})
`
;
}
module.exports = generateMarkdown;
