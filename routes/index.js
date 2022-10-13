const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// connect to the database
const connection = mysql.createConnection({
    host: "localhost",
    //port: 
    user: "root",
    password: "",
    database: "",
});

// connection ID


// initial prompt
function startPrompt() {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add employee",
            "Add role",
            "Add department",
            "Update employee",
            "Remove an employee"
        ]
    }
    ])
    .then((answers) => {
        const { choices } = answers;

        if (choices === "View all departments") {
            viewDepartments();
        }

        if (choices === "View all roles") {
            viewRoles();
        }

        if (choices === "View all employees") {
            viewEmployees();
        }

        if (choices === "Add employee") {
            addEmployee();
        }

        if (choices === "Add role") {
            addRole();
        }

        if (choices = "Add department") {
            addDepartment();
        }

        if (choices = "Update employee") {
            updateEmployee();
        }

        if (choices = "Remove employee") {
            removeEmployee();
        }

    })
}

//========= Functions ================//

// view all departments
    //viewDepartments = () => { 
    // function viewDepartments()

// view all roles

// view all employees 

// add employee 
function addEmployee() {
    inquirer.createPromptModule([
        {
            name: "firstname",
            type: "input",
            message: "Enter employee's first name"
        },
        {
            name: "lastname",
            type: "input",
            message: "Enter employee's last name"
        },
        {
            name: "role",
            type: "list",
            message: "What is their role?",
            choices: selectRole()
        },
        {
            name: "choice",
            type: "rawlist",
            message: "Who is their manager?",
            choices: selectManager()
        }
    ])
}

// Add role

// add department

// update employee

// remove an employee
