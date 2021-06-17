const express = require('express') ;

const app = express() ;

app.get('/' , (req , res) => {
    res.send("Hello World!!!") ;
})

app.get('/api/posts/:year/:moth' , (req , res) => {
    res.send(req.params) ;
    // res.send(req.query) ;
})

// Enviroment Variable PORT
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`) ;
})