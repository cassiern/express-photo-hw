const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');
const User = require('../models/user');

//in here, just set up new, show, create, delete

//index route
router.get('/', async (req, res) => {
	try{
	const photos = await Photo.find({});
	console.log(photos);
	res.render('photos/index.ejs', {
		photos: photos
	})} catch(err){
		res.send(err)
	}
})
//create route
router.post('/', async (req, res)=>{
	try{
	const createdPhoto = await Photo.create(req.body);
			res.redirect('/photos')
		}catch(err){
			res.send(err)
		}
})
//new route
router.get('/new', async (req, res)=>{
	try{
		const users = await User.find();
		res.render('photos/new.ejs', {
			users: users
		})} catch(err){
			res.send(err)
		}
})

//delete route
router.delete('/:id', async (req, res)=>{
	try{
	const deletedPhoto = await Photo.findOneAndDelete(req.params.id);
			console.log(deletedPhoto, '<-- deletedPhoto')
			res.redirect('/photos')
		} catch(err){
			res.send(err)
		}

})

//show route
router.get('/:id', async (req, res)=>{
	try{
		const eachPhoto = await Photo.findById(req.params.id);
			console.log(eachPhoto, '<-- eachPhoto in show.ejs route');
			res.render('photos/show.ejs', {
				photo: eachPhoto
	})} catch(err){
				res.send(err)
			}
})
//update route
router.put('/:id', async (req, res)=>{
	try{
		const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body);
		res.redirect('/photos')
	}catch(err){
		res.send(err)
	}
})
//edit
router.get('/:id/edit', async (req, res)=>{
	try{
		const editedPhoto = await Photo.findById(req.params.id);
				res.render('photos/edit.ejs', {
				photo: editedPhoto
	})} catch(err){
			res.send(err)
		}
})



module.exports = router;