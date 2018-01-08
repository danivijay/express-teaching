const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3001;
const app = express();

/* Middleware Example 
const logger = function(req, res, next) {
	console.log('logging');
	next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

// Global vars
app.use((req, res, next) => {
	res.locals.errors = null;
	next();
})

//sample object
let cars = [
	{name: 'audi', country: 'german'},
	{name: 'bmw', country: 'german'},
	{name: 'hyundai', country: 'korean'}
]

/* Parse JSON
app.get('/', (req, res) => {
	res.json(cars);
});
*/

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Dani',
		cars: cars
	});
});

app.post('/cars/add', (req,res) => {
	let errors = new Array();
	if(!req.body.carName || req.body.carName == '') {
		errors.push("Car Name is required");
	}
	if(!req.body.carCountry || req.body.carCountry == '') {
		errors.push("Country is required");
	}

	if(errors.length > 0){
		res.render('index', {
			title: 'Dani',
			cars: cars,
			errors: errors
		});
	}
	else {
		let newCar = {
			name: req.body.carName,
			country: req.body.carCountry
		}
		console.log('SUCCESS');
	}
	
});

app.listen(port, () => {
	console.log('Server started on ', port);
})