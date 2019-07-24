const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
const photoController = require('./controllers/photos');
const userController = require('./controllers/users');




app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/photos', photoController);
app.use('/users', userController);

app.use('/', (req, res)=>{
	res.render('index.ejs')
})






app.listen(3000, ()=>{
	console.log('Port 3000 is running.')
});






























