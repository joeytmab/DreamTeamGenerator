//nodemodules//
const fs = require("fs");
const validator = require("email-validator");
const inquirer = require("inquirer");

//generate page
const createHtml = require("./utils/templateHTML");

//requirements for team members
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employeeArr = [];


console.clear();
console.log("****************************************")
console.log("Welcome to Joey's Dream Team Generator. Let's make your dream possible.")
    

const init = () => {

    
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: function nameInput(name) {
                return name !== '';
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's numerical ID:",
            validate: function validateId(name){
                return name !== '';
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email address:",
            validate: function validateEmail(name){
                return validator.validate(name);

                //installed npm email-validator to ensure proper email syntax
            }

        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's position?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter your manager's office number:",
            when: (answers) => answers.role === "Manager",
            validate: function validateName(name){
                return name !== '';
            }
        },
        {
            type: 'input',
            name:'github',
            message: "Please enter the employee's Github username:",
            when: (answers) => answers.role === "Engineer",
            validate: function nameInput(name){
                return name !=='';
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school:",
            when: (answers) => answers.role === "Intern",
            validate: function nameInput(name){
                return name !=='';
            }
        },
       {
            type: 'list',
            name: 'addAnotherEmployee',
            message: "Would you like to add another member to your dream team?",
            choices: ["yes", "no"]
            
        } 


    ])

    .then(answers => {

        const newEmployee = makeWorker(answers);

        
        
        employeeArr.push(newEmployee);
        
        if (answers.addAnotherEmployee === "yes") {
            init();

        }else {
            writeFile();
        }

    })

    .catch ((err) => {
        console.log(err)
    })
}

function makeWorker(answers) {
    let employee;

        if (answers.role === "Manager"){
            employee = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(employee);
        
        } else if (answers.role === "Engineer"){
            employee = new Engineer (answers.name, answers.id, answers.email, answers.github);
            console.log(employee);

        } else if (answers.role === "Intern"){
            employee = new Intern (answers.name, answers.id, answers.email, answers.school);
            console.log(employee);
        }
        return employee;
}

        


const writeFile = () => {
    console.clear();
    console.log("Generating index.html file.....")
    console.log("-----------------")
    console.log("Index.html completed. Please refer to /dist directory.")
    console.log("Your Team's Starting Lineup:")
    console.log(employeeArr)

    const htmlInfo = createHtml(employeeArr);

    fs.writeFileSync('./dist/index.html', htmlInfo, (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Team profile has been constructed. Index.html file created successfully!")
        }
    })

    console.log("Index.html completed. Please refer to /dist directory.")

}

//run the application
init();
