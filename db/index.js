const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    showDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department;");
    }
    showRoles() {
        return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;");
    }
    showEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONTACT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;");
    }
    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
    createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }
    editEmployee(employeeId, roleId) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [employeeId, roleId]);
    }
}

module.exports = new DB(connection);