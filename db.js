// Database is a database connector with mySQL connection info
// Require mySQL
var mysql = require('mysql');

// Connection info
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'twittler'
});

// Connect
connection.connect();

// Export from file
module.exports = connection;