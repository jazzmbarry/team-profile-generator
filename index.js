// Packages
const inquirer = require('inquirer')
const fs = require('fs');


// Module Exports
// const Employee = require('./lib/Employee.js')
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const pageTemplate = require('./src/pageTemplate.js');
// const { writeFile, copyFile } = require('./utils/generateHTML.js');



// Employee Array
const employeeArray = []

const createTeam = () => {
    console.log(
        `
        -----------------------------

                TEAM CREATOR

        -----------------------------
        `
    )
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What position does this Employee hold?",
            choices: ["Engineer", "Intern", "Manager"]
        }
        ,
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
        ,
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        }
        ,
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
        .then(({ name, id, email, role }) => {
            if (role === "Engineer") {
                addEngineer(name, id, email)
            } else if (role === "Intern") {
                addIntern(name, id, email)
            } else if (role === "Manager") {
                addManager(name, id, email)
            }
        })
}

const addEngineer = (name, id, email) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub username for this Employee?'
        }
    ])
        .then(({ github }) => {
            const engineer = new Engineer(name, id, email, github)
            employeeArray.push(engineer)
            init()
        })
}
const addIntern = (name, id, email) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: "What is the name of this Intern's School?"
        }
    ])
        .then(({ school }) => {
            const intern = new Intern(name, id, email, school)
            employeeArray.push(intern)
            init()
        })
}
const addManager = (name, id, email) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Office Number?"
        }
    ])
        .then(({ officeNumber }) => {
            const manager = new Manager(name, id, email, officeNumber)
            employeeArray.push(manager)
            init()
        })
}

const completeTeam = function () {
    let pageData = pageTemplate(employeeArray)
    writeToFile('./dist/index.html', pageData)
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
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Do you want add a new Employee?'
        }
    ])
    .then(({ newEmployee }) => { 
        if (newEmployee === true) {
        createTeam()
    }
        else {
        console.log(employeeArray)
        completeTeam()
    }})
    // employeeArray => {
    //     return pageTemplate(employeeArray)
    // }
    // then(info => {
    //     return writeToFile('./dist/index.html', info)
    // })
    // // .catch(err => {
    // //     console.log(err)
    // // })}
}

init();
