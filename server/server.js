const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");
const _ = require("lodash");

var {mongoose} = require("./db/mongoose.js");
var {User} = require("./models/user.js");
var {Todo} = require("./models/todo.js");


var app = express();
const port = process.env.PORT || 3000;

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

app.get("/todos", (req,res) => {
	Todo.find().then((todos) => {
		res.send({
			todos: todos
		});
	}, (error) => {
		res.status(400).send();
	})
})



app.get("/todos/:id", (req,res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send("Id is not valid");
	}

	console.log("id received:", id)

	Todo.findById(id).then((result) => {
		if (!result) {
			return res.status(404).send();
		}
		res.send({todo: result});
	}).catch((err) => {
		res.status(404).send();
		console.log(err);
	})

})


app.delete("/todos/:id", (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		res.status(404).send();
		return console.log("not a valid ID")
	}

	Todo.findByIdAndRemove(id).then((result) => {

		if(!result) {
			console.log("result variable was empty. Id did not existing todo")
			return res.status(400).send();
		}

		console.log("todo successfully removed: " + result);
		res.send({result})
	})
	.catch((err) => {
		res.status(404).send();
		console.log(err);
})
});


app.patch("/todos/:id", (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ["text", "completed"])

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed) {
		var timeStamp = new Date().getTime();

		body.completedAt = timeStamp;

	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {returnNewDocument: true})
	.then((result) => {
		if (!result) {
			return res.status(404).send();
		}
		res.send({todo: result})
	})
	.catch((error) => {
		res.status(400).send();
	})

})

app.listen(port, () => {
	console.log("started on port: " + port);
});


module.exports = {app};

