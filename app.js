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

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
	res.send('hello world!!');
});

/* Parse JSON
let cars = [
	{name: 'audi', country: 'german'},
	{name: 'bmw', country: 'german'},
	{name: 'hyundai', country: 'korean'}
]

app.get('/', (req, res) => {
	res.json(cars);
});
*/

app.listen(port, () => {
	console.log('Server started on ', port);
})