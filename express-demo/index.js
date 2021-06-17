const express = require('express') ;

const app = express() ;

app.get('/' , (req , res) => {
    res.send("Hello World!!!") ;
})

app.get('/api/course' , (req , res) => {
    res.send([1,2,3]) ;
})

// Enviroment Variable PORT
const port = process.env.PORT || 3000;
app.listen(port , () => {
    console.log(`Listening on port ${port}...`) ;
})