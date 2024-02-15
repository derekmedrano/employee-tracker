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

            case 'Add a Department':
                addDepartment();
                break;   

            case 'Add a Role':
                addRole();
                break;   
    
            case 'Add an Employee':
            addEmp();
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
    inquirer.prompt({
            type: 'input',
            name: 'addDepartment',
            message: 'What is the name of the new department?',
            
        
    }).then ((res) => {
        db.query("INSERT INTO department (name) VALUES (?)", [res.addDepartment], (err, result) => {
            if(err) throw err;
            console.log("Success!")
        
            init();
        });

    });
};

function addRole() {

    const departmentsArray = [];
    db.query("SELECT * FROM department", (err, result) => {
        if (err) throw err;

        result.forEach(department => {
            let departmentObj = {
                name: department.name,
                value: department.id
            }
            departmentsArray.push(departmentObj);
        });

    inquirer.prompt([{
            type: 'input',
            name: 'addRoleTitle',
            message: 'What is the title of the new Role?',
            },  
            {
            type: 'input',
            name: 'addRoleSalary',
            message: 'What is the salary of the new Role?',
            },
            {
            type: 'list',
            name: 'addRoleDepartment',
            message: 'Which department does the new role belong to?',
            choices: departmentsArray
            }
    ]).then ((res) => {
        db.query("INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)", [res.addRoleTitle, res.addRoleSalary, res.addRoleDepartment], (err, result) => {
            if(err) throw err;
            console.log("Success!")
        
            init();
        });
    })

});

};

function addEmp() {

    const roleArray = [];
    db.query("SELECT * FROM role", (err, result) => {
        if (err) throw err;

        result.forEach(role => {
            let roleObj = {
                name: role.title,
                value: role.id
            }
            roleArray.push(roleObj);
        });
    
    const managerArray = [{
        name: 'NULL',
        value: null
    }];
    
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) throw err;

        result.forEach(employee => {
            let employeeObj = {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id
            }
            managerArray.push(employeeObj);

        });


    inquirer.prompt([{
            type: 'input',
            name: 'addNewEmpFirst',
            message: 'What is the first name of the new employee?',
            },  
            {
            type: 'input',
            name: 'addNewEmpLast',
            message: 'What is the last name of the new employee?',
            },
            {
            type: 'list',
            name: 'addNewEmpRole',
            message: "What is the new employee's role?",
            choices: roleArray
            },
            {
                type: 'list',
                name: 'addNewEmpManager',
                message: "Who is the new employee's manager?",
                choices: managerArray
                }
    ]).then ((res) => {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)", [res.addNewEmpFirst, res.addNewEmpLast, res.addNewEmpRole, res.addNewEmpManager], (err, result) => {
            if(err) throw err;
            console.log("Success!")
        
            init();
        });
    });
});
});

};





// start our code/app
init();