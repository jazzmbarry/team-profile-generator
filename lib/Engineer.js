const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email, role)
        this.github = github
    }

    // getGithub(){
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'github',
    //       message: 'What is the name of this Employee?'
    //     })
    //     .then(({ github }) => {
    //       this.Employee = new Employee(github);
  
    //     });
    // }
    
}

module.exports = Engineer