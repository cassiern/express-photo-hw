const mongoose = require('mongoose');


const userSchema = mongoose.userSchema({
	name: String,
	aboutMe: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
