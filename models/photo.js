const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const photoSchema = new Schema({
	photoUrl: String,
	caption: {type: String, maxlength: 500},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
