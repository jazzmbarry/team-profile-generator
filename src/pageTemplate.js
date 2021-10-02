const generateManager = (managerArray) => {
  console.log(managerArray)
  if (!managerArray) {
    return
  }
  const arr = []
  for (let i = 0; i < managerArray.length; i++) {
    let manager = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Name : ${managerArray[i].name}</h5>   
    <h5 class="card-title">ID : ${managerArray[i].id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Role : ${managerArray[i].role}</h6>     
    <h6 class="card-subtitle mb-2 text-muted">Office Number: ${managerArray[i].officeNumber}</h6>
    <a href="mailto:${managerArray[i].email}" class="card-link">${managerArray[i].email}</a>
  </div>
</div>
      `
    arr.push(manager)
  }
  return arr.join('\n')
}


const generateEngineer = (engineerArray) => {
  console.log(engineerArray)
  if (!engineerArray) {
    return
  }
  const arr = []
  for (let i = 0; i < engineerArray.length; i++) {
    let engineer = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name : ${engineerArray[i].name}</h5>   
      <h5 class="card-title">ID : ${engineerArray[i].id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Role : ${engineerArray[i].role}</h6>     
      <a href="mailto:${engineerArray[i].email}" class="card-link">${engineerArray[i].email}</a>
      <a href="https://github.com/${engineerArray[i].github}" class="card-link">GitHub : ${engineerArray[i].github}</a>
    </div>
  </div>
    `
    arr.push(engineer)
  }
  return arr.join('\n')
}


const generateIntern = (internArray) => {
  console.log(internArray)
  if (!internArray) {
    return
  }
  const arr = []
  for (let i = 0; i < internArray.length; i++) {
    let intern = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name : ${internArray[i].name}</h5>   
      <h5 class="card-title">ID : ${internArray[i].id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Role : ${internArray[i].role}</h6>     
      <h6 class="card-subtitle mb-2 text-muted">School : ${internArray[i].school}</h6>
      <a href="mailto:${internArray[i].email}" class="card-link">${internArray[i].email}</a>
    </div>
  </div>
        `
    arr.push(intern)
  }
  return arr.join('\n')
}


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
      <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
      <header>
      <div class="card">
      <div class="card-header">
        The Team
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
      </div>
    </div>      
    </header>
      <main class="container">
        ${generateManager(managerArray)}
        ${generateEngineer(engineerArray)}
        ${generateIntern(internArray)}
      </main>
      <footer class="">
        <h6 class="text-dark">&copy;2020 by ${managerArray[0].name}</h6>
      </footer>
    </body>
    </html>    
    `
}


module.exports = pageTemplate