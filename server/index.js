const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const port = process.env.PORT || 5000;

app.post('/add/user', (req, res) => {
	// const newUser ={
	// 	userName: req.body.userName,
	// 	email: req.body.email,
	// }
	console.log(req.body);
	// res.sendStatus(200);
});
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello This is a message from express server ' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));