// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Manager = class extends Employee {
//     constructor(){
//         super(id, name, email, officeNumber);
//         this.officeNumber = officeNumber
//     }

// getRole(){
//     return Manager;
// }
// }
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber(){
    return this.officeNumber
  }
}
module.exports = Manager