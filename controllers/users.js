const express = require('express');
const router = express.Router();
const User = require('../models/user');




router.get('/', (req, res)=>{
	User.find({}, (err, allUsers)=>{
		if(err){
			res.send(err);
			console.log(err)
		}else{
			console.log(allUsers)
			res.render('users/index.ejs',{
				users : allUsers
			})
		}
	})
})































module.exports= router;
