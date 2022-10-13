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
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name:
                    value:
                }
                {
                    name:
                    value:
                }
                {
                    name:
                    value:
                }
                {
                    name:
                    value:
                }
                {
                    name:
                    value:
                }
                {
                    name:
                    value:
                }
            ]
        }
    ])
}