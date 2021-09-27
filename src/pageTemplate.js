const inquirer = require("inquirer")

const generateRole = data => {
  switch (data.role) {
  case 'Engineer':            
    
  return inquirer.prompt([
    {
      type: 'text',
      name: 'github',
      message: 'What is the GitHub username for this Employee?'
  }
])
                          
  case 'Intern':            
      
  return inquirer.prompt([
    {
        type: 'text',
        name: 'school',
        message: "What is the name of this Intern's School?"
    }
])
  
  case 'Manager':            
      
  return inquirer.prompt([
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the Manager's Office Number?"
    }
])

  }

}

const generateEmployees = (data) => {
    return `
    <div class="row col-2">
        <div>${data.name}</div>
        <div>${data.id}</div>
        <a href = "mailto:${data.email}">${data.email}</a>    
        <div>${data.role}</div>
        <a href = "github.com/${data.github}">${data.github}</a>
        <div>${data.officeNumber}</div>
        <div>${data.school}</div>    
    </div>
    `
}

const pageTemplate = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>The Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">  
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container">
          <div class="row">
              <!-- This will have a search bar to find your employees -->
          </div>
        </div>
      </header>
      <main class="container">
        ${generateEmployees(data)}
      </main>
      <footer class="">
        <h3 class="text-dark">&copy;2020 by ${data.name}</h3>
      </footer>
    </body>
    </html>    
    `
}

module.exports = pageTemplate