const { prompt } = require("inquirer");
const db = require("./db");
const { listenerCount } = require("./db/connection");
require("console.table");

init();
function init() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add a department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add an employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update an employee",
                    value: "UPDATE_EMPLOYEE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ])
        .then((res) => {
            let choice = res.choice;
            switch (choice) {
                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;
                case "VIEW_ROLES":
                    viewRoles();
                    break;
                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;
                case "ADD_DEPARTMENT":
                    addDepartment();
                    break;
                case "ADD_ROLE":
                    addRole();
                    break;
                case "ADD_EMPLOYEE":
                    addEmployee();
                    break;
                case "UPDATE_EMPLOYEE":
                    updateEmployee();
                    break;

                default:
                    quit();
            }
        })

}

function viewDepartments() {
    db.showDepartments();
}

function viewRoles() {
    db.showRoles();
}

function viewEmployees() {
    db.showEmployees();
}

function addDepartment(department) {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(res => {
        let departmentName = res.name;
        db.createDepartment()
    });
}

function addRole(role) {
    prompt([
        {
            name: "title",
            message: "What is the role title?"
        },
        {
            name: "salary",
            message: "What is the salary for this role?"
        }
    ]).then(res => {
        let roleTitle = res.title;
        let roleSalary = res.salary;
        db.createRole()
    });
    prompt({
        type: "list",
        name: "departmentId",
        message: "What department does this role belong to?",
        choices: departmentChoices
    })
    .then(res => {
        let departmentId = res.departmentId;
        db.showDepartments()
        .then(([rows]) => {
            let roles = rows;
                    const departmentChoices = department.map(({id, name}) => ({
                        name: `${name}`,
                        value: id
        }))
    });
}

function addEmployee() {
    prompt([ 
        {
            name: "first_name",
            message: "What is their first name?"
        },
        {
            name: "last_name",
            message: "What is their last name?"
        }
    ]).then(res => {
        let firstName = res.first_name; 
        let lastName = res.last_name;
        db.showRoles()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({id, title}) => ({
                name: title, 
                value: id
            }));
            prompt({
                type: "list",
                name: "roleId",
                message: "What is the employee's role?",
                choices: roleChoices
            })
            .then(res => {
                let roleId = res.roleId;
                db.showEmployees()
                .then(([rows]) => {
                    let employees = rows;
                    const managerChoices = employees.map(({id, first_name, last_name}) => ({
                        name: `${first_name} ${last_name}`,
                        value: id
                    }));
                    managerChoices.unshift({name: "None", value: "Null"});
                    prompt({
                        type: "list",
                        name: "managerId",
                        message: "Who is the employee's manager?",
                        choices: managerChoices
                    }).then(res => {
                        let employee = {
                            // manager id, role id
                            manager_id: res.managerId
                        }
                        db.createEmployee(employee)
                    })
                    .then(() => init())
                    })
                })
            })
        })
}

function updateEmployee(employeeId) {
    
}

function quit() {
    console.log("You're done!");
    process.exit();
}