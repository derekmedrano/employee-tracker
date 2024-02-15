const inquirer = require('inquirer');
const db = require('./connection');


function init() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to see?',
            choices: ['view all departments', 
                'view all roles', 
                'view all employees',
                 'add a department', 
                 'add a role', 
                 'add an employee',
                 'update an employee role']
        },
    ]).then(answers => {
        console.log(answers);
    
        switch(answers.option) {
            case 'view all departments':
                viewDepartments();
                break;
            case 'view all roles':
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

    // not here due to ASYNC nature !!!
    //init()
}


// start our code/app
init();