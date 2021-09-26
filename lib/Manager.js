class Manager {
    constructor(officeNumber){
        this.officeNumber = officeNumber
    }

    getGithub(){
        inquirer
        .prompt({
          type: 'number',
          name: 'officeNumber',
          message: "What is the Manager's Office Number?"
        })
        .then(({ officeNumber }) => {
          this.Employee = new Employee(officeNumber);
  
        });
    }
    
}

module.exports = Manager