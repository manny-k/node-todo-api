var mongoose = require("mongoose");

var User = mongoose.model("User", {
	email: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
	},
	todo: {
		type: Number,
	}
})

module.exports = {
	User: User
};