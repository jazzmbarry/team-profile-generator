const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id ,email, role, officeNumber){
        super(name, id, email, role)
        this.officeNumber = officeNumber
    }

    // getGithub(){
    //     inquirer
    //     .prompt({
    //       type: 'number',
    //       name: 'officeNumber',
    //       message: "What is the Manager's Office Number?"
    //     })
    //     .then(({ officeNumber }) => {
    //       this.Employee = new Employee(officeNumber);
  
    //     });
    // }
    
}

module.exports = Manager