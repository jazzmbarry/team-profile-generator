const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        this.role = 'Intern'

    }

    getSchool(){
        this.Employee = new Intern(school);
    }

    getRole() {
        this.Employee = new Intern(role);  
    }

    
}

module.exports = Intern