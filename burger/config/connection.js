// Requiring Dependencies.
var mysql = require('mysql');
var password = require('./password.js')

// Setting up mySQL connection. 
var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'e4saaulijiioa75m',
    password: 'p4vv075mw8ydqcb0',
    database: 'k3qiifhqq0g3trnm'
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