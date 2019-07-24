const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');
const User = require('../models/user');


//index route
router.get('/', (req, res) => {
	Photo.find({}, (err, foundPhotos) =>{
		if(err){
			console.log(err)
		}else{
			console.log(foundPhotos);
			res.render('index.ejs', {
				photos: foundPhotos
			})
		}
	})
})
//create route
router.post('/', (req, res)=>{
	Photo.create(req.body, (err, createPhoto)=>{
		if(err){
			console.log(err)
		}else{
			res.redirect('/photos')
		}
	})
})
router.get('/new', (req, res)=>{
	User.find({}, (err, newUser)=> {
		if(err){
			console.log(err)
		}else{
			res.render('photos/new.ejs', {
			users: newUser
			})
		}
	})
})

//delete route
router.delete('/:id', (req, res)=>{
	Photo.findOneAndDelete(req.params.id, (err, deletedPhoto) =>{
		if(err){
			console.log(err)
		}else{
			console.log(deletedPhoto, '<-- deletedPhoto')
			res.redirect('/photos')
		}
	})
})



//show route
router.get('/:id', (req, res)=>{
	Photo.findById(req.params.id, (err, eachPhoto)=>{
		if(err){
			console.log(err);
		}else{
			console.log(eachPhoto, '<-- eachPhoto in show.ejs route');
			res.render('photos/show.ejs', {
				photo: eachPhoto
			})
		}
	})
})

router.put('/:id', (req, res)=>{
	Photo.findByIdAndUpdate(req.params.id, req.body, (err, updatedPhoto)=>{
		if(err){
			console.log(err)
		}else{
			res.redirect('/photos')
		}
	})
})

router.get('/:id/edit', (req, res)=>{
	Photo.findById(req.params.id, (err, updatedPhoto)=>{
		if(err){
			console.log(err)
		}else{
			res.render('photos/edit.ejs', {
				photo: updatedPhoto
			})			
		}
	})
})







module.exports = router;