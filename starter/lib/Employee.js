// TODO: Write code to define and export the Employee class
const Employee = class {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName(){ 
    return this.name
  }
  getId(){
    return this.id
  }
  getEmail(){
    return this.email
  }getRole(){
    return 'Employee'
  }
};

module.exports = Employee

// const employee = new Employee()
// console.log(employee)
