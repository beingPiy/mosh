const http = require('http') ;

const server = http.createServer() ;

//event listener
//responds when event occurs according to type of event
//this is very low level code
//not used in general
server.on('connection' , (socket) =>{
    console.log("New Connection...")
})



//raises a event when something happens on port 3000
server.listen(3000) ;
console.log("listening on port 3000") ;