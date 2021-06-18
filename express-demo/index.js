const express = require('express') ;
const { string } = require('joi');
const app = express() ;
// used for parsing the json data within body
//for validation
const logger = require('./middleware/logger')
const authenticate = require('./middleware/authenticator')
const morgan = require('morgan')
//middlewares
app.use(logger)
app.use(authenticate)

//routes
const courses = require('./routes/courses') ;
const home = require('./routes/home')
app.use('/api/courses' , courses)
app.use('/' , home)


//built in middlewares
app.use(express.json()) ;
app.use(express.urlencoded()) ;
app.use(express.static('public')) ;


// third party middleware
app.use(morgan('tiny'))

// templating engine
app.set('view engine' , 'pug') ;
app.set('views' , './views')


//for validation
const Joi = require('joi') ;



// Enviroment Variable PORT
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`) ;
})