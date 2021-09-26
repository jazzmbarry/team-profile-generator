// Packages
const inquirer = require('inquirer')

// Module Exports
const Employee = require('./lib/Employee')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Employee Array
const employeeArray = []

const addNewEmployee = () => {
    return inquirer.prompt(
            {
                type: 'text',
                name: 'name',
                message: 'What is the name of this Employee?'
            }
            ,
            {
                type: 'text',
                name: 'id',
                message: 'What is the id connected to this Employee?'
            }
            ,
            {
                type: 'text',
                name: 'email',
                message: 'What is the email connected to this Employee?'
            }
            ,
            {
                type: 'list',
                name: 'role',
                message: "What position does this Employee hold?",
                default: 'Employee',
                Choices: ["Employee", "Engineer", "Intern", "Manager"]
            }
            )
            .then(({ role }) => {
                if (role === "Employee") {
                } else if (role === "Engineer") {
                    addEngineer()
                } else if (role === "Intern") {
                    addIntern()
                } else if (role === "Manager") {
                    addManager()
                }
              })
            
        // .then(({ name }) => {
        //   this.Employee = new Employee(name);
  
        // });
}

const addEngineer = () => {

}
const addIntern = () => {

}
const addManager = () => {

}
    
    // inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'id',
    //       message: 'What is the id connected to this Employee?'
    //     })
    //     .then(({ id }) => {
    //       this.Employee = new Employee(id);
  
    //     });
    
    // inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'email',
    //       message: 'What is the email connected to this Employee?'
    //     })
    //     .then(({ email }) => {
    //       this.Employee = new Employee(email);
  
    //     });

    
    // inquirer
    //     .prompt({
    //       type: 'list',
    //       name: 'role',
    //       message: "What position does this Employee hold?",
    //       default: 'Employee',
    //       Choices: ["Employee", "Engineer", "Intern", "Manager"]
    //     })
    //     .then(({ role }) => {
    //         if (role === "Employee") {
    //             this.Employee = new Employee(role);
    //         } else if (role === "Engineer") {
    //             this.Employee = new Employee(role);
    //             Engineer()
    //         } else if (role === "Intern") {
    //             this.Employee = new Employee(role);
    //             Intern()
    //         } else if (role === "Manager") {
    //             this.Employee = new Employee(role);
    //             Manager()
    //         }
    //     })
        

    

addNewEmployee()
