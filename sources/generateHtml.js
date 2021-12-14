
function generateHtmlByRole(team){

function generateEngineerHtml(engineer) {

    return `

<div class="card">
   <div class="card-header">
       <h2 class="card-title text center">${engineer.getName()}</h2>
       <h3 class="card-title text center"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
   </div>
   <div class="card-body">
       <ul class="list-group">
           <li class="list-group-item">ID:${engineer.getId()}</li>
           <li class="list-group-item">email:<a
                   href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
           <li class="list-group-item">Github User Name: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
       </ul>
   </div>
</div>`
}

function generateInternHtml(intern) {
   
    return `
        
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID:${intern.getId()}</li>
                        <li class="list-group-item">email:<a
                                href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School Name:${intern.getSchool()}</li>
                    </ul>

                
            </div>
    </div>`

}

function generateManagerHtml(manager) {

    return `
    
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${manager.getId()}</li>
                    <li class="list-group-item">email:<a
                            href="mailto:${manager.getEmail}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
                </ul>

            
        </div>
</div>`
}
const teamHtml = []
teamHtml.push(team.filter(employee=>employee.getRole()==="engineer")
.map(engineer=>generateEngineerHtml(engineer)))
teamHtml.push(team.filter(employee=>employee.getRole()==="manager")
.map(manager=>generateManagerHtml(manager)).join(""))
teamHtml.push(team.filter(employee=>employee.getRole()==="intern")
.map(intern=>generateInternHtml(intern)).join(""))
return teamHtml.join("")

}
 module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <link rel="stylesheet" href="/style.css"/>
     <script src=“https://kit.fontawesome.com/c502137733.js”></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class=" col-12 jumbotron">
                 <h1>My Team</h1>
            </div>  
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-centre">
                
                ${generateHtmlByRole(team)} 
                          
            </div>
        </div>
    </div>

</body>

</html>
    
    `
}
