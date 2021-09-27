// Packages
const inquirer = require('inquirer')
const fs = require('fs');


// Module Exports
const Employee = require('./lib/Employee.js')
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const pageTemplate = require('./src/pageTemplate.js');
const { writeFile, copyFile } = require('./utils/generateHTML.js');


// Employee Array
const employeeArray = []

const addNewEmployee = () => {
    return inquirer.prompt([
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
            choices: ["Employee", "Engineer", "Intern", "Manager"]
        }
    ])
        // .then(({ role }) => {
        //     if (role === "Employee") {

        //     } else if (role === "Engineer") {
        //         addEngineer()
        //     } else if (role === "Intern") {
        //         addIntern()
        //     } else if (role === "Manager") {
        //         addManager()
        //     }
        // })

}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: 'What is the GitHub username for this Employee?'
        }
    ])
}
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: "What is the name of this Intern's School?"
        }
    ])
}
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the Manager's Office Number?"
        }
    ])
}

const roleSwitch = () => {

}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
            return
        }
    })

}

function init() {
    addNewEmployee()
        .then(data => {
            return pageTemplate(data)
        })
        .then(info => {
            return writeToFile('./dist/index.html', info)
        })
        .catch(err => {
            console.log(err)
        })
}

init();
