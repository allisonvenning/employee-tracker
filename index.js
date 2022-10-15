const { prompt } = require("inquirer");
const db = require("./db");
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
    
}

function viewRoles() {
    
}

function viewEmployees() {
    
}

function addDepartment(department) {
    
}

function addRole(role) {
    
}

function addEmployee(employee) {
    
}

function updateEmployee(employeeId) {
    
}

function quit() {
    console.log("You're done!");
    process.exit();
}