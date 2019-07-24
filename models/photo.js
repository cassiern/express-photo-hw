const mongoose = require('mongoose');



const photoSchema = new mongoose.Schema({
	username: {type: String, required: true},
	photoUrl: {type: String, required: true},
	caption: {type: String, maxlength: 500},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});



const Photo = mongoose.model('Photo', photoSchema);


module.exports = Photo;
