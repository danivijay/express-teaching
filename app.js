const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3001;
const app = express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.listen(port, () => {
	console.log('Server started on ', port);
})