// Requiring Dependency
var connection = require('./connection.js');

// Defining functions for later use. 
var orm = {

	// Function for adding burgers to the database.
	addToDatabase: function(burgername) {
		console.log('** burgername **')
		console.log(burgername)
		var input = 'INSERT INTO burgers (burger_name) VALUE ("' + burgername + '");';
		connection.query(input, function(err, result) {
            if (err) throw err;
        });
	},

	// Function which selects all burgers in the database. 
	selectAll: function(callback) {
		var input = 'SELECT * FROM burgers';
		connection.query(input, function(err, result) {
            if (err) throw err;

            // console.log(result)
            callback(result)

        });
	},

	// Function which changes the burger from not eaten to eaten. 
	deleteBurger: function(burgerid) {
		var input = 'UPDATE burgers SET devoured=TRUE WHERE id='+burgerid+';';
		connection.query(input, function(err, result) {
            if (err) throw err;
        });
	}

};

// Exporting orm so that we can access it in other files. 
module.exports = orm;