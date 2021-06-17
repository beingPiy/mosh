const express = require('express') ;
const { string } = require('joi');
const app = express() ;
// used for parsing the json data within body
app.use(express.json()) ;
//for validation

const Joi = require('joi') ;

var courses = [
    {id: 1 , name: "course1"},
    {id: 2 , name: "course2"},
    {id: 3 , name: "course3"},
    {id: 4 , name: "course4"}
]
app.get('/' , (req , res) => {
    res.send("Hello World!!!") ;
})

app.get('/api/courses/:id' , (req , res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)) ;

    if(!course){
        res.status(404).send("Course Not Found") ;
    }
    else{
        res.send(course) ;
    }
})

app.post('/api/courses' , (req , res) =>{

    // Validation

    const schema = {
        name: Joi.string().min(3).required() 
    }

    const result = Joi.validate(req.body , schema) ;

    if(result.error){
        res.status(400).send(result.error.details[0].message) ;
        return ;
    }

    const course = {
        id: courses.length + 1 ,
        name: req.body.name
    }
    courses.push(course) ;
    res.send(course) ;
})

// Enviroment Variable PORT
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`) ;
})