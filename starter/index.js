const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = [];

const generalInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the your name Team manager?",
      },

      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
      {
        name: "newEmployee",
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
          "Add an intern",
          "Add an engineer",
          "Finished adding team members",
        ],
      },
    ])
    .then((results) => {
      console.log(results);
      const manager = new Manager(
        results.id,
        results.name,
        results.email,
        results.officeNumber
      );
      team.push(manager);
      if (results["newEmployee"] === "Add an intern") {
        intern();
      } else if (results["newEmployee"] === "Add an engineer") {
        engineer();
      } else {
        endTeam();
      }
    });
};

generalInfo();
//initially it will prompt the user/managers info
// const employee = new Employee()
// console.log(employee)

const intern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern?",
      },

      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your school name?",
      },
    ])
    .then((results) => {
      const intern = new Intern(
        results.id,
        results.name,
        results.email,
        results.school
      );
      team.push(intern);
      options();
    });
};

const options = () => {
  inquirer
    .prompt([
      {
        name: "newEmployee",
        type: "list",
        message: "Would you like to add more team members?",
        choices: [
          "Add an intern",
          "Add an engineer",
          "Finished adding team members",
        ],
      },
    ])
    .then((results) => {
      if (results["newEmployee"] === "Add an intern") {
        intern();
      } else if (results["newEmployee"] === "Add an engineer") {
        engineer();
      } else {
        endTeam();
      }
    });
};

const endTeam = () => {
  const html = render(team);
  fs.writeFileSync(outputPath, html);
  console.log("printed file to html");
};
const engineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?",
      },

      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github?",
      },
    ])
    .then((results) => {
      const engineer = new Engineer(
        results.id,
        results.name,
        results.email,
        results.github
      );
      team.push(engineer);
      options();
    });
};
