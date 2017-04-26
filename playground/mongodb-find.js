const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=> {
	if (err) {
		return console.log("Unable to connect to MongoDB server")
	}
	db.collection("Todos").find().count().then((result) => {
		console.log(`todo list has ${result} items in it.`)
	}, (err) => {
		console.log("Unable to count todos")
	})


	db.close();
});




	// db.collection("Todos").find(
	// 		{_id: new ObjectID("59008aa188efe2852b54b9ae")}
	// 	).toArray().then((docs) => {
	// 	console.log(docs);
	// }, (err) => {
	// 	console.log("unable to fetch todos", err);
	// })