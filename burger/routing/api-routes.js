var path = require('path');
var orm = require('../config/orm.js')

module.exports = function(app){

	// When a post is made to /delete orm.deleteBurger will change a burger to eaten.
	app.post('/delete', function (req, res) {
		console.log('Server Log')
	    console.log(req.body.id)
	    orm.deleteBurger(req.body.id)
	});

	// Returns a JSON with all of the burgers in the database. 
	app.get('/api', function (req, res) {
	    orm.selectAll(function(x){
	    	res.json(x);
	    });
	});

	// Calls orm.addToDatebase which will add the burger to our database. 
	app.post('/api', function (req, res) {
		orm.addToDatabase(req.body.name)
	});

}