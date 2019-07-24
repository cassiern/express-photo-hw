const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Photo = require('../models/photo');



// index route
router.get('/', async (req, res)=>{
	try{
		const users = await User.find({})
		res.render('users/index.ejs',{
		users : users
		})}catch(err){
			res.send(err)
		}
});

// new route
router.get('/new', async (req, res)=>{
	try{
		const newUser = await User.find(req.body)
		res.render('users/new.ejs', {
		user: newUser
		})
		}catch(err){
			res.send(err)
		}
})
//create route
router.post('/', async (req, res)=>{
	try{
	const createdUser = await User.create(req.body)
	res.redirect('/users')
		}catch(err){
			res.send(err)
		}
})

//show route
router.get('/:id', async (req, res)=>{
	try{
	const eachUser = await User.find(req.params.id)
	res.render('users/show.ejs', {
	user: eachUser
	})} catch(err){
		res.send(err)
		}
})

//edit route
router.get('/:id/edit', async (req, res)=>{
	try{
	const editUser = await User.findById(req.params.id)
		res.render('users/edit.ejs', {
		user: editUser
		})} catch(err){
			res.send(err)
			}
	})

//update route
router.put('/:id', async (req, res)=>{
	try{
	const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
	res.redirect('/users/' + req.params.id)
	} catch(err){
		res.send(err)
	}
})

//delete route
router.delete('/:id', async  (req, res)=>{
	try{
		const deletedUser = await User.findByIdAndDelete(req.params.id)
		res.redirect('/users')
		}catch(err){
			res.send(err)
		}
})




module.exports= router;
