const express = require('express') ;
const { string } = require('joi');
const app = express() ;
// used for parsing the json data within body
//for validation
const logger = require('./logger')
const authenticate = require('./authenticator')
const morgan = require('morgan')
//middlewares
app.use(logger)
app.use(authenticate)


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

var courses = [
    {id: 1 , name: "course1"},
    {id: 2 , name: "course2"},
    {id: 3 , name: "course3"},
    {id: 4 , name: "course4"}
]
app.get('/' , (req , res) => {
    res.render('index' , {title: 'My express app' , message: 'Hello'}) ;
})

app.get('/api/courses/:id' , (req , res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)) ;

    if(!course) return res.status(404).send("Course Not Found") ;
    
        
    res.send(course) ;
})

app.get('/api/courses/' , (req , res) => {
    if(!courses) return  res.status(404).send("Element not found") ;

    res.send(courses) ;
})

app.post('/api/courses' , (req , res) =>{

    // Validation

    const {error} = validateCourse(req.body)

    if(error) return  res.status(400).send(error.details[0].message) ;
   
    const course = {
        id: courses.length + 1 ,
        name: req.body.name
    }
    courses.push(course) ;
    res.send(course) ;
})


app.put('/api/courses/:id' , (req , res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id)) ;

    if(!course) return  res.status(404).send("Course Not Found") ;
   
    
    const {error} = validateCourse(req.body)
    if(error){
        res.status(400).send(error.details[0].message) ;
        return ;
    }
    course.name = req.body.name ;
    res.send(course)
}) 

app.delete('/api/courses/:id' , (req , res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)) ;

    if(!course) return  res.status(404).send("Course Not Found") ;
    
    //Delete
    const index = courses.indexOf(course) ;
    courses.splice(index , 1) ;

    res.send(course) ;

})

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required() 
    }

    return Joi.validate(course , schema) ;
    
}

// Enviroment Variable PORT
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`) ;
})