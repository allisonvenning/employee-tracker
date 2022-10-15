const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    showDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department;");
    }
    showRoles() {
        return this.connection.promise().query("SELECT role.id, role.name FROM role;");
    }
    showEmployees() {
        return this.connection.promise().query("SELECT employee.id, employee.name FROM employee;");
    }
    createDepartment() {
        return this.connection.promise().query("INSERT INTO department;");
    }
    createRole() {

    }
    createEmployee() {

    }
    editEmployee() {

    }
    quit() {
        
    }
}