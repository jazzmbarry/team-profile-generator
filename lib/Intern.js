class Intern {
    constructor(school){
        this.school = school
    }

    getGithub(){
        inquirer
        .prompt({
          type: 'text',
          name: 'school',
          message: "What is the name of this Intern's School?"
        })
        .then(({ school }) => {
          this.Employee = new Employee(school);
  
        });
    }
    
}

module.exports = Intern