const inquirer = require('inquirer');
const fs = require ("fs");

inquirer.prompt([
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
      message: "Why did you build this application?",
      name: "reason",
      choices: ["Fix an existing problem", "For fun", "To create something completely new"],
  },
  {
    type: 'input',
    message: 'What are the steps required to install your package?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Who are your Collaborators on this project?',
    name: 'collab',
  },
    
  ])
  .then((responses) => {
    console.log (responses);
  })

  https://drive.google.com/file/d/19U2OiQIDFHekv4gM2DR7tz7zzM7Mv6cs/view


//inquierer.prompt([
   // {
      //  type: "input",
       // name: "name",
       // message: "what is your name?",
   // },
   // {
       // type: "checkbox",
        //message: "what language do you know?",
        //name: "stack",
        //choices: ["HTML", "JAVASCRIPT", "CSS",],
   // },
   // {
       // type: "list",
        //message: "what is your preferred method of communication",
       // name: "contact",
        //choices: ["email", "call", "text"],
    //},
//])
//.then((responses) => {
    //console.log (responses);

//})

//Your project Title-
//Description
//What was your motivation
//Why did you build this project
//What does this problem solve
//What did you learn
//What are the steps required to install your package
//list you collaborters
