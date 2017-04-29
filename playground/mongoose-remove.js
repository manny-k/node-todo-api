const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

const {ObjectID} = require("mongodb");


// // remove all database todos:
// Todo.remove({}).then((res) => {
// 	console.log(res);
// });

// remove by ID:
Todo.findByIdAndRemove("59048765a9d5cf7e9280d06e").then((removedTodo)=>{
	console.log(removedTodo);
})