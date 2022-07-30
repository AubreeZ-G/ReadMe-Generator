const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'GitHub',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'What is a description of this project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What did you learn building this project?',
      name: 'learn',
    },
    {
      type: "list",
      message: "Why did you build this application",
      name: "reason",
      choices: ["Fix an existing problem", "For fun", "To create something completely new"],
    },

    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"],
    },
    {
      type: 'input',
      message: 'What are the steps required to install your package?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Who are your Collaborators on this project?',
      name: 'contributing',
    },

  ])
  }
  function writeToFile(fileName, data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Success!');
    });
  }
  
  function init() {
    questions()
      .then( (answer) => {
        const fileName =
          answer.title
            .split(' ')
            .join('') + '.md';

        writeToFile(fileName, answer);
      });
  };

  init()
  