//Require express
var express = require('express');

//Instantiate our express application
var app = express();

//Set our public directory to be our public assets
app.use(express.static('public'));
//Set our app's view home
app.set('views', './views');
//Set our view engine (we're gonna use pug / jade)
app.set('view engine', 'pug');
//Set our route for the home page
app.get('/', function (req, res) {
	//Render the view named 'index'.
	//This looks in our views directory (./views)
	//and finds 'index.pug'
	res.render('index', {
		page: 'index'
	});
});

app.get('/contact', function (req, res) {
	res.render('contact', {
		page: 'contact'
	});
});

app.get('/programming', function (req, res) {
	res.render('programming', {
		page: 'programming'
	});
});

app.get('/art', function (req, res) {
	res.render('art', {
		page: 'art'
	});
});

//Let's create the server for our application
var server = require('http').Server(app);

//Then, tell the server to listen on port 3000 for requests
server.listen(3001, function () {
	console.log('Server up.');
});