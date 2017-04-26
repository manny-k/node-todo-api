const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	if (err) {
		return console.log("Unable to connect to MongoDB server")
	}

	db.collection("Todos").findOneAndDelete({text: "my"}).then((result) => {
		console.log(result);
	});

	db.close();
})