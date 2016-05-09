var connection = require('./connection.js');

var orm = {

	addToDatabase: function(burgername) {
		console.log('** burgername **')
		console.log(burgername)
		var input = 'INSERT INTO burgers (burger_name) VALUE ("' + burgername + '");';
		connection.query(input, function(err, result) {
            if (err) throw err;
        });
	},

	selectAll: function(callback) {
		var input = 'SELECT * FROM burgers';
		connection.query(input, function(err, result) {
            if (err) throw err;

            // console.log(result)
            callback(result)

        });
	},

	deleteBurger: function(burgerid) {
		var input = 'UPDATE burgers SET devoured=TRUE WHERE id='+burgerid+';';
		connection.query(input, function(err, result) {
            if (err) throw err;
        });
	}

};

module.exports = orm;