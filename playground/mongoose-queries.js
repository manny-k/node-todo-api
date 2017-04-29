const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require("mongodb");
const User = require("./../server/models/user").User;


var id = "5903826f308b414b23c4e52b";

var userId = "5901b16a098c06016d13d468";



if (!ObjectID.isValid(userId)) {
	console.log("not a valid user id")
}


User.findById(userId).then((result) => {

	if (!result) {
		return console.log("couldn't find a user with that id")
	}

	console.log("User: ", result)
}).catch((error) => {
	console.log(error)
});













// if (!ObjectID.isValid(id)) {
// 	console.log("id is not valid")
// }

// Todo.findById(id).then((result) => {
// 	if (!result) {
// 		console.log("not found")
// 	}
// 		console.log("Found: ", result)
// }).catch((error) => {
// 	console.log(error);
// })
