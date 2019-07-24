const express = require('express');
const router = express.Router();
const User = require('../models/user');



// index route
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
// new route
router.get('/new', (req, res)=>{
	User.find(req.body, (err, newUser) =>{
		if(err){
			console.log(err)
		}else{
			console.log(newUser);
			res.render('users/new.ejs', {
				user: newUser
			})
		}
	})
})
router.post('/', (req, res)=>{
	User.create(req.body, (err, createdUser)=>{
		if(err){
			console.log(err)
		}else{
			res.redirect('/users')
		}
	})
})





//show route





















module.exports= router;
