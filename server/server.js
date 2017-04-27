var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose.js");
var {User} = require("./models/user.js");
var {Todo} = require("./models/todo.js");


var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
	console.log("request received");

	var todo = new Todo({
		text: req.body.text
	})

	todo.save().then((doc) => {
		res.send(doc);
	}, (error) => {
		res.status(400).send(error);
	})
})



app.listen(3000, () => {
	console.log("started on port 3000");
});