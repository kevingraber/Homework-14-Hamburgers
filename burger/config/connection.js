// Requiring Dependencies.
var mysql = require('mysql');
var password = require('./password.js')

// Setting up mySQL connection. 
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'burgers_db'
});

// Connection with connection info. 
connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Exporting connection so that we can access it in other files. 
module.exports = connection;