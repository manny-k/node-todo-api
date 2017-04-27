const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
	if (error) {
		return console.log("Unable to connect to Mongodb Server")
	}

	db.collection("Users").findOneAndUpdate(
		{_id: new ObjectID("59008350524bf9e253c30b54")},
		{$set: {name: "Updated name Manuel"}},
		{returnOriginal: false}
		).then((result) => {
		console.log(result);
	});

	db.close();
})