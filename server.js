const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');
const photoController = require('./controllers/photos');





app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/photos', photoController);








app.listen(3000, ()=>{
	console.log('Port 3000 is running.')
});






























