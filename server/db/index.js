// this file is going to connect my DB

const mysql = require('mysql');

//!might need to change this to db
const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'cowList'
});

//! callbcak in here


connection.connect();

module.exports = connection;