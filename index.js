const inquirer = require('inquirer');
const db = require('./connection');


function init() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to see?',
            choices: ['View All Departments', 
                'View All Roles', 
                'View All Employees',
                 'Add a Department', 
                 'Add a Role', 
                 'Add an Employee',
                 'Update an Employee Role']
        },
    ]).then(answers => {
        console.log(answers);
    
        switch(answers.option) {

            case 'View All Departments':
                viewDepartments();
                break;

            case 'View All Roles':
                viewRoles();
                break;

            case 'View All Employees':
                ViewEmployees();
                break;   

            case 'Add a Role':
                ViewEmployees();
                break;   

            default:
                console.log("Error");
        }
    }).catch(error => {
        console.log(error);
    });

}



function viewDepartments() {
    // we make an ASYNC QUERY to our DB 
    db.query("SELECT * FROM department;", function(error, data) {
        if(error) {
            console.log("error: ", error);
        }
    
        console.table(data);
       // console.error(data);

        init();
    });

}

function viewRoles() {
    // we make an ASYNC QUERY to our DB 
    db.query("SELECT * FROM role;", function(error, data) {
        if(error) {
            console.log("error: ", error);
        }
    
        console.table(data);
       // console.error(data);

        init();
    });

}

function ViewEmployees() {
    // we make an ASYNC QUERY to our DB 
    db.query("SELECT * FROM employee;", function(error, data) {
        if(error) {
            console.log("error: ", error);
        }
    
        console.table(data);
       // console.error(data);

        init();
    });

}

function addDepartment() {
    // we make an ASYNC QUERY to our DB 
    db.query("ALTER TABLE department ADD COLUMN", function(error, data) {
        if(error) {
            console.log("error: ", error);
        }
    
        console.table(data);
       // console.error(data);

        init();
    });

}




// start our code/app
init();