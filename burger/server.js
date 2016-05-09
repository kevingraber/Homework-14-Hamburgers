var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./config/connection.js');
var exphbs  = require('express-handlebars');
var orm = require('./config/orm.js');

var app = express();
var PORT = process.env.PORT || 80;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/delete', function (req, res) {
	console.log('Server Log')
    console.log(req.body.id)
    orm.deleteBurger(req.body.id)
});

app.get('/api', function (req, res) {
    orm.selectAll(function(x){
    	// console.log(x);
    	res.json(x);
    });
});

app.post('/api', function (req, res) {

	console.log('** req.body **')
	console.log(req.body)
	console.log(req.body.name)
	orm.addToDatabase(req.body.name)
 //    connection.query(input, function(err,result){
	// 	console.log(result);
	// 	if (err) throw err;
	// 	res.json(result);
	// });
});

app.listen(PORT, function(){
	console.log("App is now listening on PORT: " + PORT);
});