// Requiring Dependencies
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./burger/config/connection.js');
var orm = require('./burger/config/orm.js');

// Making the variable app an instance of express and defining the port. 
var app = express();
var PORT = process.env.PORT || 80;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));

// Requiring the files with routing information.
require('./burger/routing/api-routes.js')(app); 
require('./burger/routing/html-routes.js')(app);

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname+'/public/index.html'));
// });

// app.post('/delete', function (req, res) {
// 	console.log('Server Log')
//     console.log(req.body.id)
//     orm.deleteBurger(req.body.id)
// });

// app.get('/api', function (req, res) {
//     orm.selectAll(function(x){
//     	res.json(x);
//     });
// });

// app.post('/api', function (req, res) {
// 	orm.addToDatabase(req.body.name)
// });

// Makes the server start listening. 
app.listen(PORT, function(){
	console.log("App is now listening on PORT: " + PORT);
});