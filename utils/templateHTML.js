let staffcards = [];

//makes HTML; bootstrap and fontawesome are only add-ons
function createHTML(employeeArr) {

    employeeArr.forEach((worker) => {
    
    if(worker.getRole() === "Manager") {
        staffcards += managerCard(worker)
    } else if (worker.getRole() === "Engineer") {
        staffcards += engineerCard(worker)
    } else if (worker.getRole() === "Intern") {
        staffcards += internCard(worker)
    }
    });

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>The Dream Team Portfolio!</title>

<script src="https://kit.fontawesome.com/1bbadb1994.js" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>

<body>

<div class="header">
<div class="jumbotron bg-primary">
   <h1 class="display-4 text-white text-center">My Dream Team <i class="fa-solid fa-people-group"></i></h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${staffcards} 
    </div>
</div>

</body>

</html>`

}

// Generates cards for each employee class based on user input in Inquirer

//manager
function managerCard(manager) {
    return `
    <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-primary">
            <h4 class="text-white text-center">${manager.name}</h4>  
            <h4 class="text-white text-center">Project Manager <i class="fa-solid fa-crown"></i></h4>
        </div>
        <div class="card-body bg-primary text-dark bg-opacity-10">
            <ul class="list-unstyled">
                <li><strong>Employee ID: ${manager.id}</strong></li>
                <li><strong>Email: <a href="mailto:${manager.email}">${manager.email}</a></strong></li>
                <li><strong>Office Number: ${manager.officeNumber}</strong></li>
                
            </ul>
        </div>
    </div>
</div>`
};

//engineer
function engineerCard(engineer) {
    return `
    <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-warning">
            <h4 class="text-white text-center">${engineer.name}</h4>  
            <h4 class="text-white text-center">Engineer <i class="fa-solid fa-user-gear"></i></h4>
        </div>
        <div class="card-body bg-warning text-dark bg-opacity-10">
            <ul class="list-unstyled">
                <li><strong>Employee ID: ${engineer.id}</strong></li>
                <li><strong>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></strong></li>
                <li><strong>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></strong></li>
                
            </ul>
        </div>
    </div>
</div>`
};

//intern
function internCard(intern) {
    return `
    <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
    <div class="card shadow-lg mb-5 bg-white rounded">
        <div class="card-header bg-info">
            <h4 class="text-white text-center">${intern.name}</h4>  
            <h4 class="text-white text-center">Intern <i class="fa-solid fa-user-graduate"></i></h4>
        </div>
        <div class="card-body bg-info text-dark bg-opacity-10">
            <ul class="list-unstyled">
                <li><strong>Employee ID: ${intern.id}</strong></li>
                <li><strong>Email: <a href="mailto:${intern.email}">${intern.email}</a></strong></li>
                <li><strong>Office Number: ${intern.school}</strong></li>
                
            </ul>
        </div>
    </div>
</div>`
};



module.exports = createHTML;
