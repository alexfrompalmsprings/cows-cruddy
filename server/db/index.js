// this file is going to connect my DB

const mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'cowDatabase'
});

connection.connect();

module.exports = connection;