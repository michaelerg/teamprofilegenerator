// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Engineer = class extends Employee {
//     constructor(){
//         super(id, name, email, officeNumber);
// //name error?

//         this.github = github
//     }
// }
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
