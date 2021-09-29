const htmlArray = [] 

const generateManager = (managerArray) => {
  console.log(managerArray)
  return `
      <div class="row col-2">
          <div>Name : ${managerArray[0].name}</div>
          <div>ID : ${managerArray[0].id}</div>
          <a href = "mailto:${managerArray[0].email}">Email : ${managerArray[0].email}</a>    
          <div>Role : ${managerArray[0].role}</div>
          <div>Office Number: ${managerArray[0].officeNumber}</div>
      </div>
      ` 
    }
      
  
const generateEngineer = (engineerArray) => {
  console.log(engineerArray)
  return `
  <div class="row col-2">
      <div>Name : ${engineerArray[0].name}</div>
      <div>ID : ${engineerArray[0].id}</div>
      <a href = "mailto:${engineerArray[0].email}">Email : ${engineerArray[0].email}</a>    
      <div>Role : ${engineerArray[0].role}</div>
      <a href = "https://github.com/${engineerArray[0].github}">GitHub : ${engineerArray[0].github}</a>
  </div>
  ` 
}


const generateIntern = (internArray) => {
  console.log(internArray)
  return `
      <div class="row col-2">
          <div>Name : ${internArray[0].name}</div>
          <div>ID : ${internArray[0].id}</div>
          <a href = "mailto:${internArray[0].email}">Email : ${internArray[0].email}</a>    
          <div>School : ${internArray[0].school}</div>    
          <div>Role : ${internArray[0].role}</div>
      </div>
      ` 
}
// const generateEmployees = (employeeArray) => {
//   for (let i = 0; i < employeeArray.length; i++) {  
//   let [i] = `
//     <div class="row col-2">
//         <div>${employeeArray[i].name}</div>
//         <div>${employeeArray[i].id}</div>
//         <a href = "mailto:${employeeArray[i].email}">${employeeArray[i].email}</a>    
//         <div>${employeeArray[i].role}</div>
//         <a href = "github.com/${employeeArray[i].github}">${employeeArray[i].github}</a>
//         <div>${employeeArray[i].officeNumber}</div>
//         <div>${employeeArray[i].school}</div>    
//     </div>
//     ` 
//   htmlArray.push([i])
//   }
    
// }

const pageTemplate = (managerArray, engineerArray, internArray) => {
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
        ${generateManager(managerArray)}
        ${generateEngineer(engineerArray)}
        ${generateIntern(internArray)}
      </main>
      <footer class="">
        <h3 class="text-dark">&copy;2020 by ${managerArray[0].name}</h3>
      </footer>
    </body>
    </html>    
    `
}


module.exports = pageTemplate