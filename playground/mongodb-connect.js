// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(error, db) {
	if (error) {
		return console.log("Unable connect to MongoDB server")
	}
	console.log("Server successfully connected.")

	db.collection("Users").insertOne({
		name: "Manny",
		age: 27,
		location: "Berlin"
	}, (error, result) => {
		if (error) {
			return console.log("Unable to insert user: ", error)
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp())
	})

	db.close();
})