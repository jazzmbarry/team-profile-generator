const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role)
        this.school = school
    }

    // getGithub(){
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'school',
    //       message: "What is the name of this Intern's School?"
    //     })
    //     .then(({ school }) => {
    //       this.Employee = new Employee(school);
  
    //     });
    // }
    
}

module.exports = Intern