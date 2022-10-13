const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'catce535',
  database: 'employee_db'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;