const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Photo = require('../models/photo');


// index route
router.get('/', async (req, res)=>{
	try{
		const users = await User.find({})
		console.log(users, '<-- users in index route')
		res.render('users/index.ejs',{
		users : users
		})}catch(err){
			res.send(err)
		}
});

// new route
router.get('/new', async (req, res)=>{
	try{
		const user = await User.find(req.body);
		console.log(req.body, 'req.body in new route')
		res.render('users/new.ejs', {
		user: user
		})
		}catch(err){
			res.send(err)
		}
})
//update route
router.put('/:id', async (req, res)=>{
	try{
	const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
	console.log(updatedUser, 'updated user');
	res.redirect('/users/' + req.params.id)
	} catch(err){
		res.send(err)
	}
})

//create route
router.post('/', async (req, res)=>{
	try{
	const createdUser = await User.create(req.body)
	console.log(createdUser, '<-- created user')
	res.redirect('/users')
		}catch(err){
			res.send(err)
		}
})

//show route
router.get('/:id', async (req, res)=>{
	console.log(req.params.id, 'req.params')
	try{
	const user = await User.findById(req.params.id)
	const photos =  await Photo.find({user: req.params.id})
	console.log(photos, 'photo')
	res.render('users/show.ejs', {
	photos: photos,
	user: user
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

//delete route
router.delete('/:id', async  (req, res)=>{
	try{
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		console.log(deletedUser, '<-- deletedUser');
		res.redirect('/users')
		}catch(err){
			res.send(err)
		}
})


module.exports= router;
