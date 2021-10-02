const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
        this.role = 'Engineer'
    }

    getGithub(){
        this.Employee = new Engineer(github);
    }

    getRole() {
        this.Employee = new Engineer(role);  
    }

    
}

module.exports = Engineer