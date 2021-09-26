module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>The Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container">
          <h1 class="">${header.name}</h1>
          <nav class="">
            <a class="" href="https://github.com/${header.github}">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
      <footer class="">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `
}