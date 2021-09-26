class Engineer {
    constructor(github){
        this.github = github
    }

    getGithub(){
        inquirer
        .prompt({
          type: 'text',
          name: 'github',
          message: 'What is the name of this Employee?'
        })
        .then(({ github }) => {
          this.Employee = new Employee(github);
  
        });
    }
    
}

module.exports = Engineer