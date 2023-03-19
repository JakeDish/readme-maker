// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
  {
    message: 'Please enter the title of this project',
    type: 'input',
    name: 'title'
  },
  {
    message: 'Please enter a description of this project',
    type: 'input',
    name: 'description'
  },
  {
    message: 'Please enter the installation instructions for this project',
    type: 'input',
    name: 'installation'
  },
  {  
    message: 'Please enter usage instructions for this project',
    type: 'input',
    name: 'usage'
  },  
  {
    message: 'Please enter a license for this project',
    type: 'list',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'None'],
    name: 'license'
  },  
  {
    message: 'Please enter the contribution guidelines for this project',
    type: 'input',
    name: 'contributing'
  },
  {  
    message: 'Please enter the test instructions for this project',
    type: 'input',
    name: 'tests'
  },
  {  
    message: 'Please enter your github username',
    type: 'input',
    name: 'username'
  },
  {
    message: 'Please enter your email address',
    type: 'input',
    name: 'email'
  }
];

inquirer.prompt(questions)
.then(response => {
  console.log(response)
  fs.writeFile(
    "ReadME1.md",
    `#H1${response.title}
  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#usage)
  4.[Contributing](#contributing)
  5.[Tests](#tests)
  6.[Contact](#contact)
  7.[License](#license)
# Description
  ${response.description}
# Installation
  ${response.installation}
# Usage
  ${response.usage}
# Contributing
  ${response.contributing}
# Tests
  ${response.tests}
# Contact
  [Github](https://github.com/${response.username})
  ${response.email}
# License
  ${response.license}
  `,
  (err) => {
    if (err)
    console.log(err);
  
  else {
    console.log("Success")
  }})
})
.catch(err=> console.log(err))
