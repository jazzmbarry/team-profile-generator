const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id ,email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = 'Manager'
    }

    getOfficeNumber(){
          this.Employee = new Manager(officeNumber);
    }

    getRole() {
        this.Employee = new Manager(role);  
    }
    
}

module.exports = Manager